import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en"  >
        <body 
            suppressHydrationWarning = "true"
         className={inter.className} >
          {/* Move all divs inside body */}
          <div className="fixed inset-0 -z-50 bg-black" />
          <div className="fixed inset-0 -z-40 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(168,85,247,0.35),transparent)]" />
          
          <Header />
          <main className="relative min-h-screen">
            {children}
          </main>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}