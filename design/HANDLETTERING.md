# Hand-lettering list — home mock v4

> **Status: delivered.** Chris lettered all six words. They are traced to `assets/hand/*.svg` (one path `#h`, `fill="currentColor"`, used as `<svg class="hw"><use href="assets/hand/WORD.svg#h"/></svg>`) and wired into home-a/b/c and home-mock. One drawing per word at every size. Source PNGs (ink/bone/rust) are kept alongside.

Every `.hand` element in `home-mock.html` has a `data-hand="Hxx"` id and is a placeholder set in Permanent Marker. Replace each with Chris's lettering.

**Deliver:** one color on transparent. Ideally an SVG traced like the logo (single path, `fill="currentColor"`, so CSS sets the color); otherwise a PNG at 3× the listed height. Same pen as the logo, all caps.

**Dedup:** one drawing is reused wherever the sizes are within ~1.4×. `listen` needs two drawings because nav size and section-title size are ~3× apart, and scaling would change the stroke weight.

| ID | Text (exact) | Used where | Cap height, desktop / mobile | Color |
|---|---|---|---|---|
| H01 | `about` | nav word (top-left, −4°) **and** label above the blurb (−3°) | 26–29px / 20–23px | ink-900 `#262924` |
| H02 | `listen` | nav word (top-center, +3°) | 26px / 20px | ink-900 |
| H03 | `listen` | releases section title (−2°) | 72px / 40px | ink-900 |
| H04 | `merch` | nav word (under the photo, right, −2°) **and** the small black merch tag (−4°) | 26–32px / 20–26px | ink-900 in the nav · bone-50 `#F0EEE5` on the tag (deliver as currentColor SVG, or as two PNGs) |
| H05 | `out now` | scrawled on the Fault Line cover's top-right corner (+8°) | 24px / 22px | ink-900 |
| H06 | `elsewhere` | streaming + socials section title (+2°) | 58px / 34px | ink-900 |
| H07 | `you found the bottom.` | footer, under the horizontal logo (−3°) | 20px / 18px | ink-700 `#4E534B` |

Cap height ≈ 0.8 × the CSS font-size in the mock. Rotations are applied in CSS, so draw the words straight.

Not hand-lettered (on purpose): the blurb, release titles, platform/social links and labels stay Archivo. The hidden easter-egg date (`08.17.25`) stays typewriter (Special Elite).
