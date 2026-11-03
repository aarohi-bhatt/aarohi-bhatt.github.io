export interface ArtPiece {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

// Generative sketches made with p5.js. Each one lives on the /art page;
// add a piece by adding a section there and an entry here.
export const artData: ArtPiece[] = [
  {
    title: "Hall of Mirrors",
    description:
      "A single ray of light reflects through a chamber of flat and curved mirrors for hundreds of bounces.",
    imageUrl: "/art/thumbs/mirrors.png",
    url: "/art/#mirrors",
  },
  {
    title: "Rangoli",
    description:
      "Petals copied around a center with 8, 10 or 12-fold rotational symmetry, ring by ring.",
    imageUrl: "/art/thumbs/rangoli.png",
    url: "/art/#rangoli",
  },
  {
    title: "Cube Field",
    description:
      "Isometric cube stacks whose heights rise and settle with Perlin noise.",
    imageUrl: "/art/thumbs/cubes.png",
    url: "/art/#cubes",
  },
  {
    title: "Truchet Weave",
    description:
      "Quarter-circle tiles that flip at random, joining into long winding threads.",
    imageUrl: "/art/thumbs/truchet.png",
    url: "/art/#truchet",
  },
];
