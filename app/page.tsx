import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#004080] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#FFD700]">#SeeMoreDoMore</span>
              <div className="flex items-center space-x-2">
                <a
                  href="https://linkedin.com/company/aseiro-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 22.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@AseiroIndustriesPvtLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+917893715471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:pradyumna@aseiro.in"
                className="text-white underline hover:text-gray-200 transition-colors"
              >
                pradyumna@aseiro.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
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
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-12">
              <Link
                href="/"
                className="text-[#004080] font-medium text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FFD700] after:transform after:scale-x-100"
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

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-automation.mp4" type="video/mp4" />
          {/* Fallback image */}
          {/* If you want to support fallback, use absolute Image with z-0 as well */}
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced Industrial
            <span className="block text-blue-400">Automation Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transforming manufacturing with cutting-edge robotics, AI-driven quality control, and seamless integration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/solutions">
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR SOLUTIONS</p>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Solutions for Any Sector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Machine Vision",
                image: "/precision-manufacturing.png",
                link: "/solutions#machine-vision",
              },
              {
                title: "Robotics Integration",
                image: "/automation-facility.png",
                link: "/solutions#robotics",
              },
              {
                title: "Quality Control",
                image: "/precision-manufacturing.png",
                link: "/solutions#quality-control",
              },
              {
                title: "Process Automation",
                image: "/automation-facility.png",
                link: "/solutions#process-automation",
              },
            ].map((solution, index) => (
              <Link key={index} href={solution.link} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40"></div>
                  <div className="absolute inset-0 bg-[#004080]/0 transition-all duration-500 group-hover:bg-[#004080]/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-2xl font-light text-white mb-4 transform transition-all duration-500 group-hover:text-[#FFD700]">
                        {solution.title}
                      </h3>
                      <div className="inline-flex items-center bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 group-hover:bg-[#FFD700] group-hover:text-[#004080] group-hover:scale-110 group-hover:shadow-lg">
                        <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        Read More
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#FFD700]/50"></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pharmaceutical",
                image: "/precision-manufacturing.png",
                link: "/industries#pharmaceutical",
              },
              {
                title: "Automotive",
                image: "/automation-facility.png",
                link: "/industries#automotive",
              },
              {
                title: "Food & Beverage",
                image: "/precision-manufacturing.png",
                link: "/industries#food-beverage",
              },
              {
                title: "Electronics",
                image: "/automation-facility.png",
                link: "/industries#electronics",
              },
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40"></div>
                  <div className="absolute inset-0 bg-[#00A0B0]/0 transition-all duration-500 group-hover:bg-[#00A0B0]/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-2xl font-light text-white mb-4 transform transition-all duration-500 group-hover:text-[#00A0B0]">
                        {industry.title}
                      </h3>
                      <div className="inline-flex items-center bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 group-hover:bg-[#00A0B0] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                        <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        Read More
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#00A0B0]/50"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <Image src="/automation-facility.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">INDUSTRIES WE SERVE</p>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Tailored Solutions
                <br />
                for Every Sector
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From pharmaceutical precision to automotive efficiency, we deliver industry-specific automation
                solutions that meet regulatory requirements and exceed performance expectations.
              </p>
              <Link href="/industries">
                <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white px-6 py-3">
                  Explore Industries
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Pharmaceutical", icon: "💊" },
                { name: "Automotive", icon: "🚗" },
                { name: "Food & Beverage", icon: "🥤" },
                { name: "Electronics", icon: "💻" },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-medium text-gray-900">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">GLOBAL PRESENCE</p>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Local Expertise,
              <br />
              International Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Sheffield, UK</h3>
              <p className="text-gray-600">
                European headquarters serving UK, Europe with local engineering support and regulatory compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Hyderabad, India</h3>
              <p className="text-gray-600">
                Asian operations center providing cost-effective solutions and R&D capabilities for global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#004080] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/precision-manufacturing.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-[#FFD700] mb-4">GET STARTED</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
            Ready to Transform
            <br />
            Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Book a free consultation and discover how our automation solutions can drive efficiency and quality in your
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] px-8 py-4 text-base font-medium"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-base bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Machine Vision
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Robotics Integration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Turnkey Systems
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Process Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Electronics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#004080]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#004080]">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-[#004080]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">pradyumna@aseiro.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 Aseiro Industries. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/aseiro-industries" className="text-gray-400 hover:text-[#004080]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 22.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@AseiroIndustriesPvtLtd" className="text-gray-400 hover:text-[#004080]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://wa.me/+917893715471" className="text-gray-400 hover:text-[#004080]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
