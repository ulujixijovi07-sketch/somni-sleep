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

    // Sleep mask path — centered and scaled relative to viewport
    function getMaskPath(scale: number) {
      const cx = W / 2;
      const cy = H * 0.4;
      const w = scale * 0.85; // half-width scale factor
      const h = scale * 0.55; // half-height scale factor

      const mx = cx;
      const my = cy;

      const p = new Path2D();

      // Start at left strap point
      const lx = mx - w * 1.15;
      const ly = my;

      p.moveTo(lx, ly);

      // Left eye — top curve
      p.bezierCurveTo(
        mx - w * 0.95,
        my - h * 1.15,
        mx - w * 0.35,
        my - h * 0.75,
        mx - w * 0.08,
        my
      );

      // Nose bridge dip (top)
      p.bezierCurveTo(
        mx - w * 0.02,
        my - h * 0.08,
        mx + w * 0.02,
        my - h * 0.08,
        mx + w * 0.08,
        my
      );

      // Right eye — top curve
      p.bezierCurveTo(
        mx + w * 0.35,
        my - h * 0.75,
        mx + w * 0.95,
        my - h * 1.15,
        mx + w * 1.15,
        my
      );

      // Right eye — bottom curve (outer to inner)
      p.bezierCurveTo(
        mx + w * 0.9,
        my + h * 1.05,
        mx + w * 0.4,
        my + h * 0.55,
        mx + w * 0.08,
        my + h * 0.05
      );

      // Nose bridge dip (bottom) — deeper dip for nose
      p.bezierCurveTo(
        mx + w * 0.03,
        my + h * 0.2,
        mx - w * 0.03,
        my + h * 0.2,
        mx - w * 0.08,
        my + h * 0.05
      );

      // Left eye — bottom curve (inner to outer)
      p.bezierCurveTo(
        mx - w * 0.4,
        my + h * 0.55,
        mx - w * 0.9,
        my + h * 1.05,
        lx,
        ly
      );

      p.closePath();
      return p;
    }

    // Subtle secondary glow shapes — two eye ellipses
    function getEyeOvals(scale: number) {
      const cx = W / 2;
      const cy = H * 0.4;
      const w = scale * 0.85;

      const eyeW = w * 0.28;
      const eyeH = w * 0.16;
      const gap = w * 0.28;

      return [
        { x: cx - gap, y: cy, rx: eyeW, ry: eyeH },
        { x: cx + gap, y: cy, rx: eyeW, ry: eyeH },
      ];
    }

    function drawMask(t: number) {
      const cx = W / 2;
      const cy = H * 0.4;
      const scale = Math.min(W, H) * 0.35;

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

      // ---- Subtle strap lines ----
      const lx = cx - scale * 0.85 * 1.15;
      const rx = cx + scale * 0.85 * 1.15;
      const strapAlpha = 0.1 + glowIntensity * 0.06;

      ctx!.beginPath();
      ctx!.moveTo(lx, cy);
      ctx!.bezierCurveTo(
        lx - scale * 0.3,
        cy - scale * 0.05,
        lx - scale * 0.8,
        cy,
        lx - scale * 1.1,
        cy
      );
      ctx!.strokeStyle = `rgba(201, 168, 76, ${strapAlpha})`;
      ctx!.lineWidth = 1;
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.moveTo(rx, cy);
      ctx!.bezierCurveTo(
        rx + scale * 0.3,
        cy - scale * 0.05,
        rx + scale * 0.8,
        cy,
        rx + scale * 1.1,
        cy
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

      // Background
      ctx!.fillStyle = "#050510";
      ctx!.fillRect(0, 0, W, H);

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
