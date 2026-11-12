# Draft log

Working notes for whoever builds the next draft. Read this, [website-brief.md](website-brief.md) and [../brand/brand-guidelines.md](../brand/brand-guidelines.md) before starting.

## What exists

| No. | Folder | What it is | Group on the index |
|---|---|---|---|
| 01 | `prototypes/01-hero-direction` | First hero study | Pick one |
| 02 | `prototypes/02-home` | Home page, version one | Full home pages |
| 03 | `prototypes/03-sections` | Home page, version two. Holds the shared `assets/` folder | Full home pages |
| 04 | `prototypes/04-hero-options` | Four heroes behind an A, B, C, D switch | Pick one |
| 05 | `prototypes/05-work` | Work index with filters | Inner pages |
| 06 | `prototypes/06-project` | Project page template | Inner pages |
| 07 | `prototypes/07-studio` | Studio page | Inner pages |
| 08 | `prototypes/08-contact` | Contact page | Inner pages |
| 09 | `prototypes/09-details` | Loader, hover list, grade slider, shutter sound | Small pieces |
| 10 | `prototypes/10-services` | Services page with stacking cards | Inner pages |
| 11 | `prototypes/11-navigation` | Full screen menu and page transitions | Small pieces |
| 12 | `prototypes/12-footers` | Three footers behind a switch | Pick one |
| 13 | `prototypes/13-wall` | Work as one curved three.js wall, turned by scroll and drag, with a lens warp | Inner pages |
| 14 | `prototypes/14-film-gate` | Three SVG scenes run by scroll: the t pattern and reels pulled through a film gate, arcs that draw and split a photo, a glow that crosses like a lens flare | Small pieces |
| 15 | `prototypes/15-depth` | Two hero scenes in CSS 3D, no WebGL: the hero line on a drum turned by scroll, and one frame pulled into layers of light that the camera moves through | Pick one |
| 16 | `prototypes/16-drum-index` | Work index on a CSS 3D drum, no WebGL: each face a project, scroll or the step buttons turn it, and the photograph opens out of a half circle bite as each face lands | Inner pages |
| 17 | `prototypes/17-split-hero` | The split as the hero, drawn on one canvas and run by scroll: the full frame closes into a circle while a still gives way to a real reel, arcs draw round it, then the halves part and let the page in | Pick one |
| 18 | `prototypes/18-wall-hero` | The wall as the home page hero, one three.js ring: the camera starts at its centre with the work all round, then scroll cranes it up over the wall and back until the whole ring sits below, near side dark and far side lit, while the second line of the signature sets itself | Pick one |
| 19 | `prototypes/19-reel-gate` | Draft 14's gate as the home page reels section: the eight real reels pulled through one gate by scroll, a lamp that dims as the shutter closes, a spool drawn as two halves that feeds paper out on top and takes up orange below, an index to jump to any reel, and the reel playing muted once a frame has rested | Small pieces |
| 20 | `prototypes/20-combination-index` | Draft 16's drum as a combination, CSS 3D, no WebGL: a kind wheel and a project wheel on one window, seen from the gap so they lean apart, turning against each other. Scroll turns the project wheel and the kind wheel follows a beat behind only when the kind changes; tapping the kind wheel jumps to the next kind | Inner pages |
| 21 | `prototypes/21-final-candidate` | Home page, final candidate. Joins Draft 18's ring hero, Draft 10's stacking service cards and Draft 03's client band, lens dial, split, reel cylinder and brief builder on one page. The owner picked this mix | Full home pages |
| 22 | `prototypes/22-combination-hero` | Draft 20's two wheels as the home page hero, CSS 3D, no WebGL: your vision on the left wheel, our execution on the right, spun home against each other as the page loads and landing on a detent. Scroll carries each line away from the gap, vision up, execution down, while the slit between them opens through bright light into the YSC reel playing muted, bitten by one Forest half circle. Dial ticks on the slot edges slide with each wheel | Pick one |
| 23 | `prototypes/23-wall-filters` | Draft 13's wall with a chip for each kind of work: reels, road, table, crew. A chip turns the nearest frame of that kind round to face you, a band of gold light sweeps outward over the lit frames, and the rest sink back on the ring and drain into Forest shadow. Scroll and drag still turn the wall and it settles on a lit frame when they rest; arrow keys step between lit frames. The still fallback swaps its row to the chosen kind | Inner pages |
| 24 | `prototypes/24-studio-film` | A full home page built from what makes a quiet premium studio site feel expensive, redone in our brand: the signature racks focus from one line to the other, a real reel follows you round the page in a corner, the story closes from a still into a reel with subtitles, service cards on a track straighten as they reach the middle, full screen work where each photograph arrives in two halves, a carousel round the real customer review reel, and a closing line whose words start scattered and come into focus. The scroll is heavier (Lenis lerp 0.072) and one spring follows scroll speed, so cards sway and work titles skew, then settle | Full home pages |

## How a draft is put together

