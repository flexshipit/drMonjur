import Image from "next/image";
import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { chambers, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Chambers() {
  const [popular, peacy] = chambers;

  return (
    <section id="chambers" className="scroll-mt-24 border-b border-line bg-ivory py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow>Chambers</Eyebrow>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-forest">
            Friday at Popular Diagnostic, evenings at New Peacy Lab Ltd.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            The Mirpur chamber is{" "}
            <span className="font-semibold text-forest">নিউ পিসি ল্যাব লিঃ</span>{" "}
            — New Peacy Lab Ltd., Diagnostic & Consultation Complex.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col border border-line bg-ivory p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                {popular.area}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold text-forest">
                {popular.name}
              </h3>
              <p lang="bn" className="mt-1 font-bengali text-base text-muted">
                {popular.nameBn}
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6 text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <span>
                  {popular.address}
                  <span lang="bn" className="mt-1 block font-bengali">
                    {popular.addressBn}
                  </span>
                </span>
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                <Clock className="size-4 text-teal" aria-hidden />
                {popular.hours}
              </p>
              <p lang="bn" className="mt-1 pl-6 font-bengali text-sm text-muted">
                রোগী দেখার সময়: {popular.hoursBn}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {popular.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={phone.href}
                    className="inline-flex items-center gap-2 bg-forest px-4 py-2.5 text-sm font-semibold text-ivory hover:bg-teal"
                  >
                    <Phone className="size-4" aria-hidden />
                    {phone.label}: {phone.value}
                  </a>
                ))}
                <a
                  href={`mailto:${popular.email}`}
                  className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-forest"
                >
                  <Mail className="size-4 text-teal" aria-hidden />
                  {popular.email}
                </a>
                <a
                  href={popular.web}
                  className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-forest"
                >
                  <Globe className="size-4 text-teal" aria-hidden />
                  populardiagnostic.com
                </a>
              </div>
              <figure className="mt-6 overflow-hidden border border-line bg-white">
                <Image
                  src={popular.photo}
                  alt={popular.photoAlt}
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                />
              </figure>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="flex h-full flex-col bg-forest p-6 text-ivory sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mint">
                {peacy.area}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold">
                {peacy.name}
              </h3>
              <p lang="bn" className="mt-1 font-bengali text-base text-ivory/80">
                {peacy.nameBn}
              </p>
              <p className="mt-2 text-sm text-ivory/75">
                {peacy.subtitle}
                <span lang="bn" className="mt-1 block font-bengali">
                  {peacy.subtitleBn}
                </span>
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6 text-ivory/80">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                <span>
                  {peacy.address}
                  <span lang="bn" className="mt-1 block font-bengali">
                    {peacy.addressBn}
                  </span>
                  <span className="mt-1 block">{peacy.landmark}</span>
                </span>
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <Clock className="size-4 text-mint" aria-hidden />
                {peacy.hours}
              </p>
              <p lang="bn" className="mt-1 pl-6 font-bengali text-sm text-ivory/70">
                সময়: {peacy.hoursBn}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {peacy.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={phone.href}
                    className="inline-flex items-center gap-2 bg-ivory px-4 py-2.5 text-sm font-semibold text-forest hover:bg-mint"
                  >
                    <Phone className="size-4" aria-hidden />
                    {phone.value}
                  </a>
                ))}
                <a
                  href={`mailto:${peacy.email}`}
                  className="inline-flex items-center gap-2 border border-ivory/25 px-4 py-2.5 text-sm font-medium text-ivory"
                >
                  <Mail className="size-4 text-mint" aria-hidden />
                  {peacy.email}
                </a>
              </div>
              <figure className="relative mt-6 h-48 overflow-hidden">
                <Image
                  src={peacy.photo}
                  alt={peacy.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </figure>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <p className="mt-6 border border-line bg-sand px-5 py-4 text-sm leading-6 text-muted">
            <span className="font-semibold text-forest">Current address: </span>
            {doctor.address}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
