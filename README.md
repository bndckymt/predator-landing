# Predator Helios concept landing page

Fictional promotional page. Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Framer Motion, Lucide React. No backend, database or environment variables.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
npm start        # serve the production build
```

## What to replace
| Item | Where |
|---|---|
| Product photo | Add a file to `public/images/`, then set `PRODUCT_IMAGE` in `lib/config.ts`. Without it, an original SVG laptop is used. |
| Placeholder links (Discover, social icons) | `DISCOVER_URL` in `lib/config.ts` |
| Specifications | Arrays at the top of `components/Specifications.tsx` and `components/DisplaySection.tsx` |
| Performance copy | `components/PerformanceSection.tsx` (conceptual, no benchmark claims) |

Only use imagery you are licensed to use. The page is a concept and is not affiliated with Acer.

## Upload to GitHub
```bash
git init
git add .
git commit -m "Predator landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USER/predator-landing.git
git push -u origin main
```

## Deploy to Vercel
1. Go to vercel.com, choose **Add New, Project**, and import the GitHub repo.
2. Keep the detected Next.js settings. No environment variables are needed.
3. Click **Deploy**. Every push to `main` redeploys.

## Structure
`app/` layout, page and global CSS. `components/` one file per section plus `Reveal`, `Button`, `LaptopVisual`. `lib/config.ts` easing and placeholders.
