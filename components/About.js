import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { degrees, doctor, objective, summary } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-foam py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <figure className="mb-10 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-36px_rgba(18,32,51,0.45)] ring-1 ring-black/5">
              <Image
                src="/images/hospital-care.jpg"
                alt="Hospital corridor with a physician in a white coat, suggesting calm oncology practice."
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <Eyebrow>About the oncologist</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              A decade of BCS (Health) service, now in clinical oncology.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {doctor.name} — {doctor.nameBn} — is a cancer specialist at the{" "}
              {doctor.hospital}, {doctor.city}. He holds an MD in Clinical
              Oncology from Bangladesh Medical University (January 2025), an
              MBBS from Chittagong Medical College (January 2014), a CCD from
              BIRDEM, and MACP (USA).
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {objective}
            </p>

            <ul className="mt-7 space-y-3">
              {summary.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="grid gap-3 sm:grid-cols-2">
              {degrees.map((item) => (
                <div
                  key={item.short}
                  className="rounded-[1.5rem] bg-white px-5 py-5 ring-1 ring-line"
                >
                  <dt className="text-lg font-semibold tracking-tight text-ink">
                    {item.short}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 rounded-[1.5rem] bg-brand-deep p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Current practice
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {doctor.hospital}
              </h3>
              <p className="mt-2 font-bengali text-sm text-white/80">
                {doctor.hospitalBn}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-gold" aria-hidden />
                {doctor.city}
              </p>
              <p className="mt-3 text-sm text-white/75">
                {doctor.title} · Government service, {doctor.bcs}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
