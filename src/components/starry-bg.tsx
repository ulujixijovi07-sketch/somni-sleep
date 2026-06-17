"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  color: string;
}

const STAR_MIN = 150;
const STAR_MAX = 200;
// Cool blue-white palette with ~8% rare warm gold
const COLORS = [
  "#B2B2CC", "#B2B2CC", "#B2B2CC", "#B2B2CC", "#B2B2CC", // ~42% cool blue-white
  "#C8C8E6", "#C8C8E6", "#C8C8E6",                          // ~25% brighter blue-white
  "#F0F0FF", "#F0F0FF",                                      // ~17% very bright white
  "#C9A84C",                                                  //  ~8% warm gold (rare)
];

export default function StarryBackground() {
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
    let stars: Star[] = [];
    let visible = true;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      spawnStars();
    }

    function spawnStars() {
      const count = STAR_MIN + Math.floor(Math.random() * (STAR_MAX - STAR_MIN));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.5 + Math.random() * 1.0, // 0.5–1.5px
        baseAlpha: 0.1 + Math.random() * 0.3, // 0.1–0.4
        phase: Math.random() * Math.PI * 2,
        speed: 0.0003 + Math.random() * 0.0012,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function draw(timestamp: number) {
      if (!visible) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx!.clearRect(0, 0, W, H);

      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(timestamp * s.speed + s.phase);
        const alpha = s.baseAlpha * (0.5 + 0.5 * twinkle);

        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        // Parse hex color to rgba with twinkle alpha
        const hexToRgba = (hex: string, a: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
        };
        ctx!.fillStyle = hexToRgba(s.color, alpha);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleVisibility() {
      visible = !document.hidden;
    }

    resize();
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
