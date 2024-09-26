import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SOCIALS_LINKS: { label: string; href: string; icon: IconType }[] =
  [
    {
      label: "Github",
      href: "",
      icon: FaGithub,
    },
    {
      label: "Youtube",
      href: "https://www.youtube.com/@RessobeDeveloper-f7h",
      icon: FaYoutube,
    },
    {
      label: "Twitter/X",
      href: "https://x.com/ressobe_dev",
      icon: FaXTwitter,
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/bartosz-sobina-2336aa327",
      icon: FaLinkedin,
    },
  ];
