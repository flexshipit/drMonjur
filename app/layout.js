import { Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
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
    "Clinical oncologist at NICRH, Mohakhali. Chemotherapy, radiotherapy, immunotherapy and targeted therapy. Friday chamber at Popular Diagnostic Centre, Gazipur. BMDC A-71361.",
};

export const viewport = {
  themeColor: "#1a7a43",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
