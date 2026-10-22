# billvo

My personal site — a terminal-flavored portfolio.

Live: [billvo-portfolio.vercel.app](https://billvo-portfolio.vercel.app)

## Stack

- Next.js 14 (App Router)
- TypeScript · Tailwind CSS
- Framer Motion · JetBrains Mono
- MDX for writing · Shiki for syntax highlighting

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Content

Most content lives in two places:

- `data/*.ts` — profile, projects, hobbies, now, uses, photos, experience
- `content/posts/*.mdx` — blog posts with frontmatter

## Resume

`/resume.pdf` is a redirect configured in `next.config.mjs`, pointing at an
externally hosted PDF so I can update the resume without redeploying. Set
`RESUME_URL` in `.env.local` (local) and in the Vercel project env vars.

## Deploy

Any push to `main` triggers a Vercel deploy.
