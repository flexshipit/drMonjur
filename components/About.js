import Image from "next/image";
import { Check, MapPin, Sparkles } from "lucide-react";
import { degrees, doctor, objective, summary } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line/80 bg-ivory py-16 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="mb-8 overflow-hidden rounded-3xl border border-line/80 shadow-md">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/congress.jpg"
                  alt="Dr. Monjur Shoyeb Khan at Sylhet Cancer Congress 2023"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-[center_62%]"
                />
              </div>
              <figcaption className="bg-sand/80 px-5 py-3 text-xs font-medium text-muted">
                Sylhet Cancer Congress 2023 · SCSG, Grand Sylhet Hotel and Resort
              </figcaption>
            </figure>

            <Eyebrow>Background &amp; Philosophy</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-normal tracking-tight text-forest sm:text-4xl">
              Civil service dedication to modern clinical oncology
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {doctor.name} — <span lang="bn" className="font-bengali text-forest font-medium">{doctor.nameBn}</span> — is
              a cancer specialist at the {doctor.hospital}, {doctor.city}. He holds an MD in
              Clinical Oncology from Bangladesh Medical University, Shahbag (January 2025), an MBBS
              from Chittagong Medical College (January 2014), FCPS (Medicine, FP), and MACP (USA).
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {objective}
            </p>

            <ul className="mt-7 space-y-3.5">
              {summary.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink sm:text-base">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mint text-teal shadow-2xs">
                    <Check className="size-3.5 stroke-[2.5]" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
                Academic Degrees &amp; Fellowships
              </p>
              <dl className="grid gap-4 sm:grid-cols-2">
                {degrees.map((item) => (
                  <div
                    key={item.short}
                    className="group rounded-2xl border border-line/80 bg-white p-5 shadow-xs transition-all hover:border-teal/30 hover:shadow-md"
                  >
                    <dt className="font-display text-xl font-medium text-forest group-hover:text-teal transition-colors">
                      {item.short}
                    </dt>
                    <dd className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-teal/20 bg-forest p-7 text-ivory shadow-lg shadow-forest/10 sm:p-8">
              <div
                className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-teal/30 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mint">
                  <Sparkles className="size-3" aria-hidden />
                  <span>Primary Government Posting</span>
                </div>
                <h3 className="font-display mt-4 text-2xl font-normal leading-snug">
                  {doctor.hospital}
                </h3>
                <p lang="bn" className="mt-2 font-bengali text-sm text-ivory/80">
                  {doctor.hospitalBn}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-ivory/80">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-mint" aria-hidden />
                    {doctor.city}
                  </span>
                  <span>·</span>
                  <span>{doctor.title}</span>
                  <span>·</span>
                  <span>{doctor.bcs}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
