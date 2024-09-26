import { IconName } from "@/app/_constats";
import { icons } from "lucide-react";

type IconProps = {
  name: IconName;
  size: number;
  color?: string;
};

const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} />;
};

export default Icon;
