import Image from "next/image";
import { BookOpen, Calendar, Globe, Award, Shield } from "lucide-react";
import { doctor, experience, research } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line/80 bg-sand/60 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Career &amp; Service</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-normal tracking-tight text-forest sm:text-4xl">
            10+ years in 35th BCS (Health) cadre &amp; clinical training
          </h2>
          <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-muted">
            From premier medical colleges to specialized tertiary cancer care institutions in Dhaka,
            balancing patient treatment, academic research, and public health awareness.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <figure className="relative overflow-hidden rounded-3xl border border-line/80 shadow-md">
            <div className="relative aspect-[16/9] w-full sm:aspect-[2.4/1]">
              <Image
                src="/images/awareness.jpg"
                alt="Dr. Monjur Shoyeb Khan speaking at a cancer awareness program"
                fill
                sizes="(min-width: 1024px) 1240px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/20 to-transparent" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-forest/80 p-5 text-ivory shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mint">
                Public Education &amp; Community Care
              </span>
              <p className="font-display mt-2 text-lg font-medium sm:text-xl">
                Cancer Awareness Program — Early Detection, Prevention and Compassionate Care
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-line/80 bg-white p-2 shadow-xs sm:p-4">
          <ol className="divide-y divide-line/70">
            {experience.map((item, index) => (
              <Reveal key={item.place + item.when} delay={index * 0.04}>
                <li className="grid gap-3 rounded-2xl p-5 transition-colors hover:bg-sand/60 sm:grid-cols-[10rem_1fr] sm:p-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/15 bg-mint/70 px-3.5 py-1 text-xs font-semibold text-teal shadow-2xs">
                      <Calendar className="size-3" aria-hidden />
                      {item.when}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-forest">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">{item.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-white p-7 shadow-xs hover:border-teal/30 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
                  <BookOpen className="size-3.5" aria-hidden />
                  <span>Research &amp; Thesis</span>
                </div>
                <p className="font-display mt-3 text-lg font-medium text-forest leading-snug">
                  {research.title}
                </p>
              </div>
              <p className="mt-4 text-xs font-medium text-muted">
                Focused on improving patient responses and tolerance in GI oncology.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.04}>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-white p-7 shadow-xs hover:border-teal/30 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
                  <Award className="size-3.5" aria-hidden />
                  <span>International Membership</span>
                </div>
                <p className="font-display mt-3 text-lg font-medium text-forest leading-snug">
                  {research.membership}
                </p>
              </div>
              <p className="mt-4 text-xs font-medium text-muted">
                Adherent to international standards in clinical practice and continuous education.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="relative overflow-hidden rounded-3xl border border-teal/20 bg-forest p-7 text-ivory shadow-md flex flex-col justify-between">
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-teal/20 blur-xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mint">
                  <Globe className="size-3.5" aria-hidden />
                  <span>Languages &amp; Registrations</span>
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed">
                  {research.languages
                    .map((item) => `${item.name} (${item.level})`)
                    .join(" · ")}
                </p>
                <p className="mt-2 text-xs text-ivory/75">
                  BMDC Registration: <strong className="font-semibold text-white">{doctor.bmdc}</strong>
                </p>
              </div>
              <div className="relative mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-mint">
                <Shield className="size-3.5" />
                <span>Govt. 35th BCS (Health)</span>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
