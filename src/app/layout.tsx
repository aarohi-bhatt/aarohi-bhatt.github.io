import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

// Fonts are self-hosted from @fontsource packages so the build never
// depends on reaching Google Fonts.
const geistSans = localFont({
  variable: "--font-geist-sans",
  src: [
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  src: [
    { path: "../../node_modules/@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/geist-mono/files/geist-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const notoSerif = localFont({
  variable: "--font-noto-serif",
  src: [
    { path: "../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

const ptSerif = localFont({
  variable: "--font-pt-serif",
  src: [
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

const siteUrl = "https://aarohi-bhatt.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: aboutMe.name,
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description,
    images: aboutMe.imageUrl ? [aboutMe.imageUrl] : undefined,
  },
};

// Structured data so Google can connect this site to the same person's other profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: aboutMe.name,
  url: siteUrl,
  image: aboutMe.imageUrl ? `${siteUrl}${aboutMe.imageUrl}` : undefined,
  jobTitle: "MS Computer Science student",
  affiliation: { "@type": "CollegeOrUniversity", name: "Columbia University" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Gujarat University" },
    { "@type": "CollegeOrUniversity", name: "University of Washington" },
  ],
  sameAs: [
    aboutMe.linkedinUsername && `https://www.linkedin.com/in/${aboutMe.linkedinUsername}`,
    aboutMe.githubUsername && `https://github.com/${aboutMe.githubUsername}`,
    aboutMe.twitterUsername && `https://x.com/${aboutMe.twitterUsername}`,
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
                Built with{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  research-website-template
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
