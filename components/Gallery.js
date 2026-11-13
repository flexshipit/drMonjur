import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

const photos = [
  {
    src: "/images/chemo-care.jpg",
    alt: "Chemotherapy infusion room with a treatment chair and IV stand.",
    title: "Chemotherapy",
    caption: "Systemic treatment in a calm infusion setting.",
    className: "lg:col-span-2",
  },
  {
    src: "/images/radiotherapy.jpg",
    alt: "Linear accelerator in a radiotherapy treatment room.",
    title: "Radiotherapy",
    caption: "Radiation as part of a complete oncology plan.",
  },
  {
    src: "/images/supportive-care.jpg",
    alt: "A clinician holding a patient’s hands during a supportive-care visit.",
    title: "Supportive care",
    caption: "Pain and symptom control alongside treatment.",
  },
  {
    src: "/images/tumor-board.jpg",
    alt: "Oncology team reviewing scans in a multidisciplinary tumour board.",
    title: "Tumour board",
    caption: "Staging and a shared treatment plan.",
    className: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-foam py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Inside the work</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            From infusion and radiation to the tumour board.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Visuals of the care he names in practice: chemotherapy, radiotherapy,
            multidisciplinary discussion, and supportive care.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.05} className={photo.className}>
              <figure className="group h-full overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5">
                <span className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </span>
                <figcaption className="px-5 py-4">
                  <p className="text-sm font-semibold text-ink">{photo.title}</p>
                  <p className="mt-1 text-sm text-muted">{photo.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
