"use client";

import { useEffect, useRef } from "react";

export default function HeroAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      // Deep dark base
      ctx.fillStyle = "#050A14";
      ctx.fillRect(0, 0, w, h);

      // Orb 1 — warm gold, slow drift
      const x1 = w * 0.3 + Math.sin(time * 0.4) * w * 0.15;
      const y1 = h * 0.4 + Math.cos(time * 0.35) * h * 0.15;
      const r1 = Math.min(w, h) * 0.35;
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      g1.addColorStop(0, "rgba(201, 168, 76, 0.04)");
      g1.addColorStop(0.5, "rgba(201, 168, 76, 0.015)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Orb 2 — cool blue, opposite drift
      const x2 = w * 0.7 + Math.cos(time * 0.5) * w * 0.12;
      const y2 = h * 0.6 + Math.sin(time * 0.45) * h * 0.12;
      const r2 = Math.min(w, h) * 0.3;
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      g2.addColorStop(0, "rgba(60, 100, 160, 0.04)");
      g2.addColorStop(0.5, "rgba(40, 70, 120, 0.015)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Orb 3 — subtle warm center glow
      const x3 = w * 0.5;
      const y3 = h * 0.45;
      const r3 = Math.min(w, h) * 0.25;
      const g3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, r3);
      g3.addColorStop(0, "rgba(201, 168, 76, 0.025)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
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
