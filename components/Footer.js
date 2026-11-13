import { doctor, nav } from "@/lib/profile";
import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-[#072823] py-14 text-ivory">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">{doctor.name}</p>
          <p className="mt-1 font-bengali text-sm text-ivory/70">{doctor.nameBn}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-ivory/75">
            MBBS, BCS (Health), MD (Clinical Oncology), FCPS (Medicine, FP),
            MACP (USA). {doctor.title}. BMDC {doctor.bmdc}.
          </p>
          <p className="mt-3 text-sm text-ivory/75">
            {doctor.hospital}, {doctor.city}.
          </p>
          <p className="mt-3 text-sm text-ivory/75">
            Chambers: Popular Diagnostic Centre Ltd., Gazipur · New Peacy Lab
            Ltd., Mirpur-1.
          </p>
          <p className="mt-3 text-sm text-ivory/75">
            {doctor.mobile} · {doctor.email}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ivory/80 hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10 border-t border-ivory/10 pt-6">
        <p className="text-xs text-ivory/50">
          © 2026 {doctor.shortName}. BMDC {doctor.bmdc}.
        </p>
      </Container>
    </footer>
  );
}
