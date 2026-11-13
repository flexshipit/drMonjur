import { stats } from "@/lib/profile";
import { Container } from "@/components/ui";

export default function Stats() {
  return (
    <section className="border-b border-line bg-forest">
      <Container>
        <ul className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((item) => (
            <li key={item.label} className="px-4 py-6 text-ivory sm:px-6">
              <p className="font-display text-2xl font-semibold">{item.value}</p>
              <p className="mt-1 text-sm text-ivory/70">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
