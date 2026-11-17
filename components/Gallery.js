import Image from "next/image";
import { photos } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 border-b border-line/80 bg-ivory py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Engagements &amp; Activities</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-normal tracking-tight text-forest sm:text-4xl">
            Medical congresses, public education &amp; academic gatherings
          </h2>
          <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-muted">
            Highlights from the Bangladesh Medical Oncology Society, Sylhet Cancer Congress,
            cancer awareness workshops, and academic seminars in Dhaka.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(17rem,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.03} className={photo.className}>
              <figure className="group relative flex h-full min-h-[17rem] overflow-hidden rounded-3xl border border-line/80 bg-forest shadow-xs transition-all duration-300 hover:shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className={`object-cover ${photo.object} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent pointer-events-none" />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-forest/80 p-4 text-ivory shadow-lg backdrop-blur-md">
                  <p className="font-display text-base font-semibold leading-snug">{photo.title}</p>
                  <p className="mt-1 text-xs text-ivory/80 leading-relaxed">{photo.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
