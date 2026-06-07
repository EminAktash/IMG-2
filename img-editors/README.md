# IMG Editors — Website

Vite + React + TypeScript + Tailwind v4 SPA. Rebuilt from the Lovable project
to deploy on Vercel as a static site. Two pages: `/` (home) and `/resources`
(Calendly booking + ebooks).

## ⚠️ ONE REQUIRED STEP — make the contact form email Debra

The contact form sends through **Web3Forms** (free, no backend needed). It will
NOT deliver email until you add an access key:

1. Go to https://web3forms.com
2. Enter Debra's email: **d.anazonwu@gmail.com** → "Create Access Key"
3. Web3Forms emails her an Access Key (a long string).
4. Open `src/components/site/ContactForm.tsx`, find this line near the top:

   ```ts
   const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
   ```

   Replace `YOUR_ACCESS_KEY_HERE` with the real key.
5. Commit and redeploy. Form submissions now arrive in Debra's inbox, and replies
   go straight back to whoever filled out the form.

Free tier covers 250 submissions/month.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel → New Project → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output dir `dist`. No env vars needed.
4. Deploy. `vercel.json` handles the SPA routing so `/resources` loads on a
   direct visit / refresh.

## Editing content

- Pricing tiers / add-ons: `src/components/site/Pricing.tsx`
- FAQ: `src/components/site/FAQ.tsx`
- Stats: `src/components/site/Stats.tsx`
- Expert bio + credentials: `src/components/site/Expert.tsx`
- Calendly link: `CALENDLY_URL` in `src/pages/Resources.tsx`
- Ebook titles/prices: `ebooks` array in `src/pages/Resources.tsx`
- Colors / fonts / design tokens: `src/styles.css`
- Images: `src/assets/` (debra.jpg, hero-doctors.png)
