import { ProjectCard } from "./project-card";
import museBox from "../../public/muse-box.png";
import prz from "../../public/prz.png";

export function ProjectsSection() {
  return (
    <section className="relative">
      <h2 className="relative text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
        Featured Projects
      </h2>

      <div className="absolute -inset-0 opacity-20  bg-accent rounded-lg blur-3xl"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2  gap-10 ">
        <ProjectCard
          description="PRz Racing, the student racing team from Rzeszów University of Technology, dynamic website showcasing their achievements, team, and race events. Built with a flexible CMS."
          name="Prz racing"
          imageSrc={prz}
          gihubRepoLink="ddj"
          livePreview="dld"
          technologies={["Next.js", "Typescript", "Prismic", "CMS"]}
        />
        <ProjectCard
          description="Discover and rate your favorite artists! Follow other users to explore their music tastes, see their ratings, and find new favorites. Join a community of music lovers and share your passion!"
          name="Muse-Box"
          imageSrc={museBox}
          gihubRepoLink="https://github.com/Ressobe/muse-box"
          livePreview="https://muse-box.vercel.app"
          technologies={["Next.js", "Typescript", "TailwindCSS", "Drizzle"]}
        />
      </div>
    </section>
  );
}
