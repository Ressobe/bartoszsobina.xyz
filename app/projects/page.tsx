import { ProjectCard } from "@/app/_components/projects/project-card";
import { Metadata } from "next";
import { AllProjects } from "../_constats/all-projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 mt-20 pb-20">
      <h1 className="font-bold text-4xl">Projects </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-28 md:gap-10 ">
        {AllProjects.map((item) => {
          return <ProjectCard key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
}
