import { Instrument_Serif, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata = {
  title: "Dr. Monjur Shoyeb Khan | Clinical Oncologist in Dhaka",
  description:
    "Clinical oncologist at NICRH, Mohakhali. Chemotherapy, radiotherapy, immunotherapy, targeted therapy and palliative cancer care. Chambers at Popular Diagnostic Centre, Gazipur, and New Peacy Lab Ltd., Mirpur-1. BMDC A-71361.",
};

export const viewport = {
  themeColor: "#0b3d36",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${instrument.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand font-sans text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
