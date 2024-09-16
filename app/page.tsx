import { AboutSection } from "./_components/about-section";
import { ToolsSection } from "./_components/tools-section";
import { ProjectsSection } from "./_components/projects-section";
import { ContactSection } from "./_components/contact-section";

export default function Home() {
  return (
    <div className="space-y-32 mt-20">
      <AboutSection />
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
