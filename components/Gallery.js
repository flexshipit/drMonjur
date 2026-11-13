import Image from "next/image";
import { photos } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-sand py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>From his own events</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-3xl tracking-[-0.03em] text-forest sm:text-4xl">
            Congresses, awareness work, and the people around the practice.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Photographs from his meetings and public programs: MOSB 2025,
            Sylhet Cancer Congress 2023, a community awareness stage, and
            professional gatherings in Dhaka.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(14rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.04} className={photo.className}>
              <figure className="group relative flex h-full min-h-[16rem] overflow-hidden rounded-[1.75rem] bg-forest">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className={`object-cover transition duration-700 group-hover:scale-[1.04] ${photo.object}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent p-5 text-ivory">
                  <p className="font-display text-lg">{photo.title}</p>
                  <p className="mt-1 text-sm text-ivory/80">{photo.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
