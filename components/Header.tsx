// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/aseiro-logo-main.png"
                alt="Aseiro Industries"
                width={180}
                height={72}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-12">
            <Link
              href="/"
              className="text-[#004080] font-medium text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b59b1d] after:transform after:scale-x-100"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white px-6 py-2 text-sm font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
