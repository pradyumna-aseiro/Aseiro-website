// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

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
            {navLinks.map((link) => {
              // For highlighting, match root and subpages
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    font-medium text-sm tracking-wide relative transition-colors
                    ${isActive ? "text-[#004080]" : "text-gray-600 hover:text-[#004080]"}
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:rounded after:transition-all after:duration-300
                    ${isActive ? "after:bg-[#b59b1d] after:scale-x-100" : "after:bg-transparent after:scale-x-0"}
                  `}
                  style={{ paddingBottom: 2 }} // optional, gives a little space under text
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact">
            <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white px-6 py-2 text-sm font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
