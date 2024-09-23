import { Project } from "@/app/_constats/types";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export function ProjectCard({
  name,
  imageSrc,
  logoSrc,
  technologies,
  description,
  livePreview,
  gihubRepoLink,
}: Project) {
  return (
    <div className="w-full font-text">
      <div className="grid gap-4 group rounded-md">
        <div className="aspect-video relative">
          <Image
            alt={`${name} not found`}
            priority
            placeholder="blur"
            src={imageSrc}
            className="size-full object-fill rounded-md"
          />

          <div className="absolute size-full group-hover:opacity-100 opacity-0 inset-0 bg-black/60 transition grid place-content-center">
            <Image
              alt={`${name} not found`}
              priority
              src={logoSrc}
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold font-heading text-xl pt-2">{name}</h2>
      <ul className="flex pb-2 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
        <li className="overflow-hidden text-ellipsis whitespace-nowrap text-accent">
          {technologies.join(" / ")}
        </li>
      </ul>
      <p className="text-sm pb-2">{description}</p>
      <div className="flex gap-4">
        {gihubRepoLink && (
          <a
            href={gihubRepoLink}
            className="flex items-center gap-1 text-accent hover:text-accent/80 hover:cursor-pointer"
            target="_blank"
          >
            <Github className="w-4 h-4" /> Repo Url
          </a>
        )}
        {livePreview && (
          <a
            href={livePreview}
            className="flex items-center gap-1 text-accent hover:text-accent/80"
            target="_blank"
          >
            <SquareArrowOutUpRight className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
