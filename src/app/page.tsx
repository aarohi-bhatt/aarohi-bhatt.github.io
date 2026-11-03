import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { artData } from "@/data/art";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-14 md:py-18">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-8 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-10 space-y-6">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-14">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <div
                  className="font-serif text-sm leading-relaxed text-zinc-700 space-y-4 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
                {portfolioData.length > 0 && (
                  <div className="mt-5">
                    <h2 className="font-serif text-base mb-3 tracking-wide uppercase">
                      Research Interests
                    </h2>
                    <ul className="font-serif list-disc pl-5 space-y-2 text-sm leading-relaxed text-zinc-700">
                      {portfolioData.map((interest) => (
                        <li key={interest.title}>
                          <span className="text-zinc-900">
                            {interest.title}:
                          </span>{" "}
                          {interest.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-6 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-7">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-6 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-7">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-5" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-6 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-7">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Art:
                  return (
                    artData.length > 0 && (
                      <section key={sectionName}>
                        <div className="flex items-baseline justify-between mb-6">
                          <h2 className="font-serif text-md tracking-wide uppercase">
                            Generative Art
                          </h2>
                          <a
                            href="/art/"
                            className="font-serif text-sm text-zinc-500 underline hover:text-zinc-900"
                          >
                            Open the studio
                          </a>
                        </div>
                        <p className="font-serif text-sm leading-relaxed text-zinc-700 mb-5">
                          Small sketches in p5.js, each grown from one geometric rule.
                        </p>
                        <div className="grid grid-cols-2 gap-5">
                          {artData.map((piece) => (
                            <a key={piece.title} href={piece.url} className="group block">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={piece.imageUrl}
                                alt={piece.title}
                                loading="lazy"
                                className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                              />
                              <p className="font-serif text-sm text-zinc-900 mt-2 group-hover:underline">
                                {piece.title}
                              </p>
                              <p className="font-serif text-xs leading-relaxed text-zinc-500 mt-1">
                                {piece.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return null;
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
