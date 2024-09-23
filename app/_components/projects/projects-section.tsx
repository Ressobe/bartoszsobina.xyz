import { ProjectCard } from "./project-card";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { FeaturedProjects } from "@/app/_constats/featured-projects";

export function ProjectsSection() {
  return (
    <section className="relative">
      <h2 className="font-heading text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
        Featured Projects
      </h2>

      <div className="absolute -inset-0 opacity-20  bg-accent rounded-lg blur-3xl"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-10">
        {FeaturedProjects.map((item) => {
          return <ProjectCard key={item.name} {...item} />;
        })}
      </div>
      <div className="relative font-text w-full flex justify-center pt-6">
        <Link href="/projects">
          <Button variant="secondary">See more</Button>
        </Link>
      </div>
    </section>
  );
}
