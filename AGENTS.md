# AGENTS.md

## Project overview

Med Plus is a single-page marketing site for a Brazilian insurance broker. It is built with Astro 5 and uses pnpm.

## Common commands

- `pnpm install` — install dependencies
- `pnpm dev` — start the local development server
- `pnpm build` — create a production build
- `pnpm preview` — preview the production build locally

## Project structure

- `src/pages/index.astro` — landing-page composition and global utility styles
- `src/layouts/Layout.astro` — document shell, metadata, fonts, and base styles
- `src/components/` — page sections and reusable Astro components
- `src/assets/` — local images and icons imported by components
- `public/` — files served directly from the site root

## Working conventions

- Keep customer-facing copy in Brazilian Portuguese (`pt-BR`).
- Prefer small Astro components and scoped `<style>` blocks consistent with the existing code.
- Reuse existing components, utility classes, colors, typography, and assets before adding new patterns.
- Import images from `src/assets` so Astro can process them; use `public` only when a stable root URL is needed.
- Keep the page responsive and verify changes on both narrow and wide viewports.
- Use semantic HTML and preserve keyboard navigation, readable contrast, useful image alt text, and visible focus states.
- Do not invent or materially change insurance coverage, investment, regulatory, partner, certification, contact, or legal claims without explicit source content from the user.
- Avoid adding client-side JavaScript unless the interaction genuinely requires it.

## Before finishing

- Run `pnpm build` after code or content changes.
- Check the browser console when changing interactive behavior.
- Review all edited links, phone numbers, social handles, and calls to action.
- Keep unrelated files and existing user changes untouched.
