# Erfan's academic website

The site's job: help Erfan Nasirzadeh Orang get a funded PhD starting Fall 2027 or Spring 2028. It is the second half of his cold emails to professors. They click once, spend about 30 seconds, and decide whether to reply or take a Zoom call. Every change should help that reader.

## Stack
- Plain static site for GitHub Pages: `index.html` (renders), `content.js` (all text and data), `cv.pdf`, `assets/` (headshot, figures).
- No build step, no frameworks. Edit text in `content.js`, not in `index.html`.
- Fonts: system SF on Apple devices, Inter elsewhere (headlines, body); Instrument Serif italic for accents; JetBrains Mono for labels.
- Archived, not public: `../design/v2/`, `../design/v3/` (preprint layout), `../design/concepts/` (five design concepts).

## Design (v4, Apple-style glass; don't drift back to the old looks)
- Frosted glass panels (backdrop-filter blur + saturate) over a slowly drifting blue, gold and teal aurora. Big tight sans headlines with serif italic accents.
- Dark-first, with a full light theme via `prefers-color-scheme`. Every color is a CSS token.
- No subway/transit map, no output-count charts.
- Motion: name blurs in on load; the abstract lights up word by word on scroll; cards tilt with a spotlight on hover; each research chapter has a sticky schematic figure that advances with its steps (Question → What I did → What we found → What's next). All motion turns off under `prefers-reduced-motion`.
- Figures are canvas schematics labeled "Schematic, not data". Replace with real figures (`assets/fig-*.png`) when Erfan provides them. Schematic labels must not state a finding he hasn't confirmed.

## Page order
Hero (seeking pill, avatar, name, tagline, position, CV/Email/Scholar/LinkedIn, area links, VIS notice) → Abstract (scroll-lit) → Research questions (DRAFT) → Research chapters (Sci ML, Vis, Photonics, then Optics as supporting background) → Methods table → Publications (role + BibTeX) → About bento (talks, press, education, teaching, other projects, honors) → Contact.

Each project: Question → What I did (his part specifically) → What we found → What's next, plus one figure slot and its papers.

## Stable anchors (used in outreach emails; never rename)
`#seeking` `#abstract` `#questions` `#research` `#sciml` `#vis` `#photonics` `#optics` `#methods` `#publications` `#about` `#talks` `#press` `#background` `#contact`

## Content rules (important)
- Never invent facts, dates, venues, co-authors, roles, awards, numbers or results. If unsure, ask Erfan.
- Gaps are written as `{{NEEDS: ...}}` in `content.js`. They render as gold dashed markers and are counted in the draft badge (bottom left). Don't send the link anywhere until the badge is gone. Things with no spot on the page go in `SITE.pending`.
- Kept out until Erfan confirms: "thesis-based", "presented to university leadership", the REU "12%" figure, "1,200+ students", the Nov 19 YSU Showcase talk.
- Never show citation counts or h-index.
- Author lists match each paper's own listing; bold Erfan. SPIE lists "A. Fiorito III". "R. Sheffield" on the EGLS abstract is D. R. Sheffield.
- Label roles honestly: "First author" or "Contributing author". Middle-author work is described by his part, never as his own paper.
- Dr. Kyosung Choo is the PI on the JTAC and wind-turbine papers; day-to-day work was with his PhD students. Do not call Choo a mentor.
- FEMvib: only "upcoming collaboration with Dr. Andrew Cooksy (SDSU)". No results, no "starting".
- Availability: "available to start Fall 2027 or Spring 2028". No M.S. finish date.
- Areas: Scientific ML & uncertainty · Visualization & neuro ML · Photonics. "Computational imaging" appears only inside the vis and photonics sections. Quantum optics is supporting background, listed last.
- Figures: arXiv paper figures are his to use. Scientific Reports is CC BY (credit it). JOSA B, JTAC and SPIE figures must be re-plotted or skipped.
- Voice: plain, warm, first person. No em dashes. No AI-sounding phrases.

## Timeline data
`SITE.events` are dated. `SITE.periods` are date ranges only; events are placed by their own date. Outcomes carry `from:` pointing to the work they came from. `soon:true` marks future events. v4 doesn't render the timeline yet; the data is kept for it. The hero notice hides itself after `notice.until`.

## Outreach blurb (email signature)
Erfan Nasirzadeh Orang · M.S. student, Youngstown State University
Seeking a PhD (Fall 2027 / Spring 2028) in scientific ML, uncertainty and visualization · <URL>

Per-area line for an email body: "My work on uncertainty-aware surrogates is here: <URL>#sciml" (or #vis, #photonics).

## Verify before finishing any change
1. Open the page in a browser (or Playwright) at 1280px and 390px, in dark and light; screenshot the top and one research chapter mid-scroll, and look at them.
2. Check the console for errors and that nothing scrolls sideways at 390px.
3. Check every new link, and that each anchor above still exists.
