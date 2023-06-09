import "./globals.css";

import { Suspense } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export const metadata = {
  title: "Airbnb 2.0 Clone",
  description: "Generated by Mario Juretić",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
      </body>
    </html>
  );
}
