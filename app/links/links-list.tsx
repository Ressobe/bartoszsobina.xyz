"use client";

import { SOCIALS_LINKS } from "@/app/_constats/socials-links";
import { motion } from "framer-motion";

export function LinksList() {
  return (
    <ul className="flex flex-col justify-center w-full md:w-3/5  gap-4">
      {SOCIALS_LINKS.map(({ href, icon: Icon, label }) => (
        <motion.a key={href} href={href} target="_blank" whileHover={{ y: -5 }}>
          <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary  transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
            <Icon className="w-10 h-10" />
            {label}
          </span>
        </motion.a>
      ))}
    </ul>
  );
}
