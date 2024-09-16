import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avatar from "../../public/avatar.jpg";
export default function LinksPage() {
  return (
    <section className="pb-20 min-w-[56rem] flex flex-col items-center">
      <div className="w-full flex flex-col items-center pb-4">
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

        <h1 className="text-3xl text-left font-bold pt-2 text-white">
          Bartosz Sobina
        </h1>
        <div className="text-muted-foreground text-sm ">
          Digital Craftsman ( Artist / Developer / Designer )
        </div>
      </div>
      <ul className="flex flex-col justify-center w-3/5  gap-4">
        <a href="https://github.com/Ressobe" target="_blank">
          <li className="flex items-center gap-x-4 bg-secondary-foreground  transition-all rounded border border-secondary-foreground hover:bg-secondary-foreground/60 hover:border-zinc-700 p-2">
            <FaGithub className="w-10 h-10" />
            Github
          </li>
        </a>
        <a href="https://www.youtube.com/@ressobe5625" target="_blank">
          <li className="flex items-center gap-x-4 bg-secondary-foreground  transition-all rounded border border-secondary-foreground hover:bg-secondary-foreground/60 hover:border-zinc-700 p-2">
            <FaYoutube className="w-10 h-10" />
            Youtube
          </li>
        </a>
        <a href="https://x.com/bartosz_sobina" target="_blank">
          <li className="flex items-center gap-x-4 bg-secondary-foreground  transition-all rounded border border-secondary-foreground hover:bg-secondary-foreground/60 hover:border-zinc-700 p-2">
            <FaXTwitter className="w-10 h-10" />X
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/bartosz-sobina-2336aa327"
          target="_blank"
        >
          <li className="flex items-center gap-x-4 bg-secondary-foreground  transition-all rounded border border-secondary-foreground hover:bg-secondary-foreground/60 hover:border-zinc-700 p-2">
            <FaLinkedin className="w-10 h-10" />
            Linkedin
          </li>
        </a>
      </ul>
    </section>
  );
}
