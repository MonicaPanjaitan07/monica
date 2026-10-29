import "./globals.css";
import Shell from "@/components/Shell";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://lestari-portfolio.vercel.app";
const title = "Monica Putri Lestari Panjaitan | Portfolio";
const desc = "Portfolio of Monica Putri Lestari Panjaitan — Information Technology student at Institut Teknologi Del: Data Analyst, UI/UX Design, Web Developer.";
export const metadata = {
  metadataBase: new URL(site), title, description: desc,
  openGraph: { title, description: desc, type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description: desc, images: ["/og.png"] },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#f5f1fc" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
      </head>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
