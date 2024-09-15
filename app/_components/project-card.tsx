import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

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
      <div className="">
        <Image
          src={imageSrc}
          alt="project image"
          width={400}
          height={300}
          className="border p-2 rounded border-zinc-700 object-cover"
        />
      </div>
      <h2 className="font-bold text-xl pt-2">{name}</h2>
      <ul className="flex pb-2">
        {technologies.map((item, idx) => {
          return (
            <li key={item} className="text-accent brightness-125">
              {idx > 0 && <span>&nbsp;/ </span>}
              {item}
            </li>
          );
        })}
      </ul>
      <p className="text-sm pb-2">{description}</p>
      <div className="flex gap-4">
        {gihubRepoLink && (
          <a
            href={gihubRepoLink}
            className="flex items-center gap-1 text-accent hover:text-accent/80"
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
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
}
