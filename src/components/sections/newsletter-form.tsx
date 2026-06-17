"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setStatus("success");
    } catch {
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-moonlight text-sm md:text-base">
          You&apos;re in. Welcome to better sleep. ✦
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-cream mb-2">
        Join the SOMNI Society
      </h3>
      <p className="text-mist text-sm mb-6 max-w-[52ch] mx-auto">
        Sign up for exclusive access to new collections, private sales, and 10% off your first order.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 rounded-full border border-moonlight/30 bg-abyss/50 px-6 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:border-moonlight focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary text-sm uppercase tracking-[0.15em] px-8 py-3.5"
        >
          {status === "loading" ? "Joining..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
