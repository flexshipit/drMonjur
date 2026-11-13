import Image from "next/image";
import { photos } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 border-b border-line bg-ivory py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-forest">
            Congresses, awareness programs and professional meetings
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Photographs from MOSB 2025, Sylhet Cancer Congress 2023, a community
            awareness program, and professional gatherings in Dhaka.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[minmax(16rem,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.03} className={photo.className}>
              <figure className="group relative flex h-full min-h-[16rem] overflow-hidden bg-forest">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className={`object-cover ${photo.object}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-forest/85 p-4 text-ivory">
                  <p className="font-display text-base font-semibold">{photo.title}</p>
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
