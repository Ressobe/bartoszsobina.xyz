"use client";

import Image from "next/image";
import Link from "next/link";
import { DesktopNavigation } from "@/app/_components/navigation/desktop-navigation";
import { MobileNavigation } from "@/app/_components/navigation/mobile-navigation";
import { useEffect, useState } from "react";

export function TopBar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    setIsLoaded(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLoaded && (
        <nav className="flex justify-between items-center py-8 ">
          <Link href="/" className="border border-zinc-500 p-2 rounded">
            <Image
              src="/b-letter-2.svg"
              alt="dkdk"
              width={50}
              height={50}
              className="fill-black"
              color="black"
            />
          </Link>

          <>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</>
        </nav>
      )}
    </>
  );
}
