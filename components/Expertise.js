import { expertise } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

const tones = {
  teal: "bg-mint text-teal",
  orchid: "bg-[#efe8f8] text-orchid",
  forest: "bg-forest/10 text-forest",
  copper: "bg-[#f8ebe4] text-copper",
};

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>আমাদের সেবাসমূহ</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-display max-w-xl text-3xl tracking-[-0.03em] text-forest sm:text-4xl">
              Four lines of cancer care, from treatment to palliation.
            </h2>
            <p className="max-w-md text-base leading-7 text-muted">
              Chemotherapy, radiotherapy, immunotherapy, and targeted treatment,
              then diagnosis, staging, and palliative support for patients and
              families.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-[1.75rem] border border-line bg-sand/60 p-7 transition duration-300 hover:-translate-y-0.5 hover:border-teal/30">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex size-12 items-center justify-center rounded-2xl text-sm font-bold ${tones[item.tone]}`}
                  >
                    {item.number}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl tracking-tight text-forest">
                  {item.title}
                </h3>
                <p lang="bn" className="mt-1 font-bengali text-sm text-teal">
                  {item.titleBn}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm text-forest">
                      <span className="mr-2 text-copper">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
