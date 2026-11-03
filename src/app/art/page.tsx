import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { aboutMe } from "@/data/aboutme";
import { artData } from "@/data/art";
import { ArtGallery } from "@/components/art-gallery";

export const metadata: Metadata = {
  title: `Art | ${aboutMe.name}`,
  description: `Art by ${aboutMe.name}, starting with generative sketches made in p5.js.`,
};

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-14 md:py-18">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} /> {aboutMe.name}
        </Link>

        <h1 className="font-serif text-3xl font-light tracking-wide mt-8 mb-3">
          Art
        </h1>
        <p className="font-serif text-sm leading-relaxed text-zinc-700 max-w-prose">
          Things I make for the joy of it. These first pieces are generative
          sketches written in p5.js, each grown from one small rule. Click a
          piece to see it larger, or press New version to grow a different
          one.
        </p>

        <section className="mt-12">
          <h2 className="font-serif text-md mb-6 tracking-wide uppercase">
            Generative Sketches
          </h2>
          <ArtGallery pieces={artData} />
        </section>
      </div>
    </div>
  );
}
