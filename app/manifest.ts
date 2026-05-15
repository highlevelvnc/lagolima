import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LAGO LIMA — Pavimentos Desportivos e Industriais",
    short_name: "LAGO LIMA",
    description:
      "Pavimentos desportivos, industriais, microcimento, impermeabilização e relva artificial em Portugal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf9f8",
    theme_color: "#001430",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
