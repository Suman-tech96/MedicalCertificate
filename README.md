# One Next.js 16 App, Two Brands

A single Next.js 16 (App Router, TypeScript) application rendering both **DrCertificate** (`drcertificate.com`) and **GetMedicalCertificate** (`getmedicalcertificate.com`) from shared UI components and strictly isolated brand configuration files.

## Brand Switching

The app resolves the active brand in the following order (`src/brands/index.ts`):
1. **Path route:** `/drcertificate` (or `/dr`) and `/getmedicalcertificate` (or `/gmc`)
2. **Query parameter:** `/?brand=drcertificate` or `/?brand=getmedicalcertificate`
3. **Hostname:** Matches `drcertificate` or `getmedicalcertificate` in the request `Host` header
4. **Environment variable:** `NEXT_PUBLIC_BRAND=drcertificate` or `NEXT_PUBLIC_BRAND=getmedicalcertificate`

## Local Development

```bash
npm install
npm run dev
```

Then open:
- `http://localhost:3000/drcertificate`
- `http://localhost:3000/getmedicalcertificate`

See [NOTES.md](./NOTES.md) for the full audit, architectural decisions, and evidence.
