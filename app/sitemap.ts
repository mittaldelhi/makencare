import type { MetadataRoute } from "next";
import { canonicalUrl } from "../lib/seo";

const paths = [
  "/",
  "/about",
  "/services",
  "/for-professionals",
  "/contact",
  "/support",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-cancellation-policy",
  "/account-deletion",
  "/delete-account"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
