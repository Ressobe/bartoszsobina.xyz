import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  imageSrc: StaticImageData;
  logoSrc: StaticImageData;
  technologies: string[];
  description: string;
  livePreview?: string;
  gihubRepoLink?: string;
};
