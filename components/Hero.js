import Image from "next/image";
import { ArrowRight, Building2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { degreeChips, doctor } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/80 bg-gradient-to-b from-mint-subtle/80 via-sand to-ivory py-12 sm:py-16 lg:py-20">
      {/* Subtle organic ambient blur accents */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full bg-teal/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 size-72 rounded-full bg-forest/5 blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-forest shadow-2xs backdrop-blur-xs">
            <ShieldCheck className="size-3.5 text-teal" aria-hidden />
            <span>{doctor.bcs} · {doctor.years} years service · BMDC {doctor.bmdc}</span>
          </div>

          <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.15] tracking-tight text-forest">
            {doctor.name}
          </h1>

          <p className="mt-3 text-lg font-semibold text-ink sm:text-xl">
            {doctor.title}
          </p>

          <p lang="bn" className="mt-2 font-bengali text-base text-muted leading-relaxed">
            {doctor.nameBn} · {doctor.titleBn} · {doctor.specialtyBn}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Clinical oncologist practicing at the {doctor.hospital}, {doctor.city}.
            Dedicated to personalized, evidence-based care across chemotherapy, radiotherapy,
            immunotherapy, targeted therapy and palliative support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-md shadow-forest/15 transition-all hover:bg-teal hover:shadow-lg"
            >
              <span>Plan a consultation</span>
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={doctor.mobileHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-forest shadow-2xs transition-all hover:border-teal/50 hover:bg-mint/30"
            >
              <Phone className="size-4 text-teal" aria-hidden />
              <span>{doctor.mobile}</span>
            </a>
          </div>

          <div className="mt-4">
            <a
              href={doctor.emailHref}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-forest transition-colors"
            >
              <Mail className="size-4 text-teal" aria-hidden />
              <span>{doctor.email}</span>
            </a>
          </div>

          <div className="mt-8 border-t border-line/70 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Degrees &amp; Qualifications
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {degreeChips.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line/80 bg-white px-3.5 py-1.5 text-xs font-medium text-forest shadow-2xs transition-colors hover:border-teal/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative w-full">
          <div className="relative rounded-3xl border border-line/80 bg-white p-3.5 shadow-xl shadow-forest/5 sm:p-4">
            <div className="relative aspect-[4/5] max-h-[580px] min-h-[380px] w-full overflow-hidden rounded-2xl bg-mint/20">
              <Image
                src="/images/portrait.jpg"
                alt="Dr. Monjur Shoyeb Khan at MOSB 2025"
                fill
                priority
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover object-[72%_18%]"
              />
              <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-semibold text-forest shadow-md backdrop-blur-md">
                <span className="size-2 rounded-full bg-teal animate-pulse" />
                <span>Available for consultation</span>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-line/60 bg-sand/80 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
                <Building2 className="size-3.5" aria-hidden />
                <span>Present Posting</span>
              </div>
              <p className="font-display mt-1.5 text-base font-semibold text-forest">
                {doctor.hospital}
              </p>
              <p className="mt-1 font-bengali text-sm text-muted">{doctor.hospitalBn}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                <MapPin className="size-3.5 text-teal" aria-hidden />
                <span>{doctor.city}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
