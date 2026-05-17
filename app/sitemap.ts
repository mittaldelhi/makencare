import type { MetadataRoute } from "next";
import { site } from "../lib/site";

const paths = [
  "/",
  "/services",
  "/about",
  "/for-professionals",
  "/contact",
  "/support",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-cancellation-policy",
  "/account-deletion"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
