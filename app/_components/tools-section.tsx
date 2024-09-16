import { ToolsList } from "@/app/_components/tools-list";
import { toolsFirstRow, toolsSecondRow } from "../const";

export function ToolsSection() {
  return (
    <section>
      <h2 className="text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
        Tools that I have used
      </h2>
      <ToolsList tools={toolsFirstRow} />
      <ToolsList tools={toolsSecondRow} direction="right" />
    </section>
  );
}
