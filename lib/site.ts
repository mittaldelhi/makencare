import {
  AirVent,
  BadgeCheck,
  Bath,
  Brush,
  CalendarCheck,
  ChefHat,
  CreditCard,
  DoorOpen,
  Drill,
  Droplets,
  Fan,
  Flame,
  GlassWater,
  HandPlatter,
  Headphones,
  Home,
  IndianRupee,
  Plug,
  ShieldCheck,
  Shirt,
  Sofa,
  Sparkles,
  SprayCan,
  Snowflake,
  SunMedium,
  Utensils,
  UserCheck,
  Waves,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
 * MAIN WEBSITE CONTENT FILE
 * Update app links, contact details, image paths, service areas, services, and
 * support/legal placeholders here before publishing.
 */
export const site = {
  name: "Make N Care",
  domain: "makencare.com",
  url: "https://makencare.com",
  supportEmail: "support@makencare.com",
  phone: "+91 8824106060",
  whatsapp: "+91 8824106060",
  supportHours: "Monday to Saturday, 9:00 AM - 7:00 PM",
  serviceAreas: ["Bhiwadi"],
  googlePlayUrl: "#",
  appStoreUrl: "#"
};

export const siteImages = {
  logo: "/images/logo.png",
  logoWordmark: "/images/logo-wordmark.png",
  logoIcon: "/images/logo-icon.png",
  heroStaff: "/images/hero-staff.png",
  appScreens: [
    "/images/app-screen1.png",
    "/images/app-screen2.1.png",
    "/images/app-screen3.png"
  ],
  googlePlayBadge: "/images/google-play-badge.svg",
  appStoreBadge: "/images/app-store-badge.svg"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const trustBadges = [
  { label: "Verified Professionals", icon: UserCheck },
  { label: "Transparent Pricing", icon: IndianRupee },
  { label: "Easy App Booking", icon: CalendarCheck },
  { label: "Local Support", icon: Headphones },
  { label: "Secure Payments", icon: CreditCard }
];

export type Service = {
  name: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { name: "Pre-party Cleaning", icon: Sparkles },
  { name: "After-party Cleaning", icon: SprayCan },
  { name: "Bathroom Cleaning", icon: Bath },
  { name: "Kitchen Cleaning", icon: ChefHat },
  { name: "Water Tank Cleaning", icon: Droplets },
  { name: "Brooming & Mopping", icon: Brush },
  { name: "Balcony Cleaning", icon: DoorOpen },
  { name: "Glass Cleaning", icon: GlassWater },
  { name: "Room Dusting", icon: SunMedium },
  { name: "Laundry at Home", icon: Shirt },
  { name: "Utensil Cleaning", icon: Utensils },
  { name: "Cooking Service", icon: HandPlatter },
  { name: "AC Service", icon: AirVent },
  { name: "Electrician", icon: Plug },
  { name: "Plumbing", icon: Wrench },
  { name: "Appliance Repair", icon: Drill },
  { name: "Sofa Cleaning", icon: Sofa },
  { name: "Fridge Cleaning", icon: Snowflake },
  { name: "Fan Cleaning", icon: Fan },
  { name: "Deep Home Cleaning", icon: Home },
  { name: "RO Service", icon: Waves },
  { name: "Geyser Service", icon: Flame },
  { name: "Basic Home Assistance", icon: ShieldCheck }
];

export const serviceNames = services.map((service) => service.name);

export const serviceByName = services.reduce<Record<string, Service>>(
  (acc, service) => {
    acc[normalizeServiceName(service.name)] = service;
    return acc;
  },
  {}
);

export function findService(name: string): Service {
  return serviceByName[normalizeServiceName(name)] ?? {
    name,
    icon: Sparkles
  };
}

function normalizeServiceName(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "");
}

export const serviceCategories = [
  {
    title: "Cleaning Services",
    description:
      "Routine, deep, and special-occasion cleaning services for homes that need reliable care.",
    items: [
      "Pre-party cleaning",
      "After-party cleaning",
      "Bathroom cleaning",
      "Kitchen cleaning",
      "Brooming and mopping",
      "Balcony cleaning",
      "Glass cleaning",
      "Water tank cleaning",
      "Room dusting",
      "Deep cleaning",
      "Sofa cleaning",
      "Fridge cleaning",
      "Fan cleaning"
    ],
    icon: Sparkles
  },
  {
    title: "Repair & Maintenance",
    description:
      "Skilled help for home repairs, fixtures, appliances, and maintenance needs.",
    items: [
      "Electrician",
      "Plumber",
      "AC service",
      "Appliance repair",
      "RO Service",
      "Geyser Service"
    ],
    icon: Wrench
  },
  {
    title: "Home Help Services",
    description:
      "Daily home assistance services made easier to discover and request through the app.",
    items: [
      "Laundry at Home",
      "Cooking Service",
      "Utensil Cleaning",
      "Basic Home Assistance"
    ],
    icon: ShieldCheck
  }
];

export const faqItems = [
  {
    question: "What is Make N Care?",
    answer:
      "Make N Care is a home-services platform for cleaning, repair, and home-help services. Bookings are currently available only through the Make N Care mobile app."
  },
  {
    question: "Can I book services from the website?",
    answer:
      "No. The website is for brand information, service discovery, app download, support, and legal information. All service booking happens inside the mobile app."
  },
  {
    question: "How do I download the Make N Care app?",
    answer:
      "Use the Google Play badge on this website to open the app listing when live. The iOS app is marked as coming soon until it is available."
  },
  {
    question: "Which services are available?",
    answer:
      "Make N Care covers cleaning, repair, maintenance, and home-help services. Availability can vary by city and should be checked inside the mobile app."
  },
  {
    question: "Are Make N Care professionals verified?",
    answer:
      "Make N Care is built around verified service professionals and onboarding checks before professionals receive service requests."
  },
  {
    question: "Is Make N Care available in my city?",
    answer:
      "Make N Care is launching in selected service areas including Bhiwadi, Delhi NCR, Gurgaon, Jaipur, and Mumbai, with more cities planned."
  },
  {
    question: "Can I book recurring services?",
    answer:
      "Recurring service options, where available, should be managed inside the Make N Care mobile app."
  },
  {
    question: "How do payments work?",
    answer:
      "Payment options and booking charges are shown in the mobile app before confirmation. The website does not collect booking payments."
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Cancellation options are managed inside the app and may depend on assignment status, service timing, and applicable policy."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support from the app or through the website contact and support pages."
  },
  {
    question: "How do I delete my account?",
    answer:
      "Visit the Account Deletion page to submit a deletion request for your Make N Care account and associated personal data."
  },
  {
    question: "Is the iOS app available?",
    answer:
      "The App Store badge is shown as coming soon until the iOS version is live."
  }
];

export const contactReasons = [
  "Customer support",
  "Professional joining",
  "Business inquiry",
  "App issue",
  "Account deletion help",
  "Other"
];

export const supportTopics = [
  "App download help",
  "Booking help",
  "Payment help",
  "Cancellation help",
  "Professional support",
  "Account deletion help"
];

export const areaChips = [...site.serviceAreas, "More cities coming soon"];

export const contactCards = [
  { label: "Support email", value: site.supportEmail },
  { label: "WhatsApp / phone", value: site.phone },
  { label: "Service areas", value: site.serviceAreas.join(", ") },
  { label: "Support hours", value: site.supportHours }
];

export const whyCards = [
  "20+ Home services",
  "Verified service partners",
  "Easy app booking",
  "Support when you need help"
];
