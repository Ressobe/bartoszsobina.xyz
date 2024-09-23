import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatar from "../../public/avatar.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
};

export default function LinksPage() {
  return (
    <section className="pb-20 mt-20 md:min-w-[56rem] flex flex-col items-center font-text">
      <div className="w-full flex flex-col items-center pb-10">
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

        <h1 className="font-heading text-3xl text-left font-bold pt-2 text-white">
          Bartosz Sobina
        </h1>
        <div className="flex flex-col items-center md:flex-row text-muted-foreground text-sm ">
          <span>Digital Craftsman</span>
          <span>( Artist / Developer / Designer )</span>
        </div>
      </div>
      <ul className="flex flex-col justify-center w-full md:w-3/5  gap-4">
        <a href="https://github.com/Ressobe" target="_blank">
          <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary  transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
            <FaGithub className="w-10 h-10" />
            Github
          </span>
        </a>
        <a href="https://www.youtube.com/@ressobe5625" target="_blank">
          <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary  transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
            <FaYoutube className="w-10 h-10" />
            Youtube
          </span>
        </a>
        <a href="https://x.com/bartosz_sobina" target="_blank">
          <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
            <FaXTwitter className="w-10 h-10" />X
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/bartosz-sobina-2336aa327"
          target="_blank"
        >
          <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
            <FaLinkedin className="w-10 h-10" />
            Linkedin
          </span>
        </a>
      </ul>
    </section>
  );
}
