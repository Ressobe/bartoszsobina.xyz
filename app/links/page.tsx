import Image from "next/image";
import { Metadata } from "next";
import { SOCIALS_LINKS } from "@/app/_constats/socials-links";
import avatar from "../../public/avatar.jpg";

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
            className="object-cover border border-zinc-700 rounded-full"
          />
        </div>

        <h1 className="font-heading text-3xl text-left font-bold pt-2 text-white">
          Bartosz Sobina
        </h1>
        <div className="flex flex-col items-center md:flex-row text-muted-foreground text-sm">
          <span>Digital Craftsman</span>
          <span>( Artist / Developer / Designer )</span>
        </div>
      </div>
      <ul className="flex flex-col justify-center w-full md:w-3/5  gap-4">
        {SOCIALS_LINKS.map(({ href, icon: Icon, label }) => (
          <a key={href} href={href} target="_blank">
            <span className="flex justify-center md:justify-start items-center gap-x-4 bg-secondary  transition-all rounded border border-secondary hover:bg-secondary/60 hover:border-zinc-700 p-2">
              <Icon className="w-10 h-10" />
              {label}
            </span>
          </a>
        ))}
      </ul>
    </section>
  );
}
