/**
 * EXPERIENCE
 * To add a new internship: copy one `kind: "internship"` block and put it
 * at the TOP of the array (newest first). The timeline updates automatically.
 * `kind: "independent"` entries appear in their own block, separate from internships.
 */
export type Experience = {
  id: string;
  kind: "internship" | "independent";
  title: string; // company name (internship) or activity title (independent)
  subtitle?: string; // department or category
  position?: string;
  location?: string;
  date?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    id: "mobilis",
    kind: "internship",
    title: "Mobilis",
    subtitle: "BSC Center",
    position: "Discovery Internship",
    location: "Ain Témouchent, Algeria",
    date: "July 2026",
    points: [
      "Discovered mobile network architecture and infrastructure.",
      "Observed BSC equipment and transmission infrastructure.",
      "Discovered ZTE telecommunications equipment.",
      "Learned about mobile network supervision and equipment management.",
      "Explored the supervision of different cellular technologies, including 2G, 3G, 4G/LTE, and 5G.",
    ],
  },
  {
    id: "algerie-telecom",
    kind: "internship",
    title: "Algérie Télécom",
    subtitle: "Centre de Maintenance et de Production (CMP)",
    position: "Discovery Internship",
    location: "Ain Témouchent, Algeria",
    date: "August 2025",
    points: [
      "Discovered the organization and operation of the Maintenance and Production Center.",
      "Observed maintenance operations on copper and FTTH access networks.",
      "Studied MSAN equipment and telecommunications infrastructure.",
      "Discovered fiber-optic access networks, connection procedures, and service activation processes.",
    ],
  },
  {
    id: "ftth-independent",
    kind: "independent",
    title: "Independent Technical Activities",
    subtitle: "FTTH Router Configuration",
    points: [
      "Reconfiguration and optimization of FTTH modem-routers.",
      "Band Steering configuration.",
      "Wi-Fi repeater configuration.",
      "Reusing older ADSL routers as wireless access points and repeaters.",
      "Improving wireless network coverage in residential environments.",
    ],
  },
];
