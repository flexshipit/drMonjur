import { Lora, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
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
      className={`${plusJakartaSans.variable} ${lora.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand font-sans text-ink selection:bg-forest selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
