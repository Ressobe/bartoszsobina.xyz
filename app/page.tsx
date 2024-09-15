import Image from "next/image";
import { ProjectCard } from "@/app/_components/project-card";
import { ContactForm } from "@/app/_components/contact-form";

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
        <h2 className="text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Tools that I have used
        </h2>
      </section>

      <section className="py-12">
        <h2 className="text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard
            description="Discover and rate your favorite artists! Follow other users to explore their music tastes, see their ratings, and find new favorites. Join a community of music lovers and share your passion!"
            name="Muse-Box"
            imageSrc="/muse-box.png"
            gihubRepoLink="ddj"
            livePreview="https://muse-box.vercel.app"
            technologies={["Next.js", "Typescript", "TailwindCSS", "Drizzle"]}
          />
          <ProjectCard
            description="PRz Racing, the student racing team from Rzeszów University of Technology, dynamic website showcasing their achievements, team, and race events. Built with a flexible CMS."
            name="Prz racing"
            imageSrc="/prz.png"
            gihubRepoLink="ddj"
            livePreview="dld"
            technologies={["Next.js", "Typescript", "Prismic", "CMS"]}
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-xl font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
          Get in Touch
        </h2>
        <div className="max-w-md text-md">
          If you have any inquiries, please feel free to reach out.
        </div>
        <div className="max-w-md text-md pb-4">
          You can contact me via email at{" "}
          <span className="text-accent underline underline-offset-4 hover:text-accent/70">
            bartosz.sobina@proton.me
          </span>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
