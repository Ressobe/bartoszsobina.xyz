import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="pb-20 font-text">
      <h2 className="text-xl font-heading font-bold pb-6 underline underline-offset-8 decoration-accent decoration-wavy">
        Get in Touch
      </h2>
      <div className="max-w-md text-md">
        If you have any inquiries, please feel free to reach out.
      </div>
      <div className="max-w-md text-md pb-4">
        You can contact me via email at{" "}
        <a
          href="mailto:bartosz.sobina@proton.me"
          target="_blank"
          className="text-accent underline underline-offset-4 hover:text-accent/70"
        >
          bartosz.sobina@proton.me
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
