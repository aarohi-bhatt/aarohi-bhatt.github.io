export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2026-2028",
    institution: "Columbia University, Fu Foundation School of Engineering and Applied Science",
    degree: "CS@CU MS Bridge / MSCS pathway",
    thesis: "Thesis-oriented preparation in computer science and machine learning",
  },
  {
    year: "2017-2023",
    institution: "Gujarat University, Smt. N.H.L. Municipal Medical College",
    degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
  },
];
