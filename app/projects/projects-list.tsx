"use client";

import { ProjectCard } from "@/app/_components/projects/project-card";
import { Project } from "@/app/_constats/types";
import { useDebounce } from "@/app/_hooks/use-debounce";
import { Input } from "@/app/_components/ui/input";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type ProjectsListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          project.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()),
      ),
    [debouncedSearchTerm, projects],
  );

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-4xl">Projects </h1>

        <span className="relative">
          <Search className="absolute left-2.5 top-2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search ..."
            className="pl-10 text-white text-md sm:w-[300px] md:w-[200px] lg:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-28 md:gap-10 ">
        {filteredProjects.map((item) => {
          return <ProjectCard key={item.name} {...item} />;
        })}
      </div>
    </>
  );
}
