import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rezkita & Haris - Wedding",
    short_name: "RH Wedding",
    description: "Rezkita & Haris - A Journey Begins",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#000000",
    icons: [
      // {
      //   src: "/icon-192x192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icon-512x512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
      // // {
      // //   src: "/apple-touch-icon.png",
      // //   sizes: "180x180",
      // //   type: "image/png",
      // //   purpose: "apple touch icon",
      // // },
    ],
  }
}
