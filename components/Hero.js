import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { degreeChips, doctor } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-sand">
      <div className="blob pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-3 rounded-full border border-line bg-ivory/80 px-3 py-1.5 text-sm shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-orchid" aria-hidden />
            <span className="font-medium text-forest">{doctor.bcs}</span>
            <span className="text-muted">· {doctor.years} years in service</span>
          </p>

          <h1 className="font-display mt-7 max-w-xl text-5xl leading-[1.08] tracking-[-0.03em] text-forest sm:text-6xl">
            Cancer care with a named plan,
            <span className="mt-1 block italic text-teal">and a familiar face.</span>
          </h1>

          <p lang="bn" className="mt-5 max-w-lg font-bengali text-lg leading-relaxed text-muted">
            {doctor.nameBn} · {doctor.titleBn} · {doctor.specialtyBn}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {doctor.name} is a {doctor.title.toLowerCase()} at the {doctor.hospital},{" "}
            {doctor.city}. His work covers diagnosis, staging, chemotherapy,
            radiotherapy, immunotherapy, targeted therapy and palliative care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-[0_18px_36px_-20px_rgba(11,61,54,0.9)] transition-colors hover:bg-teal"
            >
              Plan a visit
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={doctor.mobileHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ivory px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:border-teal/40"
            >
              <Phone className="size-4 text-teal" aria-hidden />
              {doctor.mobile}
            </a>
          </div>

          <a
            href={doctor.emailHref}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-forest"
          >
            <Mail className="size-4 text-teal" aria-hidden />
            {doctor.email}
          </a>

          <ul className="mt-8 flex flex-wrap gap-2">
            {degreeChips.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-ivory px-3 py-1.5 text-xs font-semibold tracking-wide text-forest"
              >
                {item}
              </li>
            ))}
            <li className="rounded-full bg-orchid px-3 py-1.5 text-xs font-semibold tracking-wide text-ivory">
              BMDC {doctor.bmdc}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-mint shadow-[0_40px_80px_-48px_rgba(11,61,54,0.7)] ring-1 ring-forest/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/portrait.jpg"
                  alt="Dr. Monjur Shoyeb Khan at MOSB 2025, standing beside a scientific poster."
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-[72%_18%]"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-2xl bg-forest/90 px-4 py-3 text-ivory backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mint">
                  BMDC registered
                </p>
                <p className="text-sm font-semibold">{doctor.bmdc}</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-2 hidden w-44 overflow-hidden rounded-3xl ring-4 ring-sand sm:block lg:-left-10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/congress.jpg"
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover object-[center_58%]"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 rounded-2xl border border-line bg-ivory px-4 py-3 shadow-lg sm:right-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
                Present posting
              </p>
              <p className="font-display mt-1 text-base leading-snug text-forest">
                {doctor.hospitalBn}
              </p>
              <p className="mt-1 text-sm text-muted">{doctor.city}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
