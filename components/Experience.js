import Image from "next/image";
import { doctor, experience, research } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Professional experience</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            35th BCS (Health), with postings across Dhaka’s major centres.
          </h2>
        </Reveal>

        <Reveal>
          <figure className="relative mt-10 overflow-hidden rounded-[1.75rem] ring-1 ring-black/5">
            <Image
              src="/images/research-lab.jpg"
              alt="Cancer research laboratory with microscope, slides and scientific analysis."
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                Research
              </p>
              <p className="mt-1 text-lg font-semibold">{research.title}</p>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-12 space-y-4">
          {experience.map((item, index) => (
            <Reveal key={item.place + item.when} delay={index * 0.05}>
              <li className="grid gap-4 rounded-[1.5rem] bg-white p-6 ring-1 ring-line sm:grid-cols-[8rem_1fr] sm:p-8">
                <p className="text-sm font-semibold text-brand">{item.when}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-[1.5rem] bg-white p-6 ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Research
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-ink">
                {research.title}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="h-full rounded-[1.5rem] bg-white p-6 ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Membership
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-ink">
                {research.membership}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-[1.5rem] bg-brand p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                Languages &amp; skills
              </p>
              <p className="mt-3 text-sm leading-6">
                {research.languages
                  .map((item) => `${item.name} (${item.level})`)
                  .join(" · ")}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                {research.computers.join(" · ")}
              </p>
              <p className="mt-4 text-sm text-white/80">
                BMDC {doctor.bmdc}
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
