# Sidi Mohamed Benazzouz: Portfolio

Personal portfolio built with **React + Vite + TypeScript + Tailwind CSS + Lucide + Framer Motion**.
Static site, no backend, deployed free on **GitHub Pages**. All content lives in `src/data/`.

## 1. Installation

Requires Node.js 20 or newer.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev        # http://localhost:5173
```

## 3. Build for production

```bash
npm run build      # type-check + build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
.github/workflows/deploy.yml   Auto build + deploy on push to main
public/
  favicon.svg
  documents/                   Put your CV and certificate PDFs here
src/
  data/                        ALL editable content
    personal.ts                Name, contact, About text, menu links
    experience.ts              Internships + independent activities
    projects.ts                Project cards + repository links
    skills.ts                  Skill categories + languages
    certifications.ts          Certificate text (title, level, score)
    documents.ts               CV + certificate files/URLs, enable/disable
  components/                  UI only (no content), no need to edit
  hooks/  lib/                 Active-section hook, safe link resolver
```

## 4. Add a new project

Open `src/data/projects.ts` and copy a block:

```ts
{
  id: "my-project",              // unique
  name: "Project name",
  category: "Category",
  description: "What it does.",
  technologies: ["Tech A", "Tech B"],
  icon: "code",                  // network | radio | router | code | database | wrench | scan | car | gamepad | lock
  repoUrl: "https://github.com/<user>/<repo>",
}
```

While `repoUrl` is empty or starts with `[`, the card shows a disabled "Repository link soon" button. Replace the `[ADD_..._REPO_URL]` placeholders with real URLs when ready.

## 5. Add a new certificate

1. Add the text in `src/data/certifications.ts` (`id`, `title`, `provider`, optional `level`, `score`, `issueDate`).
2. Add a matching entry (same `id`) in `src/data/documents.ts` → `certificates`:

```ts
myid: {
  title: "Certificate name",
  fileName: "my-certificate.pdf",
  url: "documents/my-certificate.pdf",   // local PDF  OR  "https://external-link"
  enabled: true,
},
```

- Local PDF → "View Certificate" (new tab) + "Download PDF".
- External URL → "View Certificate" only (browsers cannot force-download cross-site files).
- `enabled: false`, an empty url or a `[PLACEHOLDER]` → the button is shown disabled, never as a broken link.

## 6. Upload or replace the CV

1. Copy your PDF to `public/documents/` (default name: `Sidi_Mohamed_Benazzouz_CV.pdf`).
2. In `src/data/documents.ts`, set `cv.enabled: true` (and adjust `url` / `fileName` if you used another name).
3. Commit and push. To replace it later, overwrite the same file and push.

Certificate PDFs work the same way: copy to `public/documents/`, set `url: "documents/<file>.pdf"` and `enabled: true`.

> All CV / certificate buttons ship **disabled** because the PDF files are not in the repository yet. This avoids broken links.

## 7. Update personal information

Edit `src/data/personal.ts` (contact, intro, About text, graduation), `experience.ts` (add an internship at the top of the array), and `skills.ts` (skills and languages). The About statistics (internships, projects, languages) are computed automatically.
SEO: update the `<title>` and meta description in `index.html`, and add a canonical URL once you know your final address.

## 8. Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the **`main`** branch.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). `.github/workflows/deploy.yml` installs, builds and publishes `dist/`.

Final URL:

- Project repository: `https://benazzouzsidimohamed46-crypto.github.io/<repository-name>/`
- Repository named `benazzouzsidimohamed46-crypto.github.io`: `https://benazzouzsidimohamed46-crypto.github.io/`

The Vite `base` is `"./"` (relative paths), so no change is needed for either case. This is a single-page site with anchor navigation, so no SPA redirect is required.
To use an absolute base instead: `VITE_BASE=/repository-name/ npm run build`.

## Accessibility notes

Semantic landmarks and headings, skip link, visible focus ring, `aria-current` in the menu, keyboard-operable mobile menu (Escape closes it), reduced-motion support (CSS and Framer Motion).
