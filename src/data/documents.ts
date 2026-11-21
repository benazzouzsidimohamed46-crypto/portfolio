/**
 * DOCUMENTS: CV AND CERTIFICATE FILES / LINKS
 * ---------------------------------------------------------------------------
 * HOW IT WORKS
 *  - Put a PDF in  public/documents/  and set `url` to "documents/<file>.pdf"
 *    (no leading slash, works on GitHub Pages sub-paths).
 *  - OR set `url` to a full external link ("https://...").
 *  - Set `enabled: true` to show the buttons. While `enabled` is false, or the
 *    url is empty / still a "[PLACEHOLDER]", the buttons are shown disabled,
 *    so visitors never hit a broken link.
 *  - Local PDFs get both "View" and "Download PDF". External links only get "View".
 *
 * `enabled` is false by default because the PDF files are not in the repo yet.
 * Upload your files, then flip each `enabled` to true.
 */
export type DocEntry = {
  title: string;
  fileName?: string; // name suggested when the PDF is downloaded
  url: string; // "documents/x.pdf" (local) or "https://..." (external)
  enabled: boolean;
};

export const documents: { cv: DocEntry; certificates: Record<string, DocEntry> } = {
  cv: {
    title: "My Resume",
    fileName: "Sidi_Mohamed_Benazzouz_CV.pdf",
    url: "documents/CV_Sidi_Mohamed_Benazzouz.pdf",
    enabled: true,
  },

  // Keys must match the `id` values in certifications.ts
  certificates: {
    claude: {
      title: "Building Effective Human-Agent Teams",
      fileName: "claude-certificate.pdf",
      url: "documents\claude-academy-badge-building-effective-human-agent-teams.pdf", // or "documents/claude-certificate.pdf"
      enabled: true,
    },
    tcf: {
      title: "TCF TP - B2",
      fileName: "tcf-certificate.pdf",
      url: "public/documents/Attestation TCF Tout public 20261102.pdf", // or "documents/tcf-certificate.pdf"
      enabled: true,
    },
    efset: {
      title: "EF SET English Certificate",
      fileName: "efset-certificate.pdf",
      url: "documents\EF SET Certificate.pdf", // or "documents/efset-certificate.pdf"
      enabled: true,
    },
  },
};
