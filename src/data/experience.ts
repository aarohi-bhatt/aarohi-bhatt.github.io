export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Nov 2024 - May 2026",
    title: "Postdoctoral Scholar",
    company: "University of Washington, Department of Radiology",
    description:
      "Worked on CT-derived imaging biomarkers, body composition analysis, pancreatic and liver disease, GI bleed CTA, and outcomes-focused radiology studies.",
    advisor: "Dr. Dushyant Sahani",
    companyUrl: "https://rad.washington.edu/",
  },
  {
    date: "Sept 2020 - Dec 2020",
    title: "Research Assistant",
    company: "Apollo CVHF Hospital, Department of Cardiology",
    description:
      "Conducted a meta-analysis comparing outcomes of carotid endarterectomy and carotid artery stenting.",
    advisor: "Dr. Sameer Dani",
  },
  {
    date: "Apr 2022 - Aug 2023",
    title: "Intern Physician",
    company: "Smt. N.H.L. Municipal Medical College / SVP Hospital",
    description:
      "Completed rotating clinical internship across medicine, surgery, obstetrics and gynecology, pediatrics, and emergency care.",
  },
];
