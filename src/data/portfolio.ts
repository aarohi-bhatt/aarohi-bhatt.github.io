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
    title: "Causal biological systems",
    description:
      "Mechanistic and data-driven causal models of how local signals become body-wide responses.",
    technologies: ["causality", "mechanistic models", "systems biology"],
  },
  {
    title: "Simulating biology",
    description:
      "High-fidelity simulations of cellular, immune, tissue, and whole-body environments for testing hypotheses and interventions.",
    technologies: ["simulation", "immunology", "physiology"],
  },
  {
    title: "Early disease detection",
    description:
      "Catching aggressive cancers and other diseases early from rich patient data.",
    technologies: ["cancer", "early detection", "clinical data"],
  },
  {
    title: "Clinically grounded AI",
    description:
      "Models shaped by a physician's view of decision-making and diagnostic error.",
    technologies: ["clinical reasoning", "decision support", "diagnostic error"],
  },
];
