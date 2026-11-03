export interface ArtPiece {
  id: string;
  title: string;
  description: string;
  details?: string;
  imageUrl: string;
  url: string;
  wide?: boolean;
}

// Art pieces shown on the homepage and the /art page. The id must match a
// sketch in public/art/sketches.js.
export const artData: ArtPiece[] = [
  {
    id: "mirrors",
    title: "Hall of Mirrors",
    description:
      "A single ray of light reflects through a chamber of flat and curved mirrors for hundreds of bounces.",
    details:
      "At each mirror the ray obeys the law of reflection: its direction d becomes d − 2(d·n)n, where n is the mirror's normal. Every new version builds a different chamber.",
    imageUrl: "/art/thumbs/mirrors.png",
    url: "/art/#mirrors",
    wide: true,
  },
  {
    id: "rangoli",
    title: "Rangoli",
    description:
      "Petals copied around a center with 8, 10 or 12-fold rotational symmetry, ring by ring.",
    details:
      "One petal is drawn, then rotated around the center by 2π/n. Rings grow outward one at a time, like chalk laid on a doorstep.",
    imageUrl: "/art/thumbs/rangoli.png",
    url: "/art/#rangoli",
  },
  {
    id: "cubes",
    title: "Cube Field",
    description:
      "Isometric cube stacks whose heights rise and settle with Perlin noise.",
    details:
      "Each cube is three rhombi in three tones. Stack heights come from slowly moving Perlin noise, and cubes are drawn back to front so nearer ones cover farther ones.",
    imageUrl: "/art/thumbs/cubes.png",
    url: "/art/#cubes",
  },
  {
    id: "truchet",
    title: "Truchet Weave",
    description:
      "Quarter-circle tiles that flip at random, joining into long winding threads.",
    details:
      "Every square holds two quarter circles in one of two orientations. A few tiles turn every moment, so the threads keep rerouting.",
    imageUrl: "/art/thumbs/truchet.png",
    url: "/art/#truchet",
  },
];
