/**
 * CERTIFICATION DETAILS (text shown on the cards).
 * The FILE / URL of each certificate lives in documents.ts, linked by the same `id`.
 * To add a certificate: add a block here AND a matching entry in documents.ts.
 * `issueDate`: only fill it in when you know it (leave undefined otherwise).
 */
export type Certification = {
  id: string;
  title: string;
  provider: string;
  level?: string;
  score?: string;
  issueDate?: string;
};

export const certifications: Certification[] = [
  { id: "claude", title: "Building Effective Human-Agent Teams", provider: "Claude" },
  {
    id: "tcf",
    title: "Test de Connaissance du Français (TCF TP)",
    provider: "France Éducation international",
    level: "B2",
    score: "491/699",
  },
  { id: "efset", title: "EF SET English Certificate", provider: "EF SET", level: "C1" },
];
