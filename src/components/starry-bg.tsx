"use client";

import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // cap for perf
      const W = window.innerWidth;
      const H = Math.max(window.innerHeight, document.body.scrollHeight);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function draw() {
      resize();
      // Dark bg
      ctx.fillStyle = "#050510";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw ~30-40 tiny crisp stars spread across full page height
      const W_logical = window.innerWidth;
      const H_logical = Math.max(window.innerHeight, document.body.scrollHeight);
      const count = 200;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * W_logical;
        const y = Math.random() * H_logical;
        const r = 0.3 + Math.random() * 1.2;
        const alpha = 0.3 + Math.random() * 0.7;
        // Mostly white-blue, some gold
        const colors = ["#E3E4EF","#E3E4EF","#E3E4EF","#FFFFFF","#C9A84C"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    draw();
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
