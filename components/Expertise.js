import Image from "next/image";
import {
  ClipboardList,
  Droplets,
  HeartPulse,
  ScanLine,
  Shield,
  Target,
  UserRound,
} from "lucide-react";
import { expertise } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

const icons = {
  drip: Droplets,
  scan: ScanLine,
  shield: Shield,
  target: Target,
  user: UserRound,
  clipboard: ClipboardList,
  heart: HeartPulse,
};

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>যে সমস্ত রোগের চিকিৎসা করা হয়</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Chemotherapy, radiation, immune and targeted care.
            </h2>
            <p className="max-w-md text-base leading-7 text-muted">
              These are the services named on his Popular Diagnostic Centre
              flyer: from staging and a written plan through pain and symptom
              control.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              src: "/images/chemo-care.jpg",
              alt: "Chemotherapy infusion chair and IV stand.",
              label: "Infusion",
            },
            {
              src: "/images/radiotherapy.jpg",
              alt: "Radiotherapy linear accelerator.",
              label: "Radiation",
            },
            {
              src: "/images/supportive-care.jpg",
              alt: "Supportive care, clinician holding a patient’s hands.",
              label: "Support",
            },
          ].map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.04}>
              <figure className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-black/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink">
                  {photo.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-[1.5rem] bg-foam p-6 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-28px_rgba(18,32,51,0.45)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm ring-1 ring-line">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p lang="bn" className="mt-1 font-bengali text-sm text-brand">
                    {item.titleBn}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
