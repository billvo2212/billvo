# billvo

My personal site — a terminal-flavored portfolio.

Live: [billvvo.dev](https://billvvo.dev)

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Framer Motion · JetBrains Mono
- MDX for writing · Shiki for syntax highlighting
- Vercel Analytics

## Local development

```bash
cp .env.example .env.local   # first time
npm install
npm run dev                  # → http://localhost:3000
```

## Content

Most content lives in two places:

- `data/*.ts` — profile, projects, hobbies, now, uses, photos, experience
- `content/posts/*.mdx` — blog posts with frontmatter

## Resume

`/resume.pdf` is a redirect configured in `next.config.mjs`, pointing at the
raw PDF in this repo. To update: replace `resume.pdf` at the root,
`git commit && git push`. No redeploy needed.

## SEO / discoverability

- Favicon: `app/icon.svg`
- Dynamic OG image: `app/opengraph-image.tsx`
- Per-page metadata via `generateMetadata` / `export const metadata`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- RSS: `/writing/rss.xml`
- Person JSON-LD in the root layout

## Deploy

Any push to `main` triggers a Vercel deploy. The required env vars in Vercel:

| Name                   | Value                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| `RESUME_URL`           | `https://raw.githubusercontent.com/billvo2212/billvo/main/resume.pdf` |
| `NEXT_PUBLIC_SITE_URL` | your canonical URL (`https://billvo.dev` once you have one)           |

## Custom domain

Once you buy a domain:

1. **Vercel**: Project → Settings → Domains → Add. Vercel shows DNS records to set.
2. **Registrar**: set those DNS records (usually an A record and a CNAME, or a single NS delegation).
3. **Env var**: update `NEXT_PUBLIC_SITE_URL` in Vercel to the new URL, redeploy once.
4. **Email forwarding** (free):
   - Cloudflare Registrar: Email → Email Routing → forward `hi@domain` to your Gmail.
   - Otherwise [ImprovMX](https://improvmx.com) does the same for free.
5. Keep the Vercel subdomain (`<project>.vercel.app`) as a redirect to the custom domain.