- Each draft is one self contained `index.html` in its own numbered folder under `prototypes/`. No build step.
- Start a new draft by copying the most similar existing one, then replace only its page specific CSS, the content of `<main>`, and its page specific script function. Keep the shared parts: design tokens, type classes, grain, load wipe, focus cursor, nav, menu, footer, Lenis setup, text reveals.
- Libraries come from the CDN at fixed versions: `gsap@3.13.0` (ScrollTrigger, SplitText, DrawSVG, Draggable, Inertia, Flip are all free) and `lenis@1.3.17`. No React. three.js is allowed, loaded only on the page that needs it, with at most one WebGL effect per page and a still image fallback.
- Images are shared: reference `../03-sections/assets/<name>.webp`. Do not copy them into each draft.
- Real reels are listed in the `REELS` array inside drafts 04 to 06 (Cloudinary thumbnails and videos, Instagram links). Reuse that array.
- Every draft ends with `<script src="../draft-bar.js" defer></script>`. That script draws the tab that names the draft.

## Adding a draft: three places to update

1. `prototypes/draft-bar.js`: add a row to the `DRAFTS` list (number, folder, name, kind).
2. `index.html` at the repo root: add the row to the right group.
3. The table above.

## Rules that are easy to break

- Never explain that a 3 is half of an 8. The design may show halves, arcs and mirroring. No copy, alt text or comment says it.
- Write the name as 3not8 Studios. Never 308 Studios, 3NOT8 or Pixora Clips.
- No dashes in copy. Headlines lowercase. One loud line per layout.
- No promises about views, followers or going viral.
- Orange never sits over a photograph. The only gradient is the glow (Ember to Kerria Gold on dark, Signal Orange to Gold on Paper).
- The t pattern never sits behind body text.
- Placeholder copy, names and numbers are fine in a draft, but say on the page that they are samples. Do not invent client results.
- Sizing follows `html { font-size: min(100vw / 90, 100vh / 56.25) }` on desktop. Design each section to about 56rem tall so it fits one screen on wide, short displays.
- Every motion effect needs a reduced motion path and a touch path.
- GSAP gotcha: animating `filter` from `none` starts at zero. Always use `fromTo` with an explicit start such as `brightness(1)`.

## Checks before a draft is done

- Open it in a browser at about 1440 by 810 and at phone width (375). No console errors, no sideways scroll.
- Each full screen section fits one screen at 1915 by 960.
- The draft tab shows the right number and name.

## Ideas not built yet

- Draft 24's scroll weight and speed spring on the other home pages, so the team can compare the same layout with and without it.
- Draft 24's floating reel as a site wide piece: it keeps playing across page changes, like a picture in picture.

- A showreel page: a full screen player with chapters styled as an edit timeline.
- Client words: the real customer review reel as the centrepiece, with sample quotes marked as samples.
- An events section for 3not8 Events.
- A 404 page and an empty state.
- A second take on the work page: a list first layout, and a map of Mangaluru locations.
- A second take on the project page: a horizontal story, and footage inside the title letters.
- Phone first versions of the strongest desktop sections.
- Draft 21 trimmed: it still carries Draft 03's unused hero, showreel, gallery, call sheet and timeline rules in its tablet and phone block.
- Swap Draft 14's stand in curl for the real t pattern once the source SVG arrives.
- Draft 15's layers with a real reel as the deepest layer instead of a still, playing muted.
- Draft 16 with reels playing muted inside the frame once a face has rested for a second, instead of the still thumbnail.
- A cropped mark turning in 3D was left out on purpose: the guidelines say never rotate the logo. If depth on the mark is wanted, move the light round a still mark instead.
- Draft 17 with the real showreel cut in the circle once it exists, and chapter marks on the timecode so the hold lands on a named shot.
- Draft 17's canvas split as the page transition: the leaving page closes into a circle, the next page arrives through the parted halves.
- Draft 18 with reels playing muted on the far side of the ring once the camera is outside, so the lit half moves while the dark half stays still.
- Draft 18's crane in reverse as the last section of the home page: the camera drops back into the ring before the contact block.
- Draft 19's gate with a sound option: a soft projector clatter on each pull, off by default, like the shutter sound in Draft 09.
- Draft 19 joined to Draft 18: the gate as the reels section straight after the wall hero, so the home page runs ring, gate, contact.
- Draft 20 with a soft detent click as each wheel lands, off by default, using the shutter sound switch from Draft 09.
- Draft 22 joined to Draft 21: the two wheels as the first beat of the home page, opening into the ring of work instead of a single reel.
- Draft 22 with the frame opening on the real showreel cut once it exists, and the wheel words chosen per page (your brief, our crew on the services page).
- Draft 23's chips on the home page ring (Draft 18 and 21): the crane lands, then the chips appear and light one kind of work round the ring below.
- Draft 23 with the chip choice kept in the address, so a link to the reels view opens with reels already lit.
- Draft 23 with lit reels playing muted once they face you, while the dimmed frames stay still.
