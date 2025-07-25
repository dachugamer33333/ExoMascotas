import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetViajes - Hoteles Pet-Friendly en México",
  description: "Encuentra los mejores hoteles que aceptan mascotas en México. Viaja con tu compañero peludo y disfruta de unas vacaciones inolvidables.",
  keywords: "hoteles pet-friendly, viajes con mascotas, hoteles México, alojamiento mascotas",
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
