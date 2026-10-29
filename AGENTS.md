<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Implement motion with CSS keyframes plus an IntersectionObserver helper
  (`src/components/motion.tsx`) instead of adding an animation library, so the
  bundle stays small and reveals degrade to fully visible content when JS or
  CSS animation is unavailable.
- Never gate scroll-reveal visibility on a class that React also renders on
  `html`/`body` — that causes a hydration mismatch. Use
  `@media (scripting: enabled)` so no-JS and server-rendered visitors see
  everything.
- Do not combine `background-clip: text` with `text-shadow` on the same
  element: the shadow paints through the transparent glyph fill and turns the
  text dark. Outline clipped text with `-webkit-text-stroke` instead.

