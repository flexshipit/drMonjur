import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Chambers from "@/components/Chambers";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { doctor } from "@/lib/profile";
import { Phone } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  honorificPrefix: "Dr.",
  medicalSpecialty: ["Oncology", "Clinical Oncology"],
  identifier: `BMDC ${doctor.bmdc}`,
  telephone: doctor.mobile,
  email: doctor.email,
  hospitalAffiliation: {
    "@type": "Hospital",
    name: `${doctor.hospital}, ${doctor.city}`,
  },
  knowsLanguage: ["en", "bn"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="border-b border-white/10 bg-forest-dark text-ivory">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 font-bengali">
            <span className="inline-flex items-center rounded-full bg-mint/15 px-2.5 py-0.5 text-xs font-semibold text-mint">
              শুক্রবার · গাজীপুর
            </span>
            <span className="text-ivory/80">পপুলার ডায়াগনস্টিক (বিকাল ৫টা–৮টা)</span>
            <span className="hidden text-ivory/30 sm:inline">|</span>
            <span className="inline-flex items-center rounded-full bg-mint/15 px-2.5 py-0.5 text-xs font-semibold text-mint">
              মিরপুর-১
            </span>
            <span className="text-ivory/80">নিউ পিসি ল্যাব লিঃ (সন্ধ্যা ৭টা–১০টা)</span>
          </div>
          <a
            href="tel:09666787816"
            className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint transition-colors hover:bg-mint hover:text-forest"
          >
            <Phone className="size-3" aria-hidden />
            সিরিয়াল: 09666787816
          </a>
        </div>
      </div>
      <Header />
      <main id="content">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Gallery />
        <Experience />
        <Chambers />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
