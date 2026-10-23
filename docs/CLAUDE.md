# Erfan's academic website

Personal academic site for Erfan Nasirzadeh Orang (M.S. CIS student and graduate research assistant, Youngstown State University). Goal: a credible, memorable page that PhD faculty will actually read. Hosted on GitHub Pages.

## Stack
- Plain static site: `index.html` (inline CSS + JS), `cv.pdf`, optional `assets/`.
- No build step, no frameworks. Keep it one file unless a change clearly needs more.
- Fonts: Instrument Serif (headings), Lora (body), JetBrains Mono (labels).
- Palette: near-black `#0a0a0c`, warm ink `#efeee6`, gold accent `#c9a86a`.

## Design rules
- Academic first, flashy second. Every effect must serve the content.
- The hero background is a live Gaussian process (mean + 2-sigma band shrinking as points arrive). It is the visual signature because uncertainty is the thread of his research. Keep it subtle.
- Respect `prefers-reduced-motion`. No horizontal page scroll on phones (test at 390px).
- No em dashes in visible text. Plain, warm, first-person voice. No AI-sounding phrases.

## Content rules (important)
- Never invent facts, dates, venues, co-authors, awards or numbers. If unsure, ask Erfan.
- Author lists must match the published papers exactly. Bold Erfan's name.
- Be honest about roles: middle-author papers are not described as his own.
- Dr. Kyosung Choo is the PI on the JTAC / wind-turbine papers; day-to-day work was with his PhD students. Do not call Choo a mentor.
- FEMvib with Dr. Andrew Cooksy is early stage: say "starting", not results.

## Sections (top to bottom)
Hero (with "Now" pill) → Recent news (dated, newest first) → The story so far → Research (4 themes) → The path, year by year (vertical scroll timeline) → Publications (filterable, with BibTeX) + Talks, posters & abstracts → Press → Background → Contact CTA.

## Sources of truth
- Google Scholar (https://scholar.google.com/citations?user=zrKHVW4AAAAJ) is the main source for papers, abstracts and citation counts. The CV PDFs fill in details Scholar truncates (full author lists, page numbers).
- Citation counts and h-index appear in the Publications header and on the Scientific Reports entry ("Cited by 4"). Refresh them from Scholar when they change.

## The path timeline
Each `<article class="period">` is one academic year or summer: a "What I did" card, an arrow, and a "What came of it" card. Results can be dated later than the period that produced them. Use `class="soon"` on a result `<li>` for future events. The gold line fills and each period lights up as it scrolls past 62% of the viewport.

## Updating news
Add new items at the top of `<ul class="news">`. Use `class="upcoming"` for future events. Update the "Last updated" line in the footer.

## Verify before finishing any change
1. Open the page in a browser (or Playwright) at 1280px and 390px; take screenshots and look at them.
2. Check the console for errors.
3. Check every new link opens.
