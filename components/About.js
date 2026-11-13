import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { degrees, doctor, objective, summary } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-ivory py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="mb-8 overflow-hidden border border-line">
              <Image
                src="/images/congress.jpg"
                alt="Dr. Monjur Shoyeb Khan at Sylhet Cancer Congress 2023."
                width={1400}
                height={800}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="aspect-[16/9] w-full object-cover object-[center_62%]"
              />
              <figcaption className="px-4 py-3 text-sm text-muted">
                Sylhet Cancer Congress 2023 · SCSG, Grand Sylhet Hotel and Resort
              </figcaption>
            </figure>
            <Eyebrow>About</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-semibold text-forest">
              BCS (Health) service and clinical oncology
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {doctor.name} — {doctor.nameBn} — is a cancer specialist at the{" "}
              {doctor.hospital}, {doctor.city}. He holds an MD in Clinical
              Oncology from Bangladesh Medical University, Shahbag (January 2025),
              an MBBS from Chittagong Medical College (January 2014), FCPS
              (Medicine, FP), and MACP (USA).
            </p>
            <p className="mt-4 text-base leading-7 text-muted">{objective}</p>

            <ul className="mt-6 space-y-3">
              {summary.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="grid gap-px bg-line sm:grid-cols-2">
              {degrees.map((item) => (
                <div key={item.short} className="bg-ivory p-5">
                  <dt className="font-display text-lg font-semibold text-forest">
                    {item.short}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-px bg-forest p-6 text-ivory">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mint">
                Current practice
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold">
                {doctor.hospital}
              </h3>
              <p className="mt-2 font-bengali text-sm text-ivory/75">
                {doctor.hospitalBn}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-mint" aria-hidden />
                {doctor.city}
              </p>
              <p className="mt-3 text-sm text-ivory/70">
                {doctor.title} · {doctor.bcs}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
