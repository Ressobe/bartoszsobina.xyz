import { ToolsList } from "@/app/_components/tools/tools-list";
import { toolsFirstRow, toolsSecondRow } from "@/app/_constats";

export function ToolsSection() {
  return (
    <section className="w-full max-w-full">
      <h2 className="text-xl font-heading font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
        Tools that I have used
      </h2>
      <ToolsList tools={toolsFirstRow} />
      <ToolsList tools={toolsSecondRow} direction="right" />
    </section>
  );
}
