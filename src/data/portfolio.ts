export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Multimodal medical AI",
    description:
      "Models that connect imaging, reports, structured clinical data, pathology, genomics, and outcomes.",
    technologies: ["imaging", "text", "EHR", "outcomes"],
  },
  {
    title: "Human-centered diagnostic AI",
    description:
      "Systems built around clinicians, patients, ambiguity, uncertainty, and accountable care.",
    technologies: ["clinical reasoning", "interpretability", "workflow"],
  },
  {
    title: "Radiology vision + clinical reasoning",
    description:
      "Image representations that stay close to anatomy, disease, reports, and interpretive logic.",
    technologies: ["radiology", "computer vision", "reports"],
  },
  {
    title: "Longitudinal, causal, missingness-aware ML",
    description:
      "Methods for patient trajectories where absent data may reflect access, selection, documentation, or inequity.",
    technologies: ["causality", "missingness", "longitudinal data"],
  },
];
