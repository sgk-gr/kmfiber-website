# K.M.FIBER Ι.Κ.Ε. (K.M.FIBER P.C.) - Corporate Website & GEMI Public Registry

## Project Overview
This repository contains the official corporate website and statutory public disclosure registry portal (Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ) for **K.M.FIBER ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ (K.M.FIBER P.C.)**, fully compliant with Greek Corporate Laws **Ν. 4072/2012 (Article 47)** and **Ν. 4919/2022**.

The company specializes in telecommunications infrastructure, fiber optic network deployment (FTTH / FTTB), horizontal directional drilling (HDD), cable jetting, precision core-alignment fusion splicing, OTDR tier-1/tier-2 measurements, and 24/7 network maintenance.

---

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19 & TypeScript
- **Styling:** Tailwind CSS v4 (Cyber-slate, Cyan, Electric Blue, and Emerald live badges)
- **Icons:** `lucide-react`
- **SEO & Social Previews:** Dynamic OpenGraph image (1200x630) via `@vercel/og` (`src/app/opengraph-image.tsx`), Twitter Cards, and JSON-LD TelecommunicationsProvider schema for rich link sharing on Viber, WhatsApp, Facebook, LinkedIn, Telegram
- **Data Integration:** Live OpenData GEMI API (`https://opendata-api.businessportal.gr/api/opendata/v1`) with server-side caching and static fallback protection
- **Deployment:** Vercel connected to GitHub repository `https://github.com/sgk-gr/kmfiber-website.git`

---

## Statutory & Legal Entity Details
- **Company Name (EL):** K.M.FIBER Ι.Κ.Ε. (K.M.FIBER ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ)
- **Company Name (EN):** K.M.FIBER P.C.
- **Distinctive Title (EL):** K.M.FIBER
- **Distinctive Title (EN):** K.M.FIBER
- **GEMI Number (Αριθμός Γ.Ε.ΜΗ.):** `188525832000`
- **European Unique Identifier (EUID):** `ELGEMI.188525832000`
- **Tax Number (ΑΦΜ):** `803064377`
- **Tax Office (ΔΟΥ):** Καστοριάς
- **Competent GEMI Authority:** ΕΠΙΜΕΛΗΤΗΡΙΟ ΚΑΣΤΟΡΙΑΣ (ID: 32)
- **Incorporation Date:** 07/11/2025 (Active / Ενεργή)
- **Registered Seat / Address:** Παππά Εμμανουήλ 3, Τ.Κ. 52200, Άργος Ορεστικό (Δήμος Άργους Ορεστικού / Π.Ε. Καστοριάς)
- **Phone:** `6932426214`
- **Email:** `stathismonocholias@gmail.com`
- **Legal Type:** Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε. / P.C.)
- **Capital:** 20.000,00 € (2.000 μερίδια x 10,00 € έκαστο, 100% κεφαλαιακές εισφορές)

### Shareholders & Governance (Εταίροι & Διοίκηση)
1. **ΜΟΝΟΧΟΛΙΑΣ ΕΥΣΤΑΘΙΟΣ του ΠΑΝΤΕΛΗ** — Μέλος & Διαχειριστής (50% - 1.000 μερίδια / 10.000,00 €)
2. **ΚΑΡΑΓΙΑΝΝΗΣ ΑΘΑΝΑΣΙΟΣ του ΠΑΣΧΑΛΗ** — Μέλος & Διαχειριστής (50% - 1.000 μερίδια / 10.000,00 €)

