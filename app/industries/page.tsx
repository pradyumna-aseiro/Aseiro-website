import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Car, Pill, Coffee, Cpu, Package, Warehouse, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Car className="h-12 w-12" />,
      name: "AUTOMOTIVE",
      description: "Precision inspection & assembly automation.",
    },
    {
      icon: <Pill className="h-12 w-12" />,
      name: "PHARMACEUTICAL",
      description: "Regulatory-compliant vision inspection for blister packs & labels.",
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      name: "FOOD & BEVERAGE",
      description: "High-speed quality checks & fill‑level verification.",
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      name: "ELECTRONICS",
      description: "PCB & component presence inspection at scale.",
    },
    {
      icon: <Package className="h-12 w-12" />,
      name: "PACKAGING & LOGISTICS",
      description: "Robotics + vision for sorting, tracking & traceability.",
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      name: "WAREHOUSE AUTOMATION",
      description: "Mobile robots & vision for intralogistics.",
    },
  ]

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
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
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
                <button className="flex items-center text-[#00A0B0] hover:text-[#004080] font-medium font-heading text-sm uppercase tracking-wide border-b-2 border-[#00A0B0]">
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
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#212121] font-heading mb-6 leading-tight">
                  INDUSTRIES WE SERVE
                </h1>
                <p className="text-xl lg:text-2xl text-[#212121] mb-8 leading-relaxed">
                  Delivering industry‑specific automation & machine vision solutions globally
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-[#212121] leading-relaxed">
                  At Aseiro Industries, we understand that every industry has unique challenges, regulatory
                  requirements, and operational demands. Our automation and machine vision solutions are specifically
                  tailored to meet the precise needs of your sector.
                </p>
                <p className="text-lg text-[#212121] leading-relaxed">
                  From automotive precision to pharmaceutical compliance, from food safety to electronics quality
                  control, we deliver solutions that not only meet industry standards but exceed them, ensuring your
                  operations achieve maximum efficiency and reliability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg px-8 shadow-lg">
                  EXPLORE OUR SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white rounded-lg px-8 bg-transparent shadow-lg"
                >
                  CONTACT OUR EXPERTS
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/automation-facility.png"
                  alt="Industrial floor with robots performing precision inspection and automation tasks"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#004080] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#003366] transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-[#004080]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#004080]/20 transition-colors duration-300">
                    <div className="text-[#004080] group-hover:text-[#003366] transition-colors duration-300">
                      {industry.icon}
                    </div>
                  </div>
                  <CardTitle className="text-[#212121] font-heading font-bold text-xl mb-3">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-[#212121] text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#212121] font-heading mb-6">
            SPECIALIZED EXPERTISE ACROSS SECTORS
          </h2>
          <p className="text-lg text-[#212121] leading-relaxed mb-12">
            Our deep industry knowledge allows us to deliver solutions that address the specific challenges, compliance
            requirements, and operational goals unique to each manufacturing sector. From concept to deployment, we
            ensure your automation investment delivers measurable results.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#004080] font-heading">REGULATORY COMPLIANCE</h3>
              <p className="text-[#212121]">
                We understand industry-specific regulations including FDA, ISO, and other international standards,
                ensuring your automation solutions meet all compliance requirements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#004080] font-heading">CUSTOM INTEGRATION</h3>
              <p className="text-[#212121]">
                Every solution is tailored to your existing processes, equipment, and workflow requirements, minimizing
                disruption while maximizing efficiency gains.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#004080] font-heading">SCALABLE SOLUTIONS</h3>
              <p className="text-[#212121]">
                Our automation systems are designed to grow with your business, allowing for easy expansion and
                adaptation as your production requirements evolve.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#004080] font-heading">GLOBAL SUPPORT</h3>
              <p className="text-[#212121]">
                With offices in the UK and India, we provide local expertise backed by international best practices,
                ensuring consistent support wherever your operations are located.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="py-16 bg-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white font-heading mb-4">
            Don't see your industry? We deliver custom automation solutions worldwide.
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Every manufacturing challenge is unique. Let us design a solution specifically for your industry and
            requirements.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black rounded-lg px-8 py-3 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              TELL US YOUR CHALLENGE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
