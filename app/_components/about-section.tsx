import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatar from "../../public/avatar.jpg";

export function AboutSection() {
  return (
    <section className="flex items-center gap-20">
      <div className="relative">
        <div className="absolute -inset-5 opacity-40  bg-accent rounded-lg blur-3xl"></div>
        <div className="relative text-white">
          <h1 className="text-4xl text-left font-bold py-4 text-white">
            Hello , I&apos;m Bartek
          </h1>
        </div>
        <p className="relative text-white py-4">
          A passionate developer with several years of experience, having
          started my journey back in technical school. What drives me most about
          programming is the endless potential to build and innovate.
        </p>
        <p className="relative text-white">
          Over the years, I’ve worked as a solo developer, focusing on creating
          projects that not only solve real-world problems but also push my
          creativity and technical skills forward.
        </p>

        <p className="relative text-white py-2">
          As a dedicated Linux enthusiast, I’m always looking for ways to
          optimize workflows and explore new tech that aligns with the
          open-source philosophy.
        </p>
      </div>
      <div>
        <div className="w-[200px] h-[200px]">
          <Image
            src={avatar}
            placeholder="blur"
            alt="Bartosz Sobina picture"
            width={200}
            height={200}
            className="object-cover border border-zinc-700 rounded-full "
          />
        </div>
        <ul className="flex pt-2 justify-center items-center gap-x-2">
          <a href="https://github.com/Ressobe" target="_blank">
            <li className="transition-colors rounded hover:bg-secondary-foreground p-2">
              <FaGithub className="w-7 h-7" />
            </li>
          </a>
          <a href="https://www.youtube.com/@ressobe5625" target="_blank">
            <li className="transition-colors rounded hover:bg-secondary-foreground p-2">
              <FaYoutube className="w-7 h-7" />
            </li>
          </a>
          <a href="https://x.com/bartosz_sobina" target="_blank">
            <li className="transition-colors rounded hover:bg-secondary-foreground p-2">
              <FaXTwitter className="w-7 h-7" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/bartosz-sobina-2336aa327"
            target="_blank"
          >
            <li className="transition-colors rounded hover:bg-secondary-foreground p-2">
              <FaLinkedin className="w-7 h-7" />
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}
