import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "./components/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundShader from "./components/BackgroundShader";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Şahin Nakliye | Profesyonel Lojistik & Taşımacılık",
  description: "Şahin Nakliye & Lojistik - İstanbul içi ve şehirler arası güvenli, hızlı, zamanında evden eve nakliyat, parça yük ve mobilya taşımacılığı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark h-full antialiased selection:bg-primary/30 selection:text-primary">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Work+Sans:wght@400;500;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <LanguageProvider>
          <BackgroundShader />
          <Header />
          <main className="flex-grow flex flex-col relative z-10">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
