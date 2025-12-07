import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Flow Rental Bocas | Ebikes y motos para explorar Isla Colón",
  description:
    "Alquiler de motos y ebikes en Bocas del Toro con reservas online. Explora La Gruta, Playa Bluff, Boca del Drago y Starfish Beach de forma fácil y segura."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-emerald-50/20 text-slate-900 flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1 py-6 sm:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
