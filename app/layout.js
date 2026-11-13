import { Noto_Sans_Bengali, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
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
      className={`${roboto.variable} ${poppins.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand font-sans text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
