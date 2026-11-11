# 3not8 Studios website brief

Working reference for building the site. Full source: [brand/brand-guidelines.md](../brand/brand-guidelines.md).

## Who

3not8 Studios is a production studio from Mangaluru: films, photography, content, social and campaigns, for businesses that want to be taken seriously. It thinks about the business first and the frame second.

- Formerly Pixora Clips. That name is retired and never appears on the site.
- Write it as **3not8 Studios**: lowercase "not", capital S. Never 3NOT8, 3 Not 8 or 308 Studios.
- Signature line: **Your vision. Our execution.**
- Campaign lines: "good ideas deserve great execution.", "visual stories, thoughtfully brought to execution.", "be impossible to ignore."

## The hidden idea (critical)

A 3 is half of an 8. The client brings half (the vision), the studio brings the other half (the execution).

**Never explain this anywhere on the site.** No copy, alt text, meta description or hidden easter egg text spells it out. The design can *show* it (mirroring, halves, splits, the cropped 8), but people must discover it themselves.

## Personality and voice

Bold, never loud. Confident, not arrogant. Crafted, not precious. Cinematic, not gimmicky. Rooted in Mangaluru.

Voice: a director on a good set. Calm, clear, short sentences, plain words, reasoning over hype.

Copy rules:
- **No dashes** in any copy. Use commas and full stops.
- No promises about views, virality or followers. Never "best agency".
- Headlines lowercase, body in sentence case. No all caps paragraphs (spaced caps labels are fine).
- Never pair "not" from the name with another negative in a tagline.

## Colour

| Token | Hex | Role |
|---|---|---|
| Deep Forest | `#162C29` | Primary ground, ~55% of any layout |
| Paper | `#F8F2EB` | Light ground and text on dark, ~25% |
| Signal Orange | `#F5731D` | The spark, ~15%. Logo, the one headline, the one thing to see |
| Night | `#051511` | Deepest dark, video and photo grounds |
| Ember | `#C64D01` | Accent, section numbers |
| Kerria Gold | `#F9C052` | Accent, glow highlight |
| Sand | `#D2BDA1` | Accent |
| Linen | `#EADCC6` | Accent |

- Never orange on orange. Never orange shapes over a photograph.
- **Glow** is the only gradient allowed: Ember to Kerria Gold out of Deep Forest (dark) or Signal Orange to Gold on Paper (light). Backgrounds, loaders, reel transitions only. Never under body text, never as a logo fill.

## Type

- **Headlines:** Grityle (commercial, licence pending). Until licensed, use **Montserrat Black**. Lowercase, leading 95 to 100%, tracking minus 1%, never below 28px.
- **Everything else:** Montserrat 400, 500, 700, 900.
- Scale: Display 120/114, Headline 64/64, Subhead Montserrat Bold 32/40, Body 18/28, Label Montserrat Bold caps 20% tracking 13/18.
- One loud line per layout.

## Graphic language (motion opportunities)

- **The split:** photographs cut by half circles and arcs from the 3 and the 8, partly revealed, partly withheld. Vision top or left, execution bottom or right. Shapes in Deep Forest, Night or Paper. One split per layout. This is the natural scroll reveal device.
- **The t pattern:** the curl of the t in the wordmark, mirrored and repeated, running vertically like film through a gate. Two colours only, orange on Forest or Forest on orange. Never behind body text or the logo.
- **The cropped 8:** the 8 in the mark is never shown complete.
- **Glow:** light through a camera sensor.

## Logo

- Horizontal lockup for the header and wide spaces (min 180px wide on screen). Stacked mark for square spaces (min 90px tall). Monogram under 90px (favicon, small marks, min 16px).
- Clear space at least 1X (X = height of STUDIOS letters), 2X preferred.
- On photos use the single colour Paper or Night version, in the calmest corner, never over faces.
- No stretching, rotating, recolouring, effects, outlines or retyping in a font.

## Photography

Show the craft: crews, cameras, practical light, haze, concentration. Lit like cinema. Greens pushed into shadows, orange in highlights. Real crew, real clients, real Mangaluru locations. No stock, no heavy filters or vignettes. Client work only with written consent.

## Site goals

- Unique, cinematic, premium. Scroll driven animation and selective 3D. Must not feel templated or AI made.
- Portfolio of reels and photos.
- Fast and smooth on slow networks and mobile phones, fully responsive up to laptop and desktop.
- Respect reduced motion settings.

## Assets in this repo

- `brand/logos/svg/` stacked mark: primary on dark, mono paper, mono black.
- `brand/logos/png/` horizontal and stacked lockups, primary and mono.
- `brand/graphics/` approved social posts and stories, useful as visual reference for the split and type treatment.

## Open items

- [ ] **Horizontal lockup as SVG.** Only PNGs exist. Needed for a crisp header logo.
- [ ] **Monogram file** (stacked mark without STUDIOS) for the favicon.
- [ ] **Withdrawn exports:** the horizontal PNGs appear to carry a thin dark outline around STUDIOS, which v1.0 withdraws. Confirm with the designer and replace with clean v1.0 files.
- [ ] **Colour drift in SVGs:** the stacked SVGs use `#142926` and `#F6F0E9`, not the spec `#162C29` and `#F8F2EB`. Site CSS uses spec values.
- [ ] **Grityle web licence** before launch, else stay on Montserrat Black.
- [ ] **t pattern source file** (SVG) for backgrounds and bands.
- [ ] **Portfolio media:** reels and photos with client consent, original resolution.
- [ ] **References and inspirations** for motion and layout.
- [ ] Domain, contact email, social handles.
