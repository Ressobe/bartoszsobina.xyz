"use client";

import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import { annotate, annotationGroup } from "rough-notation";
import {
  RoughAnnotationConfig,
  RoughAnnotationGroup,
} from "rough-notation/lib/model";
import { annotationsConfig } from "@/app/_constats/animate";
import { useEffect, useRef, useState } from "react";
import { SOCIALS_LINKS } from "@/app/_constats/socials-links";

export function AboutSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const annotationRefs = annotationsConfig.map(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLSpanElement | HTMLAnchorElement>(null),
  );

  useEffect(() => {
    const annotations = annotationsConfig.map((config, index) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ref, ...options } = config;
      return annotate(
        annotationRefs[index]!.current!,
        options as RoughAnnotationConfig,
      );
    });

    const annotationGroupInstance: RoughAnnotationGroup =
      annotationGroup(annotations);

    if (!isMobile) {
      annotationGroupInstance.show();
    }

    return () => annotationGroupInstance.hide();
  }, [annotationRefs, isMobile]);

  return (
    <section className="flex flex-col md:items-center md:flex-row gap-24">
      {/* <div className="absolute -inset-5 opacity-40  bg-accent rounded-lg blur-3xl"></div> */}
      <div className="relative text-white">
        <h1 className="font-heading text-4xl text-center md:text-left font-bold py-4 text-white">
          Hello , I&apos;m Bartek
        </h1>
        <p className="relative font-text text-center md:text-left text-white py-4 leading-relaxed">
          A{" "}
          <span className="text-white" ref={annotationRefs[0]}>
            passionate developer
          </span>{" "}
          with several{" "}
          <span className="text-white" ref={annotationRefs[1]}>
            years of experience
          </span>
          , having started my journey back in technical school. What drives me
          most about programming is the endless potential to{" "}
          <span className="text-white" ref={annotationRefs[2]}>
            build and innovate.
          </span>
        </p>
        <p className="relative font-text text-white hidden md:block text-left text-sm ">
          Over the years, I’ve worked as a solo developer, focusing on creating
          projects that not only solve real-world problems but also push my
          creativity and technical skills forward.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px]">
          <Image
            src={avatar}
            placeholder="blur"
            alt="Bartosz Sobina picture"
            width={200}
            height={200}
            className="object-cover border border-zinc-700 rounded-full "
          />
        </div>
        <ul className="flex pt-2 justify-center items-center gap-x-2">
          {SOCIALS_LINKS.map(({ href, icon: Icon }) => (
            <a key={href} href={href} target="_blank">
              <li className="transition-colors rounded hover:bg-secondary p-2">
                <Icon className="w-7 h-7" />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
