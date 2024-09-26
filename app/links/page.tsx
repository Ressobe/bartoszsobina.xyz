import Image from "next/image";
import { Metadata } from "next";
import avatar from "../../public/avatar.jpg";
import { LinksList } from "./links-list";

export const metadata: Metadata = {
  title: "Links",
};

export default function LinksPage() {
  return (
    <section className="pb-20 mt-20 flex flex-col items-center font-text">
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
      <LinksList />
    </section>
  );
}
