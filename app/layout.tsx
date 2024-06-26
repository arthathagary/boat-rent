import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", poppins.className)}>
        <div className="mb-20">
          <Navbar />
        </div>
        <MaxWidthWrapper>
          <main className="min-h-screen">{children}</main>
        </MaxWidthWrapper>
        <Footer />
      </body>
    </html>
  );
}
