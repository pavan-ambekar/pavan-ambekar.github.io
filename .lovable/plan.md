
## LaTeX Resume + GitHub CI for PDF Generation

### What will be created

**2 files added to the repository:**

1. `resume.tex` — A clean, ATS-friendly single-page LaTeX resume using the `article` document class with custom formatting (no third-party resume classes needed). Sections: Header, Summary, Skills, Experience, Education, Certifications, Languages.

2. `.github/workflows/build-resume.yml` — GitHub Actions workflow that:
   - Triggers on every push to `main` (and can be triggered manually)
   - Uses `xu-cheng/latex-action@v3` (full TeX Live, no setup needed)
   - Compiles `resume.tex` → `resume.pdf`
   - Uploads `resume.pdf` as a downloadable Actions artifact
   - Optionally commits the PDF back to the repo (will include this as a commented-out step)

### LaTeX structure

```text
\documentclass[10pt]{article}
Packages: geometry, enumitem, titlesec, hyperref, fontenc, inputenc, parskip

Header    → Name + contact line (email, phone, LinkedIn, GitHub)
Summary   → Paragraph
Skills    → Tabular-style rows by category
Experience → Each job: Company | Stack (bold), Title | Dates | Location, bullets
Education → Two entries
Certs     → Four awards with org/location
Languages → Single line
```

### CI workflow trigger

- `push` to `main`
- `workflow_dispatch` (manual trigger from GitHub Actions UI)

### Notes
- The PDF artifact will be downloadable from the GitHub Actions run page after each push
- To connect this repo to GitHub, the user needs to go to Lovable Project Settings → GitHub → Connect, then push — the workflow will run automatically
- No Supabase or React changes needed; these are purely file additions
