"use client";

import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/site";

export function FAQAccordion() {
  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-brand-green/10 rounded-md border border-brand-green/10 bg-white shadow-soft">
      {faqItems.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-brand-ink sm:px-7">
            {item.question}
            <ChevronDown
              size={20}
              className="shrink-0 text-brand-green transition group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-sm leading-7 text-brand-ink/70 sm:px-7">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