### Primary & Secondary Activities / KAD
- **Primary KAD (43210006):** ΥΠΗΡΕΣΙΕΣ ΕΓΚΑΤΑΣΤΑΣΗΣ ΚΑΛΩΔΙΩΣΕΩΝ ΚΑΙ ΕΞΟΠΛΙΣΜΟΥ ΤΗΛΕΠΙΚΟΙΝΩΝΙΩΝ ΚΑΙ ΔΙΚΤΥΩΝ
- **Secondary KADs:**
  - 43130001: Οριζόντιες διατρήσεις για το πέρασμα καλωδίων ή υδρορροών
  - 43120200: Εργασίες εκσκαφών και μετακίνησης γαιών
  - 43210002: Υπηρεσίες επισκευής ηλεκτρικών καλωδιώσεων και εξαρτημάτων, με διάθεση υλικών
  - 43210003: Υπηρεσίες επισκευής ηλεκτρικών καλωδιώσεων και εξαρτημάτων, χωρίς διάθεση υλικών
  - 43221200: Εργασίες εγκαταστάσεων θέρμανσης, αερισμού και κλιματισμού
  - 43999000: Εξειδικευμένες κατασκευαστικές εργασίες π.δ.κ.α.
  - 81220200: Υπηρεσίες εξειδικευμένου καθαρισμού

### Official GEMI Publications / Documents
- **Απόφαση Διαχειριστή (ΚΑΚ 5684227):** ΙΚΕ - (Αυτοματοποιημένη Καταχώριση) Πιστοποίηση Καταβολής Αρχικού Εταιρικού Κεφαλαίου (Απόφαση 17/11/2025, Καταχώριση 05/12/2025, Direct URL: `https://opendata-api.businessportal.gr/api/opendata/v1/downloadFile?key=assemblyDecision&elementId=5684227`).
- **Ανακοίνωση Σύστασης:** Επίσημο έγγραφο ΥΜΣ / ΓΕΜΗ (`https://eyms.businessportal.gr/preview/61bd6831754437426372de849bd1d442/announcement-certificate/print`).

---

## Live API Integration Architecture
1. **Route Handler:** `src/app/api/gemi/route.ts`
   - Proxies requests to `https://opendata-api.businessportal.gr/api/opendata/v1/companies/188525832000` and `/documents`.
   - Uses GEMI OpenData API Key: `1QV0mFBoWsaprgiphMaBKEANZL0tRCc5`.
   - Configured with `revalidate = 1800` (30-minute cache) to respect the GEMI rate limit of 8 req/min while automatically fetching newly published balance sheets, official certificates, and general assembly decisions in PDF format without requiring code modifications.

2. **Frontend Pages:**
   - `src/app/page.tsx`: Modern high-tech flagship homepage with Hero image of glowing fiber optic networks, services breakdown, technical equipment specs, about section, direct contact cards, and statutory footer with link to `sgk.gr`.
   - `src/app/gemi/page.tsx`: Dedicated corporate transparency portal consuming `/api/gemi` with live data or official fallback data, downloadable PDFs, and complete KAD listing.

3. **SEO & Social Previews:** `src/app/layout.tsx` & `src/app/opengraph-image.tsx`
   - Dynamic 1200x630 OG preview card with K.M.FIBER logo and company details for rich link sharing in Viber, WhatsApp, Facebook, LinkedIn, Telegram.
   - Google Structured Data (JSON-LD TelecommunicationsProvider Schema).

---

## Instructions for Antigravity AI Agents
When working on this repository in Antigravity:
1. **Never change the GEMI number (`188525832000`) or AFM (`803064377`)**.
2. **Keep the caching (`revalidate = 1800`)** to ensure compliance with the GEMI OpenData API rate limit.
3. If new balance sheets, general assembly minutes, or legal status changes are filed by the company accountant into the GEMI portal, they will automatically appear on the website via the live API without code edits.
4. When testing locally, run `npm run dev` and test with `curl http://localhost:3000/api/gemi`.
5. When deploying to Vercel, push commits directly to branch `main`.

---

## Development Commands
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Production build:** `npm run build`
- **Start production server:** `npm run start`

## Git & Deployment
- GitHub remote repository: `https://github.com/sgk-gr/kmfiber-website.git`
- Main branch: `main`
- Automatic deployment: Connected to Vercel. Pushing to `main` triggers automated build & deployment.
