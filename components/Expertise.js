import { expertise } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-b border-line bg-sand py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow>আমাদের সেবাসমূহ</Eyebrow>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-display max-w-xl text-3xl font-semibold text-forest">
              Cancer treatment, diagnosis and palliative care
            </h2>
            <p className="max-w-lg text-base leading-7 text-muted">
              Chemotherapy, radiotherapy, immunotherapy, and targeted treatment,
              then diagnosis, staging, and palliative support for patients and
              families.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line lg:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <article className="h-full bg-ivory p-7">
                <p className="text-xs font-semibold text-teal">{item.number}</p>
                <h3 className="font-display mt-3 text-xl font-semibold text-forest">
                  {item.title}
                </h3>
                <p lang="bn" className="mt-1 font-bengali text-sm text-muted">
                  {item.titleBn}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm text-forest">
                      <span className="mr-2 text-teal">–</span>
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
