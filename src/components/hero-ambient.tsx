"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
  alpha: number;
}

const PARTICLE_COUNT = 50;

export default function HeroAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let W: number;
    let H: number;
    let dpr: number;

    const particles: Particle[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.2 + 0.2,
          speed: Math.random() * 0.25 + 0.08,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.01 + 0.003,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    // Sleep mask silhouette — follows reference contour (191×107px, AR 1.79:1)
    function getMaskPath(scale: number) {
      const cx = W / 2;
      const cy = H * 0.4;

      const refW = 191;
      const refCX = 95.5;
      const refCY = 53.5;

      // Key contour points from reference sleep mask image
      const pts = [
        { x: 7, y: 51 },    // 0: upper left strap side
        { x: 15, y: 91 },   // 1: left lower side
        { x: 39, y: 109 },  // 2: left bottom curve
        { x: 96, y: 100 },  // 3: center bottom (nose bridge)
        { x: 137, y: 132 }, // 4: right bottom wing tip (lowest, asymmetric)
        { x: 193, y: 110 }, // 5: right lower side
        { x: 179, y: 65 },  // 6: right upper strap side
        { x: 43, y: 26 },   // 7: top center
      ];

      const n = pts.length;
      const s = (2 * scale) / refW; // px per reference unit

      const mx = (rx: number) => cx + (rx - refCX) * s;
      const my = (ry: number) => cy + (ry - refCY) * s;

      // Smooth tangents at each anchor (Catmull-Rom style)
      const tangents = pts.map((_p, i) => {
        const prev = pts[(i - 1 + n) % n];
        const next = pts[(i + 1) % n];
        const dx = next.x - prev.x;
        const dy = next.y - prev.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        return { x: dx / len, y: dy / len };
      });

      const path = new Path2D();
      path.moveTo(mx(pts[0].x), my(pts[0].y));

      for (let i = 0; i < n; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % n];
        const ta = tangents[i];
        const tb = tangents[(i + 1) % n];

        const segLen = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
        const k = 0.3; // tension — lower = rounder curves

        const cp1x = a.x + ta.x * segLen * k;
        const cp1y = a.y + ta.y * segLen * k;
        const cp2x = b.x - tb.x * segLen * k;
        const cp2y = b.y - tb.y * segLen * k;

        path.bezierCurveTo(
          mx(cp1x), my(cp1y),
          mx(cp2x), my(cp2y),
          mx(b.x), my(b.y)
        );
      }

      path.closePath();
      return path;
    }

    // Dual eye glows — centered on the mask's widest horizontal zone
    function getEyeOvals(scale: number) {
      const cx = W / 2;
      const cy = H * 0.4;
      const s = (2 * scale) / 191;

      // Eye centers in reference coords: ~y=58 (widest zone), x=±50 from center
      const eyeY = cy + (58 - 53.5) * s;
      const eyeGap = 50.5 * s; // half-distance between eye centers

      const eyeRx = scale * 0.2;
      const eyeRy = scale * 0.12;

      return [
        { x: cx - eyeGap, y: eyeY, rx: eyeRx, ry: eyeRy },
        { x: cx + eyeGap, y: eyeY, rx: eyeRx, ry: eyeRy },
      ];
    }

    function drawMask(t: number) {
      const cx = W / 2;
      const cy = H * 0.4;
      const scale = Math.min(W * 0.65, H * 0.85) / 2;

      // Pulse animation — slow breathing rhythm
      const pulse = 1 + 0.06 * Math.sin(t * 0.0012);
      const glowIntensity = 0.55 + 0.25 * Math.sin(t * 0.0012);

      // ---- Backlight glow behind the mask ----
      const glowRadius = scale * 1.6 * pulse;
      const backGlow = ctx!.createRadialGradient(
        cx,
        cy,
        scale * 0.2,
        cx,
        cy,
        glowRadius
      );
      backGlow.addColorStop(0, `rgba(201, 168, 76, ${glowIntensity})`);
      backGlow.addColorStop(
        0.3,
        `rgba(201, 168, 76, ${glowIntensity * 0.55})`
      );
      backGlow.addColorStop(
        0.55,
        `rgba(201, 168, 76, ${glowIntensity * 0.15})`
      );
      backGlow.addColorStop(0.8, "rgba(201, 168, 76, 0.02)");
      backGlow.addColorStop(1, "rgba(201, 168, 76, 0)");

      ctx!.beginPath();
      ctx!.arc(cx, cy, glowRadius, 0, Math.PI * 2);
      ctx!.fillStyle = backGlow;
      ctx!.fill();

      // ---- Soft eye-area glows ----
      const eyes = getEyeOvals(scale);
      for (const eye of eyes) {
        const eyeGlow = ctx!.createRadialGradient(
          eye.x,
          eye.y,
          eye.rx * 0.2,
          eye.x,
          eye.y,
          eye.rx * 2.2
        );
        eyeGlow.addColorStop(
          0,
          `rgba(201, 168, 76, ${glowIntensity * 0.6})`
        );
        eyeGlow.addColorStop(
          0.5,
          `rgba(201, 168, 76, ${glowIntensity * 0.15})`
        );
        eyeGlow.addColorStop(1, "rgba(201, 168, 76, 0)");

        ctx!.beginPath();
        ctx!.ellipse(
          eye.x,
          eye.y,
          eye.rx * 2.2,
          eye.ry * 2.2,
          0,
          0,
          Math.PI * 2
        );
        ctx!.fillStyle = eyeGlow;
        ctx!.fill();
      }

      // ---- Mask shape fill ----
      const maskPath = getMaskPath(scale);

      // Fill — very dark with subtle gold warmth
      const fillGrad = ctx!.createLinearGradient(
        cx,
        cy - scale * 0.3,
        cx,
        cy + scale * 0.3
      );
      fillGrad.addColorStop(0, "#0A0A1A");
      fillGrad.addColorStop(0.5, "#0D0C18");
      fillGrad.addColorStop(1, "#0A0A1A");

      ctx!.fillStyle = fillGrad;
      ctx!.fill(maskPath);

      // Edge glow stroke
      ctx!.strokeStyle = `rgba(201, 168, 76, ${
        0.2 + glowIntensity * 0.25
      })`;
      ctx!.lineWidth = 1.2 * pulse;
      ctx!.stroke(maskPath);

      // Inner rim light — slightly offset, thinner
      ctx!.strokeStyle = `rgba(253, 248, 237, ${
        0.06 + glowIntensity * 0.08
      })`;
      ctx!.lineWidth = 3;
      ctx!.stroke(maskPath);

      // ---- Subtle strap lines from upper attachment points ----
      const rs = (2 * scale) / 191;
      const leftStrapX = cx + (7 - 95.5) * rs;
      const leftStrapY = cy + (51 - 53.5) * rs;
      const rightStrapX = cx + (179 - 95.5) * rs;
      const rightStrapY = cy + (65 - 53.5) * rs;
      const strapAlpha = 0.1 + glowIntensity * 0.06;

      // Left strap
      ctx!.beginPath();
      ctx!.moveTo(leftStrapX, leftStrapY);
      ctx!.bezierCurveTo(
        leftStrapX - scale * 0.25,
        leftStrapY - scale * 0.04,
        leftStrapX - scale * 0.7,
        leftStrapY + scale * 0.02,
        leftStrapX - scale * 0.95,
        leftStrapY + scale * 0.01
      );
      ctx!.strokeStyle = `rgba(201, 168, 76, ${strapAlpha})`;
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // Right strap
      ctx!.beginPath();
      ctx!.moveTo(rightStrapX, rightStrapY);
      ctx!.bezierCurveTo(
        rightStrapX + scale * 0.25,
        rightStrapY - scale * 0.04,
        rightStrapX + scale * 0.7,
        rightStrapY + scale * 0.02,
        rightStrapX + scale * 0.95,
        rightStrapY + scale * 0.01
      );
      ctx!.strokeStyle = `rgba(201, 168, 76, ${strapAlpha})`;
      ctx!.lineWidth = 1;
      ctx!.stroke();
    }

    function drawParticles(t: number) {
      for (const p of particles) {
        p.y -= p.speed;
        p.x += Math.sin(t * p.wobbleSpeed + p.wobble) * 0.3;

        // Reset particle when it drifts off top
        if (p.y < -20) {
          p.y = H + 20;
          p.x = W * 0.2 + Math.random() * W * 0.6;
        }
        // Wrap horizontally
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201, 168, 76, ${p.alpha.toFixed(2)})`;
        ctx!.fill();
      }
    }

    function draw(timestamp: number) {
      ctx!.clearRect(0, 0, W, H);

      // Background — transparent, let StarryBackground show through
      ctx!.clearRect(0, 0, W, H);

      // Subtle vignette
      const vig = ctx!.createRadialGradient(
        W / 2,
        H * 0.4,
        Math.min(W, H) * 0.12,
        W / 2,
        H * 0.4,
        Math.max(W, H) * 0.75
      );
      vig.addColorStop(0, "rgba(10, 10, 26, 0)");
      vig.addColorStop(1, "rgba(5, 5, 16, 0.55)");
      ctx!.fillStyle = vig;
      ctx!.fillRect(0, 0, W, H);

      drawParticles(timestamp);
      drawMask(timestamp);

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
