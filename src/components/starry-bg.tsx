"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  color: string;
  pulse: boolean;
  phase: number;
}

const PALETTE = [
  { color: "#E3E4EF", weight: 0.75 }, // cool white-blue
  { color: "#FFFFFF", weight: 0.15 }, // pure white
  { color: "#C9A84C", weight: 0.10 }, // gold
];

function pickColor(): string {
  const r = Math.random();
  let acc = 0;
  for (const p of PALETTE) {
    acc += p.weight;
    if (r < acc) return p.color;
  }
  return PALETTE[0].color;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<ImageData | null>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number, dpr: number;
    let pulseTimer: ReturnType<typeof setTimeout>;
    const t0 = Date.now();

    /* ---- noise texture: very dark grain #020208 → #080812 ---- */
    function makeNoise(): ImageData {
      const img = ctx!.createImageData(W, H);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = 2 + Math.floor(Math.random() * 7); // 2–8
        d[i] = v; // R
        d[i + 1] = v; // G
        d[i + 2] = v + Math.floor(Math.random() * 10); // B — slight blue bias
        d[i + 3] = 255; // A
      }
      return img;
    }

    /* ---- 2–3 faint nebula-like blobs (radial gradients, very low opacity) ---- */
    function drawNebulae() {
      const blobs: {
        x: number;
        y: number;
        r: number;
        c: [number, number, number];
      }[] = [
        { x: W * 0.22, y: H * 0.28, r: Math.min(W, H) * 0.42, c: [18, 14, 36] },
        { x: W * 0.72, y: H * 0.58, r: Math.min(W, H) * 0.38, c: [12, 18, 32] },
        { x: W * 0.48, y: H * 0.18, r: Math.min(W, H) * 0.32, c: [15, 12, 28] },
      ];
      for (const b of blobs) {
        const g = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.06)`);
        g.addColorStop(0.5, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.02)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = g;
        ctx!.fillRect(0, 0, W, H);
      }
    }

    /* ---- spawn stars: point sources, no glow ---- */
    function spawnStars() {
      // scale count to viewport: ~25–40 at 1920×1080
      const count = Math.max(15, Math.min(50, Math.round((W * H) / 52000)));

      const arr: Star[] = [];
      for (let i = 0; i < count; i++) {
        const bright = Math.random() < 0.1; // 10% bright
        arr.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: bright
            ? 0.8 + Math.random() * 0.7 // 0.8–1.5 px
            : 0.3 + Math.random() * 0.5, // 0.3–0.8 px
          opacity: bright
            ? 0.8 + Math.random() * 0.2 // 0.8–1.0
            : 0.4 + Math.random() * 0.3, // 0.4–0.7
          color: pickColor(),
          pulse: false,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // mark 1–2 stars for very slow subtle pulse
      for (let i = 0; i < Math.min(2, arr.length); i++) {
        arr[i].pulse = true;
      }

      starsRef.current = arr;
    }

    /* ---- draw crisp filled circles — no blur, no glow ---- */
    function drawStars(now: number) {
      for (const s of starsRef.current) {
        let alpha = s.opacity;
        if (s.pulse) {
          // very slow sinusoidal pulse, period ~8–12 s
          const t = 0.5 + 0.5 * Math.sin(now * 0.0008 + s.phase);
          alpha = s.opacity * (0.75 + 0.25 * t); // ±12.5 % variation
        }
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = s.color;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    /* ---- one full redraw (noise → nebulae → stars) ---- */
    function redraw(now: number) {
      if (!noiseRef.current) return;
      ctx!.clearRect(0, 0, W, H);
      ctx!.putImageData(noiseRef.current, 0, 0);
      drawNebulae();
      drawStars(now);
    }

    /* ---- resize: rebuild noise, re-spawn stars ---- */
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      noiseRef.current = makeNoise();
      spawnStars();
      redraw((Date.now() - t0) / 1000);
    }

    /* ---- 200 ms interval: subtle pulse only, not 60 fps ---- */
    function tick() {
      redraw((Date.now() - t0) / 1000);
      pulseTimer = setTimeout(tick, 200);
    }

    resize();
    window.addEventListener("resize", resize);
    pulseTimer = setTimeout(tick, 200);

    return () => {
      clearTimeout(pulseTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
