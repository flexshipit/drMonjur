import { stats } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Stats() {
  return (
    <section className="border-b border-line/80 bg-sand/60 py-8 sm:py-10">
      <Container>
        <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <li className="group rounded-2xl border border-line/80 bg-white p-5 shadow-xs transition-all hover:border-teal/30 hover:shadow-md sm:p-6">
                <div className="h-1 w-8 rounded-full bg-teal/30 transition-all group-hover:w-12 group-hover:bg-teal" />
                <p className="font-display mt-3 text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-xs font-medium text-muted sm:text-sm">
                  {item.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
