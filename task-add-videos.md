# Task: Add hero videos to Auditory and Tactile product pages

## Context
- Project: D:/projects/somni-sleep (Next.js 14, dark theme)
- Videos already in public/videos/: sonus-hero.mp4 (4.6MB), tactus-hero.mp4 (7.6MB)
- Current pages show only product card grid, no video/hero section

## Files to modify

### 1. D:/projects/somni-sleep/src/app/[locale]/shop/auditory/page.tsx
Add a hero video section ABOVE the product card grid, after the description glass-card.

Requirements:
- Add a full-width video section between the glass-card description and the product grid
- Use `<video>` tag with controls, autoPlay (muted), loop, playsInline
- Video src: "/videos/sonus-hero.mp4"
- Poster: none (or we can add later)
- The video should be in a dark container with rounded corners, matching the existing glass-card aesthetic
- Use `preload="metadata"` for performance
- Add a subtle label above the video like "Product Showcase"
- Container max-width matches the glass-card (max-w-[700px] mx-auto)
- Use motion.div for fade-in animation consistent with other sections

### 2. D:/projects/somni-sleep/src/app/[locale]/shop/tactile/page.tsx
Same as above but video src: "/videos/tactus-hero.mp4"

## Design reference
The existing page uses:
- bg-abyss background
- glass-card class for cards
- motion.div with fade-in animations
- text-cream for headings, text-mist for body
- text-moonlight for accent colors

## After changes
```bash
cd D:/projects/somni-sleep && npx next build --webpack 2>&1 | tail -20
```

Verify build succeeds, then report back.
