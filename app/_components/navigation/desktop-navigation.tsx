"use client";

import { usePathname } from "next/navigation";
import { LINKS } from "@/app/_constats/index";
import { ExtendedLink } from "@/app/_components/navigation/link";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-6">
      {LINKS.map((link) => {
        return (
          <li key={link.href}>
            <ExtendedLink
              href={link.href}
              title={link.title}
              iconName={link.icon}
              currentPath={pathname}
            />
          </li>
        );
      })}
    </ul>
  );
}
