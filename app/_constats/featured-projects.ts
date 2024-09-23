import { Project } from "./types";
import prz from "../../public/prz.png";
import przLogo from "../../public/prz-logo.svg";
import museBox from "../../public/muse-box.png";
import museBoxLogo from "../../public/muse-box-logo.svg";

export const FeaturedProjects: Project[] = [
  {
    description:
      "PRz Racing, the student racing team from Rzeszów University of Technology, dynamic website showcasing their achievements, team, and race events. Built with a flexible CMS.",
    name: "Prz racing",
    imageSrc: prz,
    logoSrc: przLogo,
    gihubRepoLink: "https://github.com/PrzRacingWeb/przracingweb",
    technologies: ["Next.js", "Typescript", "Prismic", "CMS"],
  },
  {
    description:
      "Discover and rate your favorite artists! Follow other users to explore their music tastes, see their ratings, and find new favorites. Join a community of music lovers and share your passion!",
    name: "Muse-Box",
    imageSrc: museBox,
    logoSrc: museBoxLogo,
    livePreview: "https://muse-box.vercel.app/auth/login?guest=true",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Drizzle"],
  },
];
