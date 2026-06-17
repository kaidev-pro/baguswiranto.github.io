# Kai Portfolio Redesign Plan

## Reference: ranimth.xyz
Warm, clean, personal brand. Single-page vertical scroll. Minimal effects, strong typography.

## Changes

### 1. Name
- Display: "Kai" (all pages except resume.html)
- Page title: "Kai — Developer & Entrepreneur"
- Footer: "© 2026 Kai. All rights reserved."
- Alt text: "Kai" (profile image)

### 2. Color Palette (Soft & Dreamy Blue)
| Token | Value | Description |
|-------|-------|-------------|
| --background | #F0F4FA | Lavender white |
| --foreground | #1E2A3A | Dark navy text |
| --primary | #7EC8E3 | Baby blue |
| --accent | #A8C5E2 | Soft periwinkle |
| --card-bg | rgba(255,255,255,0.85) | White glassmorphism |
| --card-border | rgba(126,200,227,0.2) | Light blue border |
| --muted | #8FA3BF | Blue-gray muted text |

### 3. Typography
- **Headings**: DM Serif Display (elegant, bold serif — similar feel to ranimth's condensed)
- **Body**: DM Sans (clean, modern, readable)
- **Mono**: JetBrains Mono (dev feel)
- All via Google Fonts

### 4. Layout — Sections (ranimth-style)
```
01 — Hero (name + "Available for collaboration" + short tagline)
02 — About Me (text + photo + role badge)
03 — Skills (numbered cards grid, dark brown bg)
04 — Projects (card grid with brand accents)
05 — Experience (timeline or cards)
06 — Contact CTA (email + social links)
```

### 5. Effects — Strip heavy, keep minimal
**Remove:**
- Solar system animation
- Custom cursor (dot + trailing glow)
- Canvas-based particle system
- Cosmic energy streaks/ink splashes

**Keep:**
- Scroll reveal animations (IntersectionObserver)
- Subtle hover effects on cards
- Typing effect (retained but simplified)

**Add:**
- Smooth scroll between sections
- Parallax-lite on hero (CSS-only)
- Fade-in on section entry

### 6. Navigation
- Fixed top nav: Logo "KAI." + links (About, Skills, Projects, Contact) + CTA button
- Minimal, clean, matches ranimth style

### 7. Mobile
- Same layout, responsive
- Hamburger menu for nav
- Remove heavy CSS animations, keep lightweight transitions

### 8. Files to Change
- `src/app/globals.css` — new theme, remove particle/cursor/solar animations
- `src/app/layout.tsx` — new fonts, metadata, title
- `src/components/home-client.tsx` — full redesign (sections, layout, content)
- `src/components/mobile-page.tsx` — match desktop redesign
- **Remove heavy components:**
  - animated-background.tsx
  - cosmic-energy.tsx
  - cosmic-glow.tsx
  - custom-cursor.tsx
  - floating-particles.tsx
  - solar-system.tsx
- **Keep:** typing-effect.tsx (simplified), project-card.tsx (restyled)
- `src/components/page-wrapper.tsx` — simplify

### 9. Domain
- Rename repo: baguswiranto.github.io → kaidev.github.io
- Update GitHub Pages settings
- Update git remote
