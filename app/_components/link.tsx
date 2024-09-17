import clsx from "clsx";
import { icons } from "lucide-react";
import Link from "next/link";
import Icon from "./icon";

type IconName = keyof typeof icons;

type LinkProps = {
  href: string;
  title: string;
  iconName: IconName;
  currentPath: string;
  onClick?: () => void;
};

export function ExtendedLink({
  href,
  title,
  iconName,
  currentPath,
  onClick,
}: LinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "font-bold flex items-center gap-x-2 transition-all",
        currentPath === href &&
          "underline underline-offset-8 decoration-4 decoration-accent text-accent brightness-125",
      )}
    >
      <Icon name={iconName} size={15} /> {title}
    </Link>
  );
}
