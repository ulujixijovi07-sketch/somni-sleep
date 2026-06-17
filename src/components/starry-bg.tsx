"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  color: string;     // hex for center
  glowColor: string; // hex for outer glow
  tier: 1 | 2 | 3;
}

// 92% cool blue-white palette
const BLUE_WHITES = [
  "#C8D8F0", "#D0DCF4", "#D8E0F8", "#DCE4FA", "#E0E8FC",
  "#C4D4EC", "#CCD8F0", "#D4DCF4", "#E4ECFE", "#E8EEFF",
];

// 8% warm gold (rare)
const GOLDS = ["#C9A84C"];

// Tier definitions
const TIERS = [
  { share: 0.60, rMin: 0.5, rMax: 1.0, aMin: 0.15, aMax: 0.30, speedMin: 0.0008, speedMax: 0.0020 },
  { share: 0.30, rMin: 1.0, rMax: 1.5, aMin: 0.30, aMax: 0.60, speedMin: 0.0005, speedMax: 0.0012 },
  { share: 0.10, rMin: 1.5, rMax: 2.5, aMin: 0.60, aMax: 1.00, speedMin: 0.0003, speedMax: 0.0008 },
] as const;

const STAR_MIN = 250;
const STAR_MAX = 350;

function pickColor(): { color: string; glowColor: string } {
  const r = Math.random();
  if (r < 0.08) {
    // Warm gold
    return { color: "#C9A84C", glowColor: "#C9A84C" };
  }
  const base = BLUE_WHITES[Math.floor(Math.random() * BLUE_WHITES.length)];
  // Pick a slightly different shade for the outer glow
  const glow =
    BLUE_WHITES[Math.floor(Math.random() * BLUE_WHITES.length)];
  return { color: base, glowColor: glow };
}

function hexToRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
}

function pickTier(): { tier: 1 | 2 | 3; rMin: number; rMax: number; aMin: number; aMax: number; speedMin: number; speedMax: number } {
  const roll = Math.random();
  if (roll < TIERS[0].share) {
    return { tier: 1, ...TIERS[0] };
  }
  if (roll < TIERS[0].share + TIERS[1].share) {
    return { tier: 2, ...TIERS[1] };
  }
  return { tier: 3, ...TIERS[2] };
}

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
      stars = Array.from({ length: count }, () => {
        const { tier, rMin, rMax, aMin, aMax, speedMin, speedMax } = pickTier();
        const { color, glowColor } = pickColor();
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r: rMin + Math.random() * (rMax - rMin),
          baseAlpha: aMin + Math.random() * (aMax - aMin),
          phase: Math.random() * Math.PI * 2,
          speed: speedMin + Math.random() * (speedMax - speedMin),
          color,
          glowColor,
          tier,
        };
      });
    }

    function drawStar(s: Star, alpha: number) {
      const { x, y, r } = s;
      // Glow radius: 2×–3× star radius for soft radial spread
      const glowR = r * 2.5;
      const grad = ctx!.createRadialGradient(x, y, 0, x, y, glowR);
      grad.addColorStop(0, hexToRgba(s.color, alpha));
      grad.addColorStop(0.3, hexToRgba(s.glowColor, alpha * 0.6));
      grad.addColorStop(0.6, hexToRgba(s.glowColor, alpha * 0.15));
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx!.beginPath();
      ctx!.arc(x, y, glowR, 0, Math.PI * 2);
      ctx!.fillStyle = grad;
      ctx!.fill();
    }

    function draw(timestamp: number) {
      if (!visible) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx!.clearRect(0, 0, W, H);

      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(timestamp * s.speed + s.phase);
        const alpha = s.baseAlpha * (0.4 + 0.6 * twinkle); // range 0.4×–1.0× baseAlpha
        drawStar(s, alpha);
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
