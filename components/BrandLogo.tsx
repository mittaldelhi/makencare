import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/site";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex shrink-0 items-center rounded-md"
      aria-label="Make N Care home"
    >
      <Image
        src={siteImages.logoWordmark}
        alt="Make N Care - Your Home Our Care"
        width={360}
        height={92}
        className="h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[230px] lg:max-w-[260px]"
        priority
      />
    </Link>
  );
}
