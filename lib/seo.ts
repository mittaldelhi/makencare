import type { Metadata } from "next";
import { site, siteImages } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: siteImages.heroStaff, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [siteImages.heroStaff]
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${siteImages.logo}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.supportEmail,
      telephone: site.phone,
      contactType: "customer support",
      areaServed: "IN"
    }
  ]
};

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "Android",
  applicationCategory: "LifestyleApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR"
  },
  url: site.url,
  downloadUrl: site.googlePlayUrl
};
