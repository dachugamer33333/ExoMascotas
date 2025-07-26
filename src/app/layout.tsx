import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "🐾 HotPet - Hoteles Pet-Friendly en México",
  description: "Encuentra los mejores hoteles que aceptan mascotas en México. Viaja con tu compañero peludo y disfruta de unas vacaciones inolvidables.",
  keywords: "hoteles pet-friendly, viajes con mascotas, hoteles México, alojamiento mascotas",
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
