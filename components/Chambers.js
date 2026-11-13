import Image from "next/image";
import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { chambers, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Chambers() {
  const popular = chambers[0];
  const peacy = chambers[1];

  return (
    <section id="chambers" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Private practice</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Friday in Gazipur, and a Dhaka chamber in Mirpur-1.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="h-full rounded-[1.75rem] bg-foam p-6 ring-1 ring-line sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Chamber
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                {popular.name}
              </h3>
              <p lang="bn" className="mt-1 font-bengali text-base text-muted">
                {popular.nameBn}
              </p>
              <p className="mt-2 text-sm font-medium text-ink">
                {popular.room} · {popular.area}
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6 text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>
                  {popular.address}
                  <span lang="bn" className="mt-1 block font-bengali">
                    {popular.addressBn}
                  </span>
                </span>
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <Clock className="size-4 text-brand" aria-hidden />
                {popular.hours}
              </p>
              <p lang="bn" className="mt-1 pl-6 font-bengali text-sm text-muted">
                রোগী দেখার সময়: {popular.hoursBn}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={popular.hotlineHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep"
                >
                  <Phone className="size-4" aria-hidden />
                  {popular.hotlineLabel}: {popular.hotline}
                </a>
                <a
                  href={`mailto:${popular.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-line"
                >
                  <Mail className="size-4 text-brand" aria-hidden />
                  {popular.email}
                </a>
                <a
                  href={popular.web}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-line"
                >
                  <Globe className="size-4 text-brand" aria-hidden />
                  populardiagnostic.com
                </a>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <article className="rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Dhaka chamber
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  {peacy.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-ink">
                  {peacy.room} · {peacy.area}
                </p>
                <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6 text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {peacy.address}
                </p>
                <a
                  href={peacy.hotlineHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  <Phone className="size-4" aria-hidden />
                  {peacy.hotline}
                </a>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="overflow-hidden rounded-[1.75rem] bg-foam ring-1 ring-line">
                <Image
                  src="/images/visiting-card.jpg"
                  alt="Visiting card of Dr. Monjur Shoyeb Khan listing Popular Diagnostic Centre, Gazipur, Friday 5pm to 8pm, hotline 09666787816."
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 rounded-[1.5rem] bg-foam px-6 py-5 text-sm leading-6 text-muted ring-1 ring-line">
            <span className="font-semibold text-ink">Current address: </span>
            {doctor.address}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
