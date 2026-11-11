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

- More hero options with depth: a cropped mark turning in 3D, layered light with parallax, type that turns on a cylinder.
- A showreel page: a full screen player with chapters styled as an edit timeline.
- Client words: the real customer review reel as the centrepiece, with sample quotes marked as samples.
- An events section for 3not8 Events.
- A 404 page and an empty state.
- A second take on the work page: a list first layout, and a map of Mangaluru locations.
- A second take on the project page: a horizontal story, and footage inside the title letters.
- Phone first versions of the strongest desktop sections.
- The wall as a home page hero: start inside the wall, then pull the camera back out of the ring as the page scrolls.
- Filters on the wall: a chip turns the ring so only that kind of work faces you, the rest dims.
- A final candidate: one page that joins the pieces the team is most likely to pick.
- Draft 14's gate as the reels section on the home page: one gate, the strip of real reels, the open link under it.
- The split on scroll as the hero itself: the circle closes on the showreel, then parts to let the page in.
- Swap Draft 14's stand in curl for the real t pattern once the source SVG arrives.
