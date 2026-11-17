import { doctor, nav } from "@/lib/profile";
import { Container } from "@/components/ui";
import { Mail, MapPin, Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-dark py-16 text-ivory">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-normal text-white">{doctor.name}</span>
          </div>
          <p lang="bn" className="mt-1 font-bengali text-sm text-ivory/80">
            {doctor.nameBn} · {doctor.titleBn}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-mint">
            <Shield className="size-3" />
            <span>BMDC Reg: {doctor.bmdc} · {doctor.bcs}</span>
          </div>

          <p className="mt-5 max-w-md text-xs sm:text-sm leading-relaxed text-ivory/75">
            MBBS, BCS (Health), MD (Clinical Oncology), FCPS (Medicine, FP), MACP (USA).
            Clinical oncologist practicing at the National Institute of Cancer Research &amp; Hospital, Mohakhali, Dhaka.
          </p>

          <div className="mt-6 space-y-2 text-xs sm:text-sm text-ivory/80">
            <p className="flex items-center gap-2">
              <MapPin className="size-3.5 text-mint" />
              <span>Chambers: Popular Diagnostic Centre (Gazipur) · New Peacy Lab Ltd. (Mirpur-1)</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-3.5 text-mint" />
              <a href={doctor.mobileHref} className="hover:text-mint transition-colors">
                Personal: {doctor.mobile}
              </a>
              <span>·</span>
              <a href="tel:09666787816" className="hover:text-mint transition-colors">
                Gazipur Serial: 09666787816
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-3.5 text-mint" />
              <a href={doctor.emailHref} className="hover:text-mint transition-colors">
                {doctor.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-mint">
              Navigation
            </p>
            <nav aria-label="Footer" className="mt-4 flex flex-wrap gap-2 md:justify-end">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-ivory/80 transition-all hover:bg-white/15 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 md:mt-0 md:text-right">
            <p className="text-xs text-ivory/50">
              © 2026 {doctor.shortName}. BMDC {doctor.bmdc}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
