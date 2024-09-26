import { Metadata } from "next";
import { ProjectsList } from "./projects-list";
import { AllProjects } from "@/app/_constats/all-projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 mt-20 pb-20">
      <ProjectsList projects={AllProjects} />
    </div>
  );
}
