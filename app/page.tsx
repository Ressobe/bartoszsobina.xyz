import Image from "next/image";
import { ProjectCard } from "@/app/_components/project-card";

export default function Home() {
  return (
    <>
      <section className="flex items-center gap-20 pb-12">
        <div>
          <h1 className="text-2xl font-bold">Hello , I&apos;m Bartek</h1>
          <p>
            A software developer who thrives on bringing creative projects to
            life. Beyond coding, I find joy in tinkering with Linux (I use Arch
            BTW), typing commands like a caveman.
          </p>
        </div>
        <Image
          src="/avatar.jpg"
          alt="Bartosz Sobina picture"
          width={250}
          height={250}
          className="object-cover border border-zinc-700 "
        />
      </section>
      <section className="py-12">
        <h1 className="text-2xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Tools that I have used
        </h1>
      </section>

      <section className="py-12">
        <h1 className="text-2xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Featured Projects
        </h1>
        <div className="flex gap-6">
          <ProjectCard
            description="my project"
            name="Muse-Box"
            imageSrc="/muse-box.png"
            gihubRepoLink="ddj"
            livePreview="https://muse-box.vercel.app"
            technologies={["Next.js", "Typescript", "TailwindCSS", "Drizzle"]}
          />
          <ProjectCard
            description="my project"
            name="Prz racing"
            imageSrc="/muse-box.png"
            gihubRepoLink="ddj"
            livePreview="dld"
            technologies={["Next.js", "Typescript", "Prismic", "CMS"]}
          />
        </div>
      </section>

      <section className="py-12">
        <h1 className="text-2xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Get in Touch
        </h1>
      </section>
    </>
  );
}
