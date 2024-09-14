"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between py-8">
      <Link href="/" className="border border-zinc-500 p-2 rounded">
        <Image
          src="/b-letter.svg"
          alt="dkdk"
          width={25}
          height={25}
          className="fill-black"
          color="black"
        />
      </Link>
      <ul className="flex gap-x-6">
        <li>
          <Link
            href="/"
            className={clsx(
              "font-bold",
              pathname === "/" &&
                "underline underline-offset-4 decoration-4 decoration-accent text-accent",
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={clsx(
              "font-bold",
              pathname === "/projects" &&
                "underline underline-offset-4 decoration-4 decoration-accent text-accent",
            )}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/links"
            className={clsx(
              "font-bold",
              pathname === "/links" &&
                "underline underline-offset-4 decoration-4 decoration-accent text-accent",
            )}
          >
            Links
          </Link>
        </li>
      </ul>
    </nav>
  );
}
