import Image from "next/image";
import { doctor, experience, research } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line bg-sand py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-forest">
            35th BCS (Health), with postings across Dhaka
          </h2>
        </Reveal>

        <Reveal>
          <figure className="relative mt-8 overflow-hidden border border-line">
            <Image
              src="/images/awareness.jpg"
              alt="Dr. Monjur Shoyeb Khan speaking at a cancer awareness program."
              width={1800}
              height={900}
              sizes="(min-width: 1024px) 1500px, 100vw"
              className="aspect-[16/9] w-full object-cover sm:aspect-[2.4/1]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-forest/80 p-5 text-ivory sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mint">
                Public education
              </p>
              <p className="font-display mt-1 text-lg font-semibold">
                Cancer awareness program — prevent, detect, treat
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-8 divide-y divide-line border border-line bg-ivory">
          {experience.map((item, index) => (
            <Reveal key={item.place + item.when} delay={index * 0.04}>
              <li className="grid gap-3 p-6 sm:grid-cols-[9rem_1fr] sm:p-7">
                <p className="text-sm font-semibold text-teal">{item.when}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-6 grid gap-px bg-line md:grid-cols-3">
          <Reveal>
            <article className="h-full bg-ivory p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                Research
              </p>
              <p className="mt-3 text-base font-medium leading-6 text-forest">
                {research.title}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.04}>
            <article className="h-full bg-ivory p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                Membership
              </p>
              <p className="mt-3 text-base font-medium leading-6 text-forest">
                {research.membership}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full bg-forest p-6 text-ivory">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mint">
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
