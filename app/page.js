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
      <div className="bg-forest text-ivory">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm">
          <p className="font-bengali">
            <span className="font-semibold">শুক্রবার · গাজীপুর</span>
            <span className="text-ivory/70"> · পপুলার ডায়াগনস্টিক · ৫টা–৮টা</span>
            <span className="mx-2 text-copper">·</span>
            <span className="font-semibold">মিরপুর-১</span>
            <span className="text-ivory/70"> · নিউ পিসি ল্যাব লিঃ · সন্ধ্যা ৭টা–১০টা</span>
          </p>
          <a
            href="tel:09666787816"
            className="shrink-0 font-semibold text-mint underline-offset-4 hover:underline"
          >
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
