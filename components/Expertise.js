import { expertise } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { Stethoscope } from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-b border-line/80 bg-sand/60 py-16 sm:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Clinical Services</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display max-w-xl text-3xl font-normal tracking-tight text-forest sm:text-4xl">
                Comprehensive oncology care, precision therapy &amp; palliative support
              </h2>
              <p lang="bn" className="mt-2 font-bengali text-base text-muted">
                ক্যান্সার চিকিৎসা, নির্ভুল রোগ নির্ণয় ও মানবিক সেবা
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Systemic chemotherapy, targeted regimens, immunotherapy, precision radiotherapy
              planning, staging, and dedicated supportive palliative care tailored to each patient.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-9">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-full border border-teal/15 bg-mint/70 text-xs font-semibold text-teal shadow-2xs">
                      {item.number}
                    </span>
                    <Stethoscope className="size-4 text-teal/40 group-hover:text-teal transition-colors" />
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-normal text-forest group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p lang="bn" className="mt-1 font-bengali text-sm text-muted">
                    {item.titleBn}
                  </p>
                  <p className="mt-3.5 text-sm leading-relaxed text-muted sm:text-base">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-line/70 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-light">
                    Key Focus Areas
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-line/70 bg-sand/80 px-3 py-1 text-xs font-medium text-forest"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
