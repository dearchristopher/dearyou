# Design system v1 — Dear You

Palette sampled from the band's screenprint art.

- `tokens.css` — CSS custom properties (color, type, spacing, radii, motion, grain).
- `style-tile.html` — static tile. Open directly or serve this folder.
- `home-mock.html` — homepage mock v4: reduced flat zine page (hero, blurb, releases, teases, elsewhere, merch, footer).
- `HANDLETTERING.md` — every `.hand` placeholder string Chris needs to letter (text, size, placement, color).
- `assets/logo-dearyou-horizontal.svg` — non-stacked logo, same trace method, path `#logo-h`.
- `assets/logo-dearyou.svg` — handwritten logo, potrace of the official art. One path (`#logo`), `fill="currentColor"`. Use via `<svg viewBox="0 0 1524 2952"><use href="assets/logo-dearyou.svg#logo"/></svg>` and set `color`.
- `assets/img/` — web-optimized images only. `assets/*.png` and `assets/art/` (raw sources) are gitignored and never served.

## Palette

| Token | Hex | Role |
|---|---|---|
| bone-50 / **100** / 200 / 300 | `#F0EEE5` / **`#E2DFD0`** / `#D1CDB9` / `#B9B49E` | paper, raised, sunken, rules |
| ink-600 / 700 / **800** / 900 | `#6A6F66` / `#4E534B` / **`#393D37`** / `#262924` | borders, muted, text, inverse bg |
| rust-300 / **500** / 600 / 700 | `#E79A84` / **`#C25136`** / `#A3402A` / `#85331F` | rust-on-dark, marks, links/CTA, hover |

Proportion: bone 80 / ink 17 / rust 3. Rust = one CTA per view, link underlines, misregistration shadow on display type, stamps, the house in the logo. Never a section fill. Base rust (`#C25136`) fails AA for body text on bone (3.47:1) — use rust-600 for anything under 24px.

## Contrast (WCAG 2.x)

| Foreground / background | Ratio | Verdict |
|---|---|---|
| ink-900 / bone-100 | 11.02 | AAA |
| ink-800 / bone-100 | 8.28 | AAA |
| ink-800 / bone-50 | 9.53 | AAA |
| ink-800 / bone-200 | 6.93 | AA |
| ink-700 / bone-100 | 5.90 | AA |
| ink-600 / bone-100 | 3.85 | large/UI only |
| rust-500 / bone-100 | 3.47 | large/UI only |
| rust-600 / bone-100 | 4.72 | AA |
| rust-700 / bone-100 | 6.30 | AA |
| bone-50 / rust-600 (button) | 5.43 | AA |
| bone-50 / rust-500 | 3.99 | large only |
| bone-50 / ink-900 | 12.68 | AAA |
| bone-300 / ink-800 | 5.32 | AA |
| rust-300 / ink-800 | 4.93 | AA |
| rust-500 / ink-800 | 2.39 | FAIL — never |

## Flat system (v2)

- Solid fills only: bone page, ink blocks, ONE rust shape per view as the focal point.
- No shadows, grain, torn edges, cards, stamps or dashed badges. No gradients except the hero photo scrim.
- Lines are 1px ink. Hierarchy = fill + space + rules (see `--elevation-0`, `--surface-*`, `--rule` in `tokens.css`).
- Asymmetric 12-col layouts, generous bone space.
- Buttons: flat rust / ink / bone fills, 2px radius, darker fill on hover, 2px focus ring.

## Type (v2)

- **Brand display: the handwritten logo.** The only expressive texture.
- **Everything else: Archivo.** Headings (bold, tight), body, UI.
- **Special Elite: letter dates only.**
- `style-tile.html` predates v2 and still shows v1 type/frames — treat `home-mock.html` as the reference.

## Homepage direction (chosen)

Letter layout + Sweet Pill restraint: photo hero, logo, one kicker line, max two buttons. Below: dated-letter feed, inline signup, releases, contact footer. Single-release mode — Fault Line is the current single.

## Unreleased art rules

- Never show unreleased cover art whole, anywhere on the site or in the repo.
- Tease only with tight crops that can't be reassembled (`assets/img/tease-*`). No titles, dates or pre-order copy until announced.
- Unconfirmed releases get a blank/held slot until confirmed.

## Dark mode (`home-mock-dark.html`)

One `<style id="dark">` override block swaps the ramps: the ink tokens carry the light values and the bone tokens carry the dark ones. Page `#232421`, inverse surfaces (merch card, next-single slot, bars) bone with dark text. Lettering and logos are currentColor SVGs, so they flip automatically. The person silhouette uses `tease-04-bone`. Hero treatments use literal colors (`?treat=none|tint|duotone`; duotone = `#232421` shadows + bone highlights).

| Pair | Ratio | Verdict |
|---|---|---|
| bone `#E2DFD0` on `#232421` (body, lettering) | 11.67 | AAA |
| muted `#B9B49E` on `#232421` | 7.49 | AAA |
| faint `#8E8A78` on `#232421` (arrows only) | 4.50 | AA |
| rust-300 `#E79A84` on `#232421` (links/hover) | 6.95 | AA |
| rust-500 `#C25136` on `#232421` (horns, graphic) | 3.36 | OK for graphics only |
| rust-500 as body text | 3.36 | **fail, not used** |
| `#232421` on bone card | 11.67 | AAA |
| `#4E534B` on bone card | 5.90 | AA |
| `#232421` on `#E79A84` (merch hover) | 6.95 | AA |
| rules: bone @ 45% on page | 3.52 | OK (non-text ≥3) |
| rules: bone @ 35% | 2.67 | fail, not used |
