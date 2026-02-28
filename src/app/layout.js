import { Caveat, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "raleway",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "Caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "میثم قیصری | Frontend Developer | Maysam Ghaysari",
  description:
    "میثم قیصری، توسعه‌دهنده فرانت‌اند متخصص در Next.js و React. مشاهده پروژه‌ها و رزومه.",
  metadataBase: new URL("https://maysamghaysari.ir"),
  openGraph: {
    title: "میثم قیصری - پورتفولیو - maysam ghaysari",
    description:
      "پورتفولیو و پروژه‌های میثم قیصری، توسعه‌دهنده فرانت‌اند متخصص در Next.js و React.",
    url: "https://maysamghaysari.ir",
    siteName: "میثم قیصری | maysam ghaysari",
    images: [
      {
        url: "https://maysamghaysari.ir/maysam-ghaysari.webp",
        width: 1200,
        height: 630,
        alt: "میثم قیصری - Frontend Developer",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "میثم قیصری",
    alternateName: "Maysam Ghaysari",
    jobTitle: "توسعه‌دهنده فرانت‌اند | Frontend Developer",
    url: "https://maysamghaysari.ir",
    sameAs: [
      "https://www.linkedin.com/in/maysam-ghaysari-227676367",
      "https://github.com/Maysam-Ghaysari",
      "https://www.instagram.com/maysam_qaysari?igsh=bjFtNW5nM3d3YXls",
    ],
    email: "maysamghaysari80@gmail.com",
    birthDate: "2001-03-31",
    address: {
      "@type": "PostalAddress",
      addressLocality: "سقز",
      addressRegion: "کردستان",
      addressCountry: "IR",
    },
  };
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${caveat.variable}  antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
