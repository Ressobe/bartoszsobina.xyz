import { ProjectCard } from "../_components/project-card";
import prz from "@/public/prz.png";
import museBox from "@/public/muse-box.png";
import przLogo from "@/public/prz-logo.svg";
import museBoxLogo from "@/public/muse-box-logo.png";

export default function ProjectsPage() {
  return (
    <div className="space-y-10 mt-20 pb-20">
      <h1 className="font-bold text-4xl">Projects </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        <ProjectCard
          description="PRz Racing, the student racing team from Rzeszów University of Technology, dynamic website showcasing their achievements, team, and race events. Built with a flexible CMS."
          name="Prz racing"
          imageSrc={prz}
          logoSrc={przLogo}
          gihubRepoLink="ddj"
          livePreview="dld"
          technologies={["Next.js", "Typescript", "Prismic", "CMS"]}
        />
        <ProjectCard
          description="Discover and rate your favorite artists! Follow other users to explore their music tastes, see their ratings, and find new favorites. Join a community of music lovers and share your passion!"
          name="Muse-Box"
          imageSrc={museBox}
          logoSrc={museBoxLogo}
          gihubRepoLink="https://github.com/Ressobe/muse-box"
          livePreview="https://muse-box.vercel.app"
          technologies={["Next.js", "Typescript", "TailwindCSS", "Drizzle"]}
        />
      </div>
    </div>
  );
}
