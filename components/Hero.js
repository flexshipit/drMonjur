import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { degreeChips, doctor } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="border-b border-line bg-ivory">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-16">
        <Reveal>
          <p className="text-sm font-medium text-teal">
            {doctor.bcs} · {doctor.years} years in service · BMDC {doctor.bmdc}
          </p>

          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            {doctor.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-ink">
            {doctor.title}
          </p>

          <p lang="bn" className="mt-3 max-w-2xl font-bengali text-base leading-relaxed text-muted">
            {doctor.nameBn} · {doctor.titleBn} · {doctor.specialtyBn}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            {doctor.name} practices at the {doctor.hospital}, {doctor.city}.
            His work covers diagnosis, staging, chemotherapy, radiotherapy,
            immunotherapy, targeted therapy and palliative care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 bg-forest px-5 py-3 text-sm font-semibold text-ivory hover:bg-teal"
            >
              Plan a visit
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={doctor.mobileHref}
              className="inline-flex items-center justify-center gap-2 border border-line bg-ivory px-5 py-3 text-sm font-semibold text-forest hover:border-teal/50"
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
                className="border border-line bg-sand px-3 py-1.5 text-xs font-medium text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="relative w-full">
          <div className="relative overflow-hidden border border-line bg-sand">
            <div className="relative aspect-[4/5] max-h-[640px] min-h-[420px] w-full">
              <Image
                src="/images/portrait.jpg"
                alt="Dr. Monjur Shoyeb Khan at MOSB 2025, standing beside a scientific poster."
                fill
                priority
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-[72%_18%]"
              />
            </div>
            <div className="border-t border-line bg-ivory px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                Present posting
              </p>
              <p className="font-display mt-1 text-base font-semibold text-forest">
                {doctor.hospital}
              </p>
              <p className="mt-1 font-bengali text-sm text-muted">{doctor.hospitalBn}</p>
              <p className="mt-1 text-sm text-muted">{doctor.city}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
