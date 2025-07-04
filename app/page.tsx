import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Cog,
  Zap,
  Users,
  Globe,
  Award,
  ChevronDown,
  Pill,
  Car,
  Coffee,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
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
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-[#00A0B0] hover:text-[#004080] font-medium font-heading text-sm uppercase tracking-wide border-b-2 border-[#00A0B0]"
              >
                HOME
              </Link>
              <Link
                href="/solutions"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                SOLUTIONS
              </Link>
              <div className="relative group">
                <button className="flex items-center text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide">
                  INDUSTRIES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link
                href="/case-studies"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                CASE STUDIES
              </Link>
              <Link
                href="/about"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                CONTACT
              </Link>
            </nav>
            <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg px-6 py-2 font-medium">
              LEARN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/precision-manufacturing.png"
            alt="Advanced precision manufacturing and machine vision system"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading uppercase leading-tight">
                TRANSFORMING MANUFACTURING WITH AUTOMATION & MACHINE VISION
              </h1>
            </div>

            <div className="space-y-6 backdrop-blur-sm p-8 rounded-2xl shadow-2xl bg-white">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aseiro Industries is a global provider of automation and machine vision solutions, serving manufacturers
                across the UK, Europe, and India. We specialize in custom, scalable solutions tailored to local
                requirements but powered by international expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg px-8 shadow-lg">
                  BOOK A CONSULTATION
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white rounded-lg px-8 bg-transparent shadow-lg"
                >
                  TELL US YOUR CHALLENGE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              EMPOWERING MANUFACTURERS WITH TAILORED AUTOMATION SOLUTIONS FOR REAL-WORLD CHALLENGES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-8 w-8" />,
                title: "ROBOTICS INTEGRATION",
                description: "Custom robotic solutions for pick & place, assembly, and material handling operations.",
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "MACHINE VISION SYSTEMS",
                description:
                  "Advanced defect detection, OCR, and quality control systems for zero-defect manufacturing.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "CUSTOM AUTOMATION",
                description: "End-to-end turnkey automation solutions from concept design to full deployment.",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-[#004080] text-white hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-4 bg-slate-50">
                    <div className="text-[#004080]">{solution.icon}</div>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700] mx-auto mb-4"></div>
                  <CardTitle className="text-white font-heading uppercase text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200 mb-4 text-center">{solution.description}</CardDescription>
                  <div className="text-center">
                    <Button variant="ghost" className="text-[#FFD700] hover:text-[#FFD700]/80 p-0">
                      LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              EXPLORE OUR EXPERTISE ACROSS KEY INDUSTRIES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Pill className="h-12 w-12" />,
                title: "PHARMACEUTICAL",
                description: "Precision automation for drug manufacturing and quality control with FDA compliance.",
              },
              {
                icon: <Car className="h-12 w-12" />,
                title: "AUTOMOTIVE",
                description: "Robotic assembly lines and vision inspection systems for automotive components.",
              },
              {
                icon: <Coffee className="h-12 w-12" />,
                title: "FOOD & BEVERAGE",
                description: "Hygienic automation solutions for packaging, sorting, and quality assurance.",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#004080] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-[#004080]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#004080]">{industry.icon}</div>
                  </div>
                  <CardTitle className="text-[#004080] font-heading uppercase">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aseiro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              WHY CHOOSE ASEIRO FOR YOUR AUTOMATION NEEDS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "FLEXIBILITY & TALENT",
                description:
                  "Global team of automation experts with local market knowledge and international best practices.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "EXPERTISE YOU TRUST",
                description:
                  "Decades of proven experience delivering measurable ROI across diverse manufacturing sectors.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "GLOBAL EXPERIENCE, LOCAL SOLUTIONS",
                description: "Offices in UK and India providing worldwide reach with personalized, local support.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-[#004080] text-white hover:shadow-2xl transition-all duration-300 rounded-2xl border-0"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#004080]">{feature.icon}</div>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700] mx-auto mb-4"></div>
                  <CardTitle className="text-white font-heading uppercase">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              REAL-WORLD SUCCESS STORIES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AUTOMATING AUTOMOTIVE ASSEMBLY: 30% EFFICIENCY GAIN",
                industry: "Automotive Manufacturing",
                description: "Complete robotic assembly line transformation",
              },
              {
                title: "PHARMA QUALITY CONTROL: ZERO-DEFECT VISION INSPECTION",
                industry: "Pharmaceutical",
                description: "Machine vision system for 100% quality assurance",
              },
              {
                title: "F&B TRACEABILITY: ROBOTICS + VISION INTEGRATION",
                industry: "Food & Beverage",
                description: "End-to-end automation with full product traceability",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#004080] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardHeader>
                  <div className="h-1 w-16 bg-[#FFD700] mb-4"></div>
                  <CardTitle className="text-[#004080] font-heading uppercase text-sm leading-tight">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-[#00A0B0] font-medium">{study.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button variant="ghost" className="text-[#004080] hover:text-[#00A0B0] p-0">
                    READ CASE STUDY <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Facility Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/automation-facility.png"
                alt="Professionals observing advanced robotic automation systems in manufacturing facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase">
                ENGINEERING EXCELLENCE IN EVERY SOLUTION
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From consultation to deployment and ongoing support, our team delivers measurable ROI for clients in
                diverse sectors: automotive, pharma, food & beverage, packaging, and more.
              </p>
              <div className="space-y-4">
                {[
                  "Custom automation design and engineering",
                  "Comprehensive project management",
                  "Global support with local expertise",
                  "Proven track record across industries",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading uppercase mb-4">
            READY TO TRANSFORM YOUR MANUFACTURING?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your free consultation and discover how we can solve your toughest automation challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] rounded-lg px-8 font-bold">
              BOOK A FREE CONSULTATION
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#FFD700] border border-white hover:border-[#FFD700]"
            >
              EMAIL US
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Serving manufacturers globally from the UK and India. Offices in London and Hyderabad.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00A0B0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/aseiro-logo-light.png"
                alt="Aseiro Industries"
                width={200}
                height={80}
                className="h-16 w-auto mb-4"
              />
            </div>
            <div>
              <nav className="flex flex-wrap gap-6 justify-end">
                <Link href="/" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  HOME
                </Link>
                <Link href="/solutions" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  SOLUTIONS
                </Link>
                <Link href="/industries" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  INDUSTRIES
                </Link>
                <Link href="/case-studies" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  CASE STUDIES
                </Link>
                <Link href="/about" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  ABOUT
                </Link>
                <Link href="/contact" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  CONTACT
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-200">© 2024 Aseiro Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
