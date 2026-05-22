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
  title: "MBBS-trained physician; CS@CU MS Bridge / MSCS pathway",
  institution: "Columbia Engineering",
  description:
    "I am an MBBS-trained physician from India and a former Postdoctoral Scholar in Radiology at the University of Washington. I am now beginning Columbia Engineering's CS@CU MS Bridge / MSCS pathway, building toward research in trustworthy multimodal AI for medicine.",
  email: "",
  imageUrl: "/images/profile.jpg",
  githubUsername: "aarohi-bhatt",
  institutionUrl: "https://www.engineering.columbia.edu/",
  funDescription:
    "Interested in multimodal medical AI, human-centered diagnostic systems, and robust learning from incomplete clinical data.",
};
