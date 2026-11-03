export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "SIR Annual Scientific Meeting",
    title:
      "Evaluating long-term outcomes of liver transplantation after Y-90 radioembolization for HCC",
    authors: "Bhatt A*, Jaengprajak P*, Singh S, Sahani D, Laidlaw G",
    tldr: "Oral presentation; *co-first.",
  },
  {
    year: "2026",
    conference: "RadioGraphics",
    title:
      "Acute Infectious Aortitis and Pseudoaneurysm from Early Signs to Rupture: Evolution over Time",
    authors:
      "Kumar T, Patnam NG, Karbhari A, Sitta J, Yadav M, Bhatt A, Kankara SR, Aswani Y, Bhargava R",
    paperUrl: "https://doi.org/10.1148/rg.260091",
    award: "Certificate of Merit, Cum Laude",
    tldr: "RadioGraphics Fundamentals, Vol. 46, No. 11. Award from its RSNA 2025 educational exhibit.",
  },
  {
    year: "2025",
    conference: "International Journal of Cardiovascular Imaging",
    title:
      "Beyond hypertrophic cardiomyopathy: unmasking alternative causes of LVOT obstruction on CMR",
    authors: "Banerjee T, Gulhane A, Bhatt A, Cham M",
    paperUrl: "https://doi.org/10.1007/s10554-024-03311-8",
    tldr: "Peer-reviewed journal article.",
  },
  {
    year: "2025",
    conference: "RSNA Annual Meeting",
    title:
      "Rethinking the future of radiology: elevating the entire imaging experience with convenience, communication, and care",
    authors: "Devi K, Dighe M, Bhatt A, Sheriff G, Sahani D",
    award: "Certificate of Merit",
    tldr: "Educational exhibit.",
  },
  {
    year: "2025",
    conference: "RSNA Annual Meeting",
    title:
      "Transforming patient care: radiologist-driven consultations with opportunistic CT screening",
    authors: "Devi K, Bhatt A, Daye D, Pickhardt P, Sahani D",
    award: "Certificate of Merit",
    tldr: "Educational exhibit.",
  },
  {
    year: "2022",
    conference: "ISCOMS, Netherlands",
    title:
      "Comparison between carotid endarterectomy and carotid stenting outcomes in patients: a meta-analysis",
    authors: "Bhatt A, Dani A, Dani S",
    tldr: "Plenary oral presentation.",
  },
  {
    year: "2019",
    conference: "ISCOMS, Netherlands",
    title:
      "Correlation between intraocular pressure and central corneal thickness in patients with refractive errors",
    authors: "Bhatt A, Gokani B, Raval R",
    award: "Best Poster Award",
    tldr: "Poster presentation.",
  },
  {
    year: "2019",
    conference: "AMCON",
    title: "Correlation analysis of IOP and CCT in refractive error patients",
    authors: "Bhatt A, Gokani B, Raval R",
    award: "Best Poster Award",
    tldr: "Poster presentation.",
  },
];
