import { stats } from "@/lib/profile";
import { Container } from "@/components/ui";

export default function Stats() {
  return (
    <section className="bg-sand pb-4 pt-16">
      <Container>
        <ul className="grid grid-cols-2 gap-3 rounded-[1.75rem] bg-forest p-4 text-ivory sm:grid-cols-4 sm:p-6">
          {stats.map((item) => (
            <li key={item.label} className="rounded-2xl bg-white/5 px-4 py-5">
              <p className="font-display text-3xl tracking-tight">{item.value}</p>
              <p className="mt-1 text-sm text-ivory/70">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
