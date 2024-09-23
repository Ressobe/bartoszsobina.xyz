import { AboutSection } from "@/app/_components/about/about-section";
import { ToolsSection } from "@/app/_components/tools/tools-section";
import { ProjectsSection } from "@/app/_components/projects/projects-section";
import { ContactSection } from "@/app/_components/contact/contact-section";

export default function Home() {
  return (
    <div className="space-y-40 mt-20 flex flex-col md:max-w-4xl">
      <AboutSection />
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
