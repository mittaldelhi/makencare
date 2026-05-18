import type { MetadataRoute } from "next";
import { site } from "../lib/site";

const paths = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/privacy-policy",
  "/delete-account"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
