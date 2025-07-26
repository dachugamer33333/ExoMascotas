import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "🦎 ExoMascotas - Portal Educativo para Mascotas Exóticas",
  description: "Descubre todo sobre el cuidado de mascotas exóticas: hurones, erizos, reptiles, aves. Guías especializadas, veterinarios y productos recomendados.",
  keywords: "mascotas exóticas, hurones, erizos, reptiles, aves exóticas, cuidado mascotas, veterinarios especializados",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
