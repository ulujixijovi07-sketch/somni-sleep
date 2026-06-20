"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { UploadSimple, X } from "@phosphor-icons/react";

type Review = {
  id: number;
  authorName: string;
  rating: number;
  title: string | null;
  body: string | null;
  isVerified: boolean;
  createdAt: string;
  images?: { id: number; url: string }[];
};

type ProductReviewsProps = { productId: number };

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState<"recent" | "highest">("recent");
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formTitle, setFormTitle] = useState("");
  const [formBody, setFormBody] = useState("");
  const [formImages, setFormImages] = useState<string[]>([]); // base64 data URLs
  const [formOrderNumber, setFormOrderNumber] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Lightbox
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showPurchaseNotice, setShowPurchaseNotice] = useState(false);

  const handleWriteReview = () => {
    // TODO: check if user has purchased this product
    // For now, show purchase notice for everyone
    setShowPurchaseNotice(true);
  };

  const openForm = () => {
    setFormName("");
    setFormImages([]);
    setShowPurchaseNotice(false);
    setFormOpen(true);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    const newImages: string[] = [];
    const remaining = 3 - formImages.length;
    for (const file of Array.from(files).slice(0, remaining)) {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      newImages.push(base64);
    }
    setFormImages((prev) => [...prev, ...newImages].slice(0, 3));
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (i: number) => {
    setFormImages((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formBody.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          authorName: formName.trim() || "Anonymous",
          rating: formRating,
          title: formTitle.trim() || null,
          body: formBody.trim(),
          images: formImages,
        }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Failed");
      }
      toast.success("Review submitted!");
      setFormOpen(false);
      setFormBody("");
      setFormTitle("");
      setFormRating(5);
      setFormImages([]);
      fetch(`/api/reviews?productId=${productId}`)
        .then((r) => r.json())
        .then((data) => setReviews(Array.isArray(data) ? data : []))
        .catch(() => {});
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ── Fetch reviews (always works) ──────────────────────────────────
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/reviews?productId=${productId}`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load reviews");
        return r.json();
      })
      .then((data) => {
        setReviews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  // ── Computed values ───────────────────────────────────────────────
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const breakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => Math.round(r.rating) === star).length;
    return { star, count, pct: reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0 };
  });

  const sorted = [...reviews].sort((a, b) =>
    sort === "recent"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : b.rating - a.rating
  );

  const [visibleCount, setVisibleCount] = useState(5);
  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="mt-14 border-t border-moonlight/20 pt-10 max-w-[1200px] mx-auto px-10">
      <h2 className="font-display text-2xl font-light text-moonlight">
        Customer Reviews
      </h2>

      {/* Write review button — always visible */}
      <div className="mt-3">
        {formOpen ? (
          <button
            onClick={() => { setFormOpen(false); setShowPurchaseNotice(false); }}
            className="inline-block rounded bg-moonlight/15 border border-moonlight/30 px-5 py-2.5 font-medium text-xs uppercase tracking-widest text-moonlight hover:bg-moonlight/25 transition-colors"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={handleWriteReview}
            className="inline-block rounded bg-moonlight/15 border border-moonlight/30 px-5 py-2.5 font-medium text-xs uppercase tracking-widest text-moonlight hover:bg-moonlight/25 transition-colors"
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Purchase notice */}
      {showPurchaseNotice && !formOpen && (
        <div className="mt-4 rounded border border-moonlight/30 bg-moonlight/10 px-5 py-4 text-center">
          <p className="font-body text-sm text-moonlight">🛡️ 购买后可评价</p>
          <p className="mt-1 font-body text-xs text-moonlight/60">Please purchase this product before leaving a review.</p>
        </div>
      )}

      {/* Review Form */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="mt-6 rounded border border-moonlight/20 bg-moonlight/5 p-6 space-y-4">
          <div>
            <label className="block font-body text-xs text-text-secondary mb-1">Your Name *</label>
            <input value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="Your name"
              className="w-full rounded border border-border bg-brand-primary px-3 py-2 font-body text-sm text-text-primary" required maxLength={100} />
          </div>
          <div>
            <label className="block font-body text-xs text-text-secondary mb-1">Rating</label>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((n) => (
                <button key={n} type="button" onClick={() => setFormRating(n)}
                  className={cn("text-xl", n <= formRating ? "text-moonlight" : "text-text-secondary/20")}>♥</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-body text-xs text-text-secondary mb-1">Title <span className="text-text-secondary/50">(optional)</span></label>
            <input value={formTitle} onChange={(e) => setFormTitle(e.target.value)} placeholder="Summarize your experience"
              className="w-full rounded border border-border bg-brand-primary px-3 py-2 font-body text-sm text-text-primary" maxLength={200} />
          </div>
          <div>
            <label className="block font-body text-xs text-text-secondary mb-1">Your Review *</label>
            <textarea value={formBody} onChange={(e) => setFormBody(e.target.value)} placeholder="Share your thoughts…" rows={4}
              className="w-full rounded border border-border bg-brand-primary px-3 py-2 font-body text-sm text-text-primary resize-none" required maxLength={2000} />
          </div>
          {/* Image upload */}
          <div>
            <label className="block font-body text-xs text-text-secondary mb-1">Images <span className="text-text-secondary/50">(up to 3)</span></label>
            <div className="flex items-center gap-2 mb-2">
              <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileSelect} />
              <button type="button" onClick={() => fileInputRef.current?.click()} disabled={uploading || formImages.length >= 3}
                className="flex items-center gap-1.5 rounded border border-dashed border-border px-3 py-1.5 font-body text-xs text-text-secondary hover:text-text-primary hover:border-moonlight/50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <UploadSimple className="h-3.5 w-3.5" />
                {uploading ? "Processing…" : "Add Photos"}
              </button>
            </div>
            {formImages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formImages.map((url, i) => (
                  <div key={i} className="relative group">
                    <img src={url} alt="" className="h-16 w-16 rounded border border-border object-cover" />
                    <button type="button" onClick={() => removeImage(i)}
                      className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-burgundy text-white text-[10px] hover:bg-red-600 transition-colors">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button type="submit" disabled={submitting}
            className="w-full rounded bg-moonlight py-2.5 font-semibold text-xs uppercase tracking-widest text-abyss hover:bg-moonlight/90 disabled:opacity-50">
            {submitting ? "Submitting…" : "Submit Review"}
          </button>
        </form>
      )}

      {loading ? (
        <p className="py-8 text-center font-body text-sm text-text-secondary">
          Loading reviews…
        </p>
      ) : error ? (
        <p className="py-8 text-center font-body text-sm text-text-secondary">
          Unable to load reviews.
        </p>
      ) : (
        <>
          {/* Summary */}
          <div className="mt-6 flex flex-col gap-6 sm:flex-row">
            <div className="flex flex-col items-center rounded-sm border border-moonlight/30 bg-moonlight/5 px-8 py-6">
              <p className="font-display text-4xl font-light text-moonlight">
                {avgRating.toFixed(1)}
              </p>
              <div className="mt-1 flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={cn(
                      "text-sm",
                      n <= Math.round(avgRating) ? "text-moonlight" : "text-text-secondary/30"
                    )}
                  >
                    ♥
                  </span>
                ))}
              </div>
              <p className="mt-1 font-body text-xs text-text-secondary">
                {reviews.length} review{reviews.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex-1 space-y-1.5">
              {breakdown.map((b) => (
                <div key={b.star} className="flex items-center gap-2">
                  <span className="w-8 text-right font-body text-xs text-text-secondary">
                    {b.star}♥
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-secondary">
                    <div
                      className="h-full rounded-full bg-moonlight transition-all"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-8 font-body text-xs text-text-secondary">
                    {b.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => { setSort("recent"); setVisibleCount(5); }}
              className={cn(
                "rounded-sm px-3 py-1.5 font-body text-xs",
                sort === "recent"
                  ? "bg-brand-dark text-text-light"
                  : "bg-brand-secondary text-text-secondary"
              )}
            >
              Most Recent
            </button>
            <button
              onClick={() => { setSort("highest"); setVisibleCount(5); }}
              className={cn(
                "rounded-sm px-3 py-1.5 font-body text-xs",
                sort === "highest"
                  ? "bg-brand-dark text-text-light"
                  : "bg-brand-secondary text-text-secondary"
              )}
            >
              Highest Rated
            </button>
          </div>

          {/* Review list */}
          {sorted.length === 0 ? (
            <p className="mt-6 font-body text-sm text-moonlight/50">
              No reviews yet. Be the first to review this product.
            </p>
          ) : (
            <div className="mt-6 divide-y divide-border">
              {visible.map((review) => (
                <div key={review.id} className="bg-moonlight/[0.03] rounded-lg px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={cn(
                            "text-xs",
                            n <= review.rating ? "text-moonlight" : "text-text-secondary/30"
                          )}
                        >
                          ♥
                        </span>
                      ))}
                    </div>
                    <span className="font-body text-sm font-medium text-moonlight">
                      {review.authorName}
                    </span>
                    {review.isVerified && (
                      <span className="rounded-sm bg-moonlight/15 px-1.5 py-0.5 font-body text-[10px] text-moonlight border border-moonlight/30">
                        Verified
                      </span>
                    )}
                  </div>
                  {review.title && (
                    <p className="mt-1 font-body text-base font-medium text-text-primary">
                      {review.title}
                    </p>
                  )}
                  {review.body && (
                    <p className="mt-1 font-body text-base leading-relaxed text-text-secondary">
                      {review.body}
                    </p>
                  )}
                  {review.images && review.images.length > 0 && (
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {review.images.map((img) => (
                        <img
                          key={img.id}
                          src={img.url}
                          alt="Review"
                          className="h-48 w-48 rounded border border-border object-cover cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setLightboxImage(img.url)}
                        />
                      ))}
                    </div>
                  )}
                  <p className="mt-2 font-body text-sm text-moonlight/50">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
          {!loading && !error && sorted.length > 0 && hasMore && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setVisibleCount((c) => c + 5)}
                className="rounded border border-moonlight/30 px-8 py-3 font-body text-sm text-moonlight hover:bg-moonlight/10 transition-colors"
              >
                Load More Reviews ({sorted.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>
          <img
            src={lightboxImage}
            alt="Review full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
