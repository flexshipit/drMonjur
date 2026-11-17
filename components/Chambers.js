import Image from "next/image";
import { Clock, Globe, Mail, MapPin, Phone, CalendarCheck2 } from "lucide-react";
import { chambers, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Chambers() {
  const [popular, peacy] = chambers;

  return (
    <section id="chambers" className="scroll-mt-24 border-b border-line/80 bg-ivory py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Chamber Locations &amp; Timings</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-normal tracking-tight text-forest sm:text-4xl">
            Friday at Popular Diagnostic, Gazipur · Evenings at New Peacy Lab Ltd., Mirpur
          </h2>
          <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-muted">
            Patients can book regular consultations at two dedicated private chambers in Dhaka and Gazipur.
            Please call the respective chamber hotline in advance to secure serial numbers.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Chamber 1: Popular Diagnostic Centre Ltd. */}
          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-teal/40 hover:shadow-xl sm:p-9">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-mint/70 px-3.5 py-1 text-xs font-semibold text-teal shadow-2xs">
                    <CalendarCheck2 className="size-3.5" aria-hidden />
                    {popular.area}
                  </span>
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-muted">
                    Every Friday
                  </span>
                </div>

                <h3 className="font-display mt-4 text-2xl font-normal text-forest sm:text-3xl">
                  {popular.name}
                </h3>
                <p lang="bn" className="mt-1 font-bengali text-base font-medium text-muted">
                  {popular.nameBn}
                </p>

                <div className="mt-5 rounded-2xl border border-teal/15 bg-mint-subtle/80 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-forest">
                    <Clock className="size-4 text-teal" aria-hidden />
                    <span>{popular.hours}</span>
                  </div>
                  <p lang="bn" className="mt-1 font-bengali text-xs text-muted pl-6">
                    রোগী দেখার সময়: {popular.hoursBn}
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <MapPin className="mt-1 size-4 shrink-0 text-teal" aria-hidden />
                  <div>
                    <p className="font-medium text-ink">{popular.address}</p>
                    <p lang="bn" className="mt-1 font-bengali text-xs text-muted">
                      {popular.addressBn}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {popular.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs sm:text-sm font-semibold text-ivory shadow-xs transition-all hover:bg-teal hover:shadow"
                    >
                      <Phone className="size-3.5" aria-hidden />
                      <span>{phone.label}: {phone.value}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${popular.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-forest transition-colors hover:border-teal/40 hover:bg-mint/30"
                  >
                    <Mail className="size-3.5 text-teal" aria-hidden />
                    <span>{popular.email}</span>
                  </a>
                  <a
                    href={popular.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-forest transition-colors hover:border-teal/40 hover:bg-mint/30"
                  >
                    <Globe className="size-3.5 text-teal" aria-hidden />
                    <span>Website</span>
                  </a>
                </div>
              </div>

              <figure className="mt-7 overflow-hidden rounded-2xl border border-line/70 bg-sand/40">
                <Image
                  src={popular.photo}
                  alt={popular.photoAlt}
                  width={1200}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </figure>
            </article>
          </Reveal>

          {/* Chamber 2: New Peacy Lab Ltd. */}
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-teal/40 hover:shadow-xl sm:p-9">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-mint/70 px-3.5 py-1 text-xs font-semibold text-teal shadow-2xs">
                    <CalendarCheck2 className="size-3.5" aria-hidden />
                    {peacy.area}
                  </span>
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-muted">
                    Daily Evenings
                  </span>
                </div>

                <h3 className="font-display mt-4 text-2xl font-normal text-forest sm:text-3xl">
                  {peacy.name}
                </h3>
                <p lang="bn" className="mt-1 font-bengali text-base font-medium text-muted">
                  {peacy.nameBn}
                </p>
                <p className="mt-1 text-xs font-medium text-teal">
                  {peacy.subtitle} · <span lang="bn" className="font-bengali">{peacy.subtitleBn}</span>
                </p>

                <div className="mt-5 rounded-2xl border border-teal/15 bg-mint-subtle/80 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-forest">
                    <Clock className="size-4 text-teal" aria-hidden />
                    <span>{peacy.hours}</span>
                  </div>
                  <p lang="bn" className="mt-1 font-bengali text-xs text-muted pl-6">
                    সময়: {peacy.hoursBn}
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <MapPin className="mt-1 size-4 shrink-0 text-teal" aria-hidden />
                  <div>
                    <p className="font-medium text-ink">{peacy.address}</p>
                    <p lang="bn" className="mt-1 font-bengali text-xs text-muted">
                      {peacy.addressBn}
                    </p>
                    <p className="mt-1.5 text-xs text-forest/75 font-medium">
                      Landmark: {peacy.landmark}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {peacy.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs sm:text-sm font-semibold text-ivory shadow-xs transition-all hover:bg-teal hover:shadow"
                    >
                      <Phone className="size-3.5" aria-hidden />
                      <span>{phone.value}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${peacy.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-4 py-2.5 text-xs sm:text-sm font-medium text-forest transition-colors hover:border-teal/40 hover:bg-mint/30"
                  >
                    <Mail className="size-3.5 text-teal" aria-hidden />
                    <span>{peacy.email}</span>
                  </a>
                </div>
              </div>

              <figure className="relative mt-7 h-52 overflow-hidden rounded-2xl border border-line/70 bg-sand/40">
                <Image
                  src={peacy.photo}
                  alt={peacy.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </figure>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-2xl border border-line/80 bg-sand/80 px-6 py-4 shadow-2xs text-sm leading-relaxed text-muted">
            <span className="font-semibold text-forest">Official Residence / Contact Address: </span>
            <span>{doctor.address}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
