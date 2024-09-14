import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  imageSrc: string;
  technologies: string[];
  description: string;
  livePreview?: string;
  gihubRepoLink?: string;
};

export function ProjectCard({
  name,
  imageSrc,
  technologies,
  description,
  livePreview,
  gihubRepoLink,
}: ProjectCardProps) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="project image"
        width={400}
        height={300}
        className="border p-2 rounded border-zinc-700"
      />
      <h2 className="font-bold text-xl pt-2">{name}</h2>
      <ul className="flex pb-2">
        {technologies.map((item, idx) => {
          return (
            <li key={item} className="text-accent">
              {idx > 0 && <span>&nbsp;/ </span>}
              {item}
            </li>
          );
        })}
      </ul>
      <p>{description}</p>
      <div className="flex gap-4">
        {gihubRepoLink && (
          <a
            href={gihubRepoLink}
            className="flex items-center gap-1 text-accent"
            target="_blank"
          >
            <Github className="w-4 h-4" /> Repo Url
          </a>
        )}
        {livePreview && (
          <a
            href={livePreview}
            className="flex items-center gap-1 text-accent"
            target="_blank"
          >
            <SquareArrowOutUpRight className="w-4 h-4" />
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
}
