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
  Snowflake,
  Sofa,
  Sparkles,
  SprayCan,
  SunMedium,
  Utensils,
  UserCheck,
  Waves,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SiteIconName =
  | "airVent"
  | "badgeCheck"
  | "bath"
  | "brush"
  | "calendarCheck"
  | "chefHat"
  | "creditCard"
  | "doorOpen"
  | "drill"
  | "droplets"
  | "fan"
  | "flame"
  | "glassWater"
  | "handPlatter"
  | "headphones"
  | "home"
  | "indianRupee"
  | "plug"
  | "shieldCheck"
  | "shirt"
  | "snowflake"
  | "sofa"
  | "sparkles"
  | "sprayCan"
  | "sunMedium"
  | "utensils"
  | "userCheck"
  | "waves"
  | "wrench";

const icons: Record<SiteIconName, LucideIcon> = {
  airVent: AirVent,
  badgeCheck: BadgeCheck,
  bath: Bath,
  brush: Brush,
  calendarCheck: CalendarCheck,
  chefHat: ChefHat,
  creditCard: CreditCard,
  doorOpen: DoorOpen,
  drill: Drill,
  droplets: Droplets,
  fan: Fan,
  flame: Flame,
  glassWater: GlassWater,
  handPlatter: HandPlatter,
  headphones: Headphones,
  home: Home,
  indianRupee: IndianRupee,
  plug: Plug,
  shieldCheck: ShieldCheck,
  shirt: Shirt,
  snowflake: Snowflake,
  sofa: Sofa,
  sparkles: Sparkles,
  sprayCan: SprayCan,
  sunMedium: SunMedium,
  utensils: Utensils,
  userCheck: UserCheck,
  waves: Waves,
  wrench: Wrench
};

export function SiteIcon({
  name,
  className,
  size = 24,
  strokeWidth = 2
}: {
  name: SiteIconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = icons[name];
  return <Icon className={className} size={size} strokeWidth={strokeWidth} />;
}
