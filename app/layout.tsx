import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/app/_components/navigation/topbar";
import { Footer } from "@/app/_components/navigation/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/app/_components/ui/toaster";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "800"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Bartosz Sobina",
    template: "%s - Bartosz Sobina",
  },
  description: "Bartosz Sobina portfolio",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiasedi flex flex-col items-center `}
      >
        <main className="h-screen w-full max-w-4xl px-10">
          <NextTopLoader color="#6d28d9" showSpinner={true} />
          <TopBar />
          {children}
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
