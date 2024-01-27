import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hud",
  description: "Discover all the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
