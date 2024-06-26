import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SWRProvider from "@/app/swr-provider";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instatus Activity Logs",
  description: "At Instatus Activity Logs, our mission is to provide an efficient and intuitive way to track and monitor user activities across various platforms. Our goal is to help businesses and individuals maintain a secure and transparent record of all activities, ensuring accountability and ease of auditing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster toastOptions={{ position: "bottom-right" }} />
        <SWRProvider>
          <nav className="fixed top-0 left-0 right-0 z-50 h-16 p-2">
            <Navbar />
          </nav>
          <main className="pt-20 p-8">
            {children}
          </main>
        </SWRProvider>
      </body>
    </html>
  )
}

