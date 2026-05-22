export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "May 2026",
    title: "Beginning Columbia Engineering's CS@CU MS Bridge / MSCS pathway",
    description:
      "Building a rigorous computer science and machine learning foundation for future thesis-driven research.",
  },
];
