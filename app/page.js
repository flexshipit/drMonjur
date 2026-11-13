import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
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
      <div className="bg-brand-deep text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-2.5 text-sm sm:px-8">
          <p>
            <span className="font-semibold">শুক্রবার চেম্বার · গাজীপুর</span>
            <span className="text-white/80"> · বিকাল ৫টা–রাত ৮টা · পপুলার ডায়াগনস্টিক</span>
          </p>
          <a href="tel:09666787816" className="shrink-0 font-semibold underline-offset-4 hover:underline">
            সিরিয়াল: 09666787816
          </a>
        </div>
      </div>
      <Header />
      <main id="content">
        <div className="bg-white">
          <Hero />
          <Marquee />
        </div>
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
