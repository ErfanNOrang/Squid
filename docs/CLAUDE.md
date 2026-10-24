# Erfan's academic website

The site's job: help Erfan Nasirzadeh Orang get a funded PhD starting Fall 2027 or Spring 2028. It is the second half of his cold emails to professors. They click once, spend about 30 seconds, and decide whether to reply or take a Zoom call. Every change should help that reader.

## Stack
- Plain static site for GitHub Pages: `index.html` (renders), `content.js` (all text and data), `cv.pdf`, `assets/` (headshot, figures).
- No build step, no frameworks. Edit text in `content.js`, not in `index.html`.
- Fonts: Instrument Serif (headings), Lora (body), JetBrains Mono (labels).
- Palette: near-black `#0a0a0c`, warm ink `#efeee6`, gold accent `#c9a86a`. Dark only.
- Archived, not public: `../design/v2/` (old site) and `../design/concepts/` (five design concepts).

## Page order
Hero (Gaussian process background, click to add a point; name, position, seeking line, area links, CV) → Abstract → 1 Research questions (DRAFT) + Figure 1 (threads as a transit map) → 2 Projects (Sci ML, Vis, Photonics, then Optics as supporting background) → 3 Methods (Table 1) → 4 Publications → A Talks → B Press → C Background → D Timeline → Contact.

Each project: Question → What I did (his part specifically) → What we found → What's next, plus one figure slot and its papers.

## Stable anchors (used in outreach emails; never rename)
`#seeking` `#questions` `#threads` `#sciml` `#vis` `#photonics` `#optics` `#methods` `#publications` `#talks` `#press` `#background` `#timeline` `#contact`

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
`SITE.events` are dated. `SITE.periods` are date ranges only; the page places each event by its own date. Outcomes carry `from:` pointing to the work they came from. `soon:true` marks future events. The hero notice hides itself after `notice.until`.

## Outreach blurb (email signature)
Erfan Nasirzadeh Orang · M.S. student, Youngstown State University
Seeking a PhD (Fall 2027 / Spring 2028) in scientific ML, uncertainty and visualization · <URL>

Per-area line for an email body: "My work on uncertainty-aware surrogates is here: <URL>#sciml" (or #vis, #photonics).

## Verify before finishing any change
1. Open the page in a browser (or Playwright) at 1280px and 390px; screenshot the top, Figure 1 and one project section, and look at them.
2. Check the console for errors and that nothing scrolls sideways at 390px.
3. Check every new link, and that each anchor above still exists.
