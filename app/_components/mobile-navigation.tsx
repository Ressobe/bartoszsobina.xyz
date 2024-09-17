"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";
import { LINKS } from "../constats";
import { ExtendedLink } from "./link";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeNavigation() {
    setOpen(false);
  }

  function openNavigation() {
    setOpen(true);
  }

  return (
    <section>
      <div className="w-10 h-10">
        {!open && (
          <Button
            variant="secondary"
            onClick={openNavigation}
            className="transition-all active:scale-125 p-2"
          >
            <HamburgerMenuIcon className="w-8 h-8" />
          </Button>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background bg-opacity-100 fixed inset-0 z-50 w-full flex flex-col items-center justify-center "
          >
            <Button
              variant="secondary"
              onClick={closeNavigation}
              className="absolute top-4 right-2 sm:top-6 sm:right-4 transition-all active:scale-125 p-4"
            >
              <XIcon className="w-8 h-8" />
            </Button>
            <ul className="flex flex-col gap-y-4 w-full justify-center items-center text-2xl">
              {LINKS.map((link) => {
                return (
                  <li key={link.href}>
                    <ExtendedLink
                      href={link.href}
                      title={link.title}
                      iconName={link.icon}
                      currentPath={pathname}
                      onClick={closeNavigation}
                    />
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}
