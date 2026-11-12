export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aarohi Bhatt",
  title: "MBBS-trained physician",
  institution: "MSCS Bridge @ Columbia University",
  description:
    "Hi, I'm Aarohi. I'm a physician (MBBS) and an MS Computer Science student at Columbia University. I recently joined Prof. Kaveri Thakoor's AI4VS Lab, where I'm contributing to research on detecting systemic diseases from eye imaging.<br/><br/>I'm fascinated by biology as a set of naturally occurring causal systems, from cellular signaling to whole-body physiology, and I want to understand them from the bottom up. That means combining mechanistic models with causal structure learned from data, and building high-fidelity simulations of biology where hypotheses can be tested faster than clinical trials allow. My long-term goal is to catch disease at the right time and design better interventions.<br/><br/>Before Columbia, I was a postdoctoral scholar in radiology at the University of Washington with Dr. Dushyant Sahani, working on CT body composition in liver and pancreatic disease. I trained in medicine at Gujarat University and practiced as a physician in India.",
  email: "akb2248 [at] columbia [dot] edu",
  imageUrl: "/images/profile.jpg",
  githubUsername: "aarohi-bhatt",
  twitterUsername: "aarohibhatt_",
  linkedinUsername: "aarohi-bhatt",
  institutionUrl: "https://www.engineering.columbia.edu/",
  funDescription:
    "Interested in causal biological systems, simulating biology, and catching disease at the right time.",
};
