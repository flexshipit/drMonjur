import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { degrees, doctor, objective, summary } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-sand py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <figure className="mb-10 overflow-hidden rounded-[1.75rem] bg-ivory ring-1 ring-forest/10">
              <Image
                src="/images/congress.jpg"
                alt="Dr. Monjur Shoyeb Khan at Sylhet Cancer Congress 2023."
                width={1200}
                height={700}
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[16/9] w-full object-cover object-[center_62%]"
              />
              <figcaption className="px-5 py-3 text-sm text-muted">
                Sylhet Cancer Congress 2023 · SCSG, Grand Sylhet Hotel and Resort
              </figcaption>
            </figure>
            <Eyebrow>About the oncologist</Eyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.03em] text-forest sm:text-4xl">
              A decade of BCS (Health) service, now in clinical oncology.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {doctor.name} — {doctor.nameBn} — is a cancer specialist at the{" "}
              {doctor.hospital}, {doctor.city}. He holds an MD in Clinical
              Oncology from Bangladesh Medical University, Shahbag (January 2025),
              an MBBS from Chittagong Medical College (January 2014), FCPS
              (Medicine, FP), and MACP (USA).
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {objective}
            </p>

            <ul className="mt-7 space-y-3">
              {summary.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
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
                  className="rounded-3xl border border-line bg-ivory px-5 py-5"
                >
                  <dt className="font-display text-xl tracking-tight text-forest">
                    {item.short}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 rounded-3xl bg-forest p-6 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
                Current practice
              </p>
              <h3 className="font-display mt-3 text-xl tracking-tight">
                {doctor.hospital}
              </h3>
              <p className="mt-2 font-bengali text-sm text-ivory/75">
                {doctor.hospitalBn}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-copper" aria-hidden />
                {doctor.city}
              </p>
              <p className="mt-3 text-sm text-ivory/70">
                {doctor.title} · Government service, {doctor.bcs}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
