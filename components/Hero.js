import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { degreeChips, doctor } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(26,122,67,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-line">
            <span className="size-2 rounded-full bg-brand" aria-hidden />
            <span className="font-medium text-ink">{doctor.bcs}</span>
            <span className="text-muted">· {doctor.years} years in service</span>
          </p>

          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl">
            Cancer care with
            <span className="mt-1 block text-brand">a clear treatment plan.</span>
          </h1>

          <p
            lang="bn"
            className="mt-5 max-w-lg font-bengali text-lg leading-relaxed text-muted"
          >
            {doctor.nameBn} · {doctor.titleBn} · {doctor.specialtyBn}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {doctor.name} is a {doctor.title.toLowerCase()} at the{" "}
            {doctor.hospital}, {doctor.city}. His work covers diagnosis,
            staging, chemotherapy, radiotherapy, immunotherapy, targeted therapy
            and supportive care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(26,122,67,0.95)] transition-colors hover:bg-brand-deep"
            >
              Plan a visit
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={doctor.mobileHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:bg-foam"
            >
              <Phone className="size-4 text-brand" aria-hidden />
              {doctor.mobile}
            </a>
          </div>

          <a
            href={doctor.emailHref}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
          >
            <Mail className="size-4 text-brand" aria-hidden />
            {doctor.email}
          </a>

          <ul className="mt-8 flex flex-wrap gap-2">
            {degreeChips.map((item) => (
              <li
                key={item}
                className="rounded-full bg-foam px-3 py-1.5 text-xs font-semibold tracking-wide text-ink ring-1 ring-line"
              >
                {item}
              </li>
            ))}
            <li className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand">
              BMDC {doctor.bmdc}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-foam shadow-[0_30px_70px_-36px_rgba(13,68,38,0.65)] ring-1 ring-black/5">
            <Image
              src="/images/portrait.jpg"
              alt="Dr. Monjur Shoyeb Khan, clinical oncologist, in a white coat with a stethoscope."
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[center_12%]"
            />
            <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                BMDC registered
              </p>
              <p className="text-sm font-semibold text-ink">{doctor.bmdc}</p>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                Present posting
              </p>
              <p className="mt-1 font-semibold leading-snug text-ink">
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
