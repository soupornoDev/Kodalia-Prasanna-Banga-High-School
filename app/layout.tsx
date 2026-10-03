import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/navBar";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer"


export const metadata: Metadata = {
  title: "Kodalia Pasanna Banga High School",
  description: "KPBHS Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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