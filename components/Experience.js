import Image from "next/image";
import { doctor, experience, research } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Professional experience</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl tracking-[-0.03em] text-forest sm:text-4xl">
            35th BCS (Health), with postings across Dhaka’s major centres.
          </h2>
        </Reveal>

        <Reveal>
          <figure className="relative mt-10 overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/awareness.jpg"
              alt="Dr. Monjur Shoyeb Khan speaking at a cancer awareness program."
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="aspect-[16/9] w-full object-cover sm:aspect-[2.35/1]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent p-5 text-ivory sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
                Public education
              </p>
              <p className="font-display mt-1 text-lg">
                Cancer awareness program — prevent, detect, treat
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-12 space-y-4">
          {experience.map((item, index) => (
            <Reveal key={item.place + item.when} delay={index * 0.05}>
              <li className="grid gap-4 rounded-[1.5rem] border border-line bg-sand/70 p-6 sm:grid-cols-[8rem_1fr] sm:p-8">
                <p className="text-sm font-semibold text-teal">{item.when}</p>
                <div>
                  <h3 className="font-display text-lg tracking-tight text-forest">
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
            <article className="h-full rounded-[1.5rem] border border-line bg-sand/70 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                Research
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-forest">
                {research.title}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="h-full rounded-[1.5rem] border border-line bg-sand/70 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                Membership
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-forest">
                {research.membership}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-[1.5rem] bg-forest p-6 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
                Languages &amp; skills
              </p>
              <p className="mt-3 text-sm leading-6">
                {research.languages
                  .map((item) => `${item.name} (${item.level})`)
                  .join(" · ")}
              </p>
              <p className="mt-2 text-sm leading-6 text-ivory/80">
                {research.computers.join(" · ")}
              </p>
              <p className="mt-4 text-sm text-ivory/70">BMDC {doctor.bmdc}</p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
