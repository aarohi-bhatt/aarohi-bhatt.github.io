export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  coursework?: string;
}

export const educationData: Education[] = [
  {
    year: "2026-2028",
    institution: "Columbia University, Fu Foundation School of Engineering and Applied Science",
    degree: "MSCS Bridge @ Columbia University",
    coursework:
      "Summer 2026: COMS W1004 (Intro to Programming in Java), COMS W3134 (Data Structures in Java), COMS W3203 (Discrete Mathematics), MATH UN1201 (Calculus III). Fall 2026: COMS W3157 (Advanced Programming), MATH UN2015 (Linear Algebra & Probability); waitlisted: COMS W4705 (Natural Language Processing), COMS W4771 (Machine Learning)",
  },
  {
    year: "2017-2023",
    institution: "Gujarat University, Smt. N.H.L. Municipal Medical College",
    degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
  },
];
