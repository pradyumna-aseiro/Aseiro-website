// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/aseiro-logo-main.png"
              alt="Aseiro Industries"
              width={160}
              height={64}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Global provider of automation and machine vision solutions for modern manufacturing.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="text-gray-600 hover:text-[#004080]">Machine Vision</Link></li>
              <li><Link href="/solutions" className="text-gray-600 hover:text-[#004080]">Robotics Integration</Link></li>
              <li><Link href="/solutions" className="text-gray-600 hover:text-[#004080]">Process Automation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Pharmaceutical</Link></li>
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Automotive</Link></li>
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Construction</Link></li>
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Electronics</Link></li>
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Packaging & Logistics</Link></li>
              <li><Link href="/industries" className="text-gray-600 hover:text-[#004080]">Food & Beverage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-[#004080]">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#004080]">Get in Touch</Link></li>
              <li><Link href="/case-studies" className="text-gray-600 hover:text-[#004080]">Case Studies</Link></li>
              <li>
                <div className="flex items-center space-x-4">
                  <a
                    href="mailto:pradyumna@aseiro.in"
                    className="text-[#004080] underline hover:text-gray-400 transition-colors"
                  >
                    pradyumna@aseiro.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Aseiro Industries. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://linkedin.com/company/aseiro-industries" className="text-gray-400 hover:text-[#004080]" aria-label="LinkedIn">
              {/* LinkedIn SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 22.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@AseiroIndustriesPvtLtd" className="text-gray-400 hover:text-[#004080]" aria-label="YouTube">
              {/* YouTube SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://wa.me/+917893715471" className="text-gray-400 hover:text-[#004080]" aria-label="WhatsApp">
              {/* WhatsApp SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
