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

    ],
  }
}
