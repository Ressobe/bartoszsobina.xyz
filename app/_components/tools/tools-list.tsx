import Marquee from "react-fast-marquee";
import { ToolItem } from "@/app/_components/tools/tool-item";

type ToolsListProps = {
  tools: { name: string; path: string }[];
  direction?: "left" | "right" | "up" | "down";
};

export function ToolsList({ tools, direction = "left" }: ToolsListProps) {
  return (
    <ul className="py-2 w-full max-w-full overflow-hidden">
      <Marquee direction={direction} speed={20}>
        {tools.map((item) => {
          return (
            <li key={item.name}>
              <ToolItem name={item.name} imageSrc={item.path} />
            </li>
          );
        })}
      </Marquee>
    </ul>
  );
}
