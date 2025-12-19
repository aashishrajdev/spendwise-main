import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { LayoutDashboard, PenBox, Banknote } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 text-3xl font-extrabold tracking-tight cursor-pointer">
            <Banknote size={30} className="text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              SpendWise
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <SignedOut>
            <a
              href="#features"
              className="text-white/70 hover:text-purple-400 transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-white/70 hover:text-purple-400 transition"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline ml-2">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-[0_0_30px_rgba(168,85,247,0.55)]">
                <PenBox size={18} />
                <span className="hidden md:inline ml-2">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 ring-2 ring-purple-500/40 hover:ring-purple-400 transition",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
