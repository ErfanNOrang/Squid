# Start here: building your site in Claude Code

## 1. Set up (5 minutes)
1. Make a GitHub account if you don't have one. Your username becomes your URL: `USERNAME.github.io`.
2. Create a new public repo named exactly `USERNAME.github.io`.
3. Put this whole folder (`index.html`, `CLAUDE.md`, this file) in it. Add your current CV as `cv.pdf`.
4. Open Claude Code in that folder. It reads `CLAUDE.md` automatically, so it already knows the rules (no made-up facts, no em dashes, test on mobile).

## 2. First prompt to paste into Claude Code
> Read CLAUDE.md and index.html. Start in plan mode and don't edit anything yet. Give me a short plan to make this site stand out for PhD faculty while staying academic: (1) what to tighten in the story and news, (2) 3 design upgrades worth doing, (3) anything broken or missing. Ask me before changing any facts. Then wait for my go-ahead.

Good follow-ups once the plan looks right:
- "Use the frontend-design skill and polish the typography and spacing. Screenshot at 1280px and 390px and show me."
- "Add a small 'Selected figures' strip with images from my papers. I'll drop the images in assets/."
- "Turn on GitHub Pages for this repo, push, and give me the live URL."
- "Add a light mode that follows the system setting."

## 3. Claude Code features worth using
- **Plan mode**: Claude plans before it touches files. Use it for anything bigger than a typo. [docs](https://code.claude.com/docs/en/common-workflows.md)
- **CLAUDE.md (memory)**: the rules file in this folder. Edit it when you want Claude to always remember something. [docs](https://code.claude.com/docs/en/memory.md)
- **Checkpoints**: you can rewind if an edit goes wrong, so experimenting is safe. [docs](https://code.claude.com/docs/en/how-claude-code-works.md)
- **Skills**: packaged know-how Claude loads when relevant, like front-end design. Your phd-scout and phd-outreach skills live in the Claude app. [docs](https://code.claude.com/docs/en/skills.md)
- **Subagents**: hand off a side task (like "check every link on the page") without cluttering the main session. [docs](https://code.claude.com/docs/en/sub-agents.md)
- **Claude in Chrome**: lets Claude open the live site and look at it like a visitor. [docs](https://code.claude.com/docs/en/chrome.md)
- **MCP connectors**: plug in outside tools (GitHub, Figma, etc.). [docs](https://code.claude.com/docs/en/mcp.md)
- **Hooks**: automatic actions, e.g. run a link check every time a file is saved. Nice later, not needed now. [docs](https://code.claude.com/docs/en/hooks-guide.md)
- **VS Code / desktop / web**: same Claude Code, different windows. [VS Code](https://code.claude.com/docs/en/vs-code.md) · [Desktop](https://code.claude.com/docs/en/desktop.md) · [Web](https://code.claude.com/docs/en/claude-code-on-the-web.md)

## 4. Making $100 of credit last
- Plan first, then build. Re-doing work is the expensive part.
- One task per conversation. Start a fresh session when you switch topics.
- Ask for specific changes ("make the news dates gold and smaller") instead of "make it better".
- Screenshots and browser checks cost more; use them at the end of a round, not after every tweak.
