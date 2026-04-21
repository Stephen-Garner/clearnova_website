# Design Language: Home

> Extracted from `https://clearnova.com/` on April 21, 2026
> 188 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 323 |
| `#ffffff` | hsl(0, 0%, 100%) | 18 |
| `#595959` | hsl(0, 0%, 35%) | 18 |
| `#161616` | hsl(0, 0%, 9%) | 16 |
| `#474747` | hsl(0, 0%, 28%) | 10 |
| `#e2e2e2` | hsl(0, 0%, 89%) | 4 |
| `#f6f6f6` | hsl(0, 0%, 96%) | 3 |
| `#826c6c` | hsl(0, 9%, 47%) | 2 |
| `#767676` | hsl(0, 0%, 46%) | 1 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#f6f6f6`

### Text Colors

Text color palette: `#000000`, `#474747`, `#ffffff`, `#595959`, `#161616`, `#525252`, `#826c6c`, `#151515`, `#1b1b1b`, `#5e5e5e`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 323 |
| `#ffffff` | background, text, border | 18 |
| `#595959` | text, border | 18 |
| `#161616` | text, border | 16 |
| `#474747` | text, border | 10 |
| `#e2e2e2` | border | 4 |
| `#f6f6f6` | background | 3 |
| `#826c6c` | text, border | 2 |
| `#767676` | border | 1 |
| `#c1c1c1` | border | 1 |

## Typography

### Font Families

- **Times** — used for body (96 elements)
- **Montserrat** — used for all (90 elements)
- **Arial** — used for body (1 elements)
- **monospace** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 22px | 1.375rem | 400 | 27.5px | normal | h1, h4 |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 14px | 0.875rem | 700 | normal | 0.994px | button, div, p, span |
| 13.3333px | 0.8333rem | 400 | normal | normal | input, textarea |
| 12px | 0.75rem | 400 | 18px | normal | p, a |

### Heading Scale

```css
h1 { font-size: 22px; font-weight: 400; line-height: 27.5px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (186x), `700` (2x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-16 | 16px | 1rem |
| spacing-23 | 23px | 1.4375rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-193 | 193px | 12.0625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 2 |
| md | 7px | 1 |
| full | 48px | 2 |

## Box Shadows

**sm** — blur: 5px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
```

**sm** — blur: 5px
```css
box-shadow: rgb(128, 128, 128) 0px 0px 5px 0px;
```

**sm** — blur: 6px
```css
box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
```

## CSS Custom Properties

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 2xl | 1536px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `1.5s`, `0.15s`, `1s`, `0.2s`, `0.3s`

### Common Transitions

```css
transition: all;
transition: height 1.5s;
transition: 0.15s;
transition: 1s ease-in;
transition: 0.2s;
transition: right 0.3s;
```

### Keyframe Animations

**loaderscale**
```css
@keyframes loaderscale {
  0% { transform: scale(1); opacity: 1; }
  45% { transform: scale(0.1); opacity: 0.7; }
  80% { transform: scale(1); opacity: 1; }
}
```

**opacity-bounce**
```css
@keyframes opacity-bounce {
  0% { opacity: 0; transform: translateY(100%); }
  60% { transform: translateY(-20%); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (2 instances)

```css
.button {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  padding-top: 8px;
  padding-right: 40px;
  border-radius: 48px;
}
```

### Cards (2 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
  padding-top: 24px;
  padding-right: 24px;
}
```

### Inputs (6 instances)

```css
.input {
  background-color: rgb(255, 255, 255);
  color: rgb(71, 71, 71);
  border-color: rgb(226, 226, 226);
  border-radius: 4px;
  font-size: 16px;
  padding-top: 23px;
  padding-right: 16px;
}
```

### Links (4 instances)

```css
.link {
  color: rgb(22, 22, 22);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigatio {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (2 instances)

```css
.foote {
  background-color: rgb(246, 246, 246);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (1 instances)

```css
.modal {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Badges (3 instances)

```css
.badge {
  color: rgb(71, 71, 71);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Input — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(71, 71, 71);
  padding: 23px 16px 7px 16px;
  border-radius: 4px;
  border: 1px solid rgb(226, 226, 226);
  font-size: 16px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(71, 71, 71);
  padding: 16px 16px 16px 16px;
  border-radius: 4px;
  border: 1px solid rgb(226, 226, 226);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 8px 40px 8px 40px;
  border-radius: 48px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 700;
```

## Layout System

**0 grid containers** and **7 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 24px |
| 125% | 24px |
| 66.6667% | 24px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 2x |
| row/wrap | 3x |
| row/nowrap | 2x |

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 2 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#000000` | 21:1 | AAA |

## Design System Score

**Overall: 73/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 85/100 |
| Typography Consistency | 50/100 |
| Spacing System | 55/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- No clear primary brand color detected
- 4 font families — consider limiting to 2 (heading + body)
- No consistent spacing base unit detected — values appear arbitrary
- 7 !important rules — prefer specificity over overrides
- 94% of CSS is unused — consider purging
- 1800 duplicate CSS declarations

## Z-Index Map

**2 unique z-index values** across 1 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 10000,1000003 | div.x.-.e.l. .x.-.e.l.-.d.i.v. .c.1.-.1. .c.1.-.2. .c.1.-.5.2. .c.1.-.5.3. .c.1.-.5.4. .c.1.-.4. .c.1.-.5.5. .c.1.-.5.6. .c.1.-.3. .c.1.-.5.7. .c.1.-.5.8. .c.1.-.5.9. .c.1.-.5.a. .c.1.-.5.b. .c.1.-.5.c. .c.1.-.5.d. .c.1.-.v. .c.1.-.1.s. .c.1.-.u. .c.1.-.1.4. .c.1.-.2.6. .c.1.-.1.6. .c.1.-.2.5. .c.1.-.5.e. .c.1.-.b. .c.1.-.c. .c.1.-.5.f. .c.1.-.5.g. .c.1.-.5.h. .c.1.-.5.i. .c.1.-.5.j. .c.1.-.5.k. .c.1.-.5.l. .c.1.-.d. .c.1.-.e. .c.1.-.f. .c.1.-.g, div |

**Issues:**
- [object Object]

## SVG Icons

**1 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xl | 1 |

**Icon colors:** `currentColor`, `black`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Montserrat | self-hosted | 400, 700 | normal |
| Open Sans | self-hosted | 400, 600 | normal |

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `xl` | `1s` | 1000 |
| `xxl` | `1.5s` | 1500 |

### Easing Families

- **ease-in-out** (1 uses) — `ease`

## Component Anatomy

### input — 4 instances


## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (verbose)

### Top CTA Verbs

- **submit** (1)

### Button Copy Patterns

- "submit" (1×)

### Sample Headings

> Are you ready to de-risk your next building technology deployment and gain absolute clarity?

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Times` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
