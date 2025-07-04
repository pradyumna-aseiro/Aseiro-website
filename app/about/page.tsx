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
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link
                href="/industries"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                INDUSTRIES
              </Link>
              <Link
                href="/case-studies"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                CASE STUDIES
              </Link>
              <Link
                href="/about"
                className="text-[#00A0B0] hover:text-[#004080] font-medium font-heading text-sm uppercase tracking-wide border-b-2 border-[#00A0B0]"
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
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/automation-facility.png"
            alt="Aseiro Industries automation facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading uppercase leading-tight">
              ABOUT ASEIRO INDUSTRIES
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Delivering custom robotics and machine vision solutions for fast-paced factories, eliminating human error
              and ensuring consistent product quality through smart automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-6">
                  SEE MORE WITH VISION, DO MORE WITH AUTOMATION
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Aseiro Industries, we believe in transforming manufacturing through intelligent automation and
                  precision machine vision. Our mission is to eliminate human error, enhance product quality, and
                  accelerate production efficiency for factories worldwide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With offices in Sheffield, UK and Hyderabad, India, we combine global expertise with local market
                  knowledge to deliver solutions that drive measurable ROI for our clients across diverse manufacturing
                  sectors.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/precision-manufacturing.png"
                alt="Advanced precision manufacturing systems"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Aseiro Industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "PRECISION",
                description: "Every solution engineered with meticulous attention to detail and accuracy.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "INNOVATION",
                description: "Continuously pushing boundaries with cutting-edge automation technologies.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "RELIABILITY",
                description: "Delivering consistent, dependable solutions that manufacturers can trust.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "PARTNERSHIP",
                description: "Building long-term relationships through exceptional service and support.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#004080] hover:shadow-xl transition-all duration-300 rounded-2xl text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#004080]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#004080]">{value.icon}</div>
                  </div>
                  <CardTitle className="text-[#004080] font-heading uppercase">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">OUR EXPERTISE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions across multiple domains
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-12 w-12" />,
                title: "CUSTOM ROBOTICS",
                description:
                  "Tailored robotic solutions for pick & place, assembly, packaging, and material handling operations designed specifically for your production requirements.",
                features: ["Pick & Place Systems", "Assembly Automation", "Material Handling", "Packaging Solutions"],
              },
              {
                icon: <Eye className="h-12 w-12" />,
                title: "MACHINE VISION",
                description:
                  "Advanced computer vision systems for quality control, defect detection, OCR, and process monitoring to ensure zero-defect manufacturing.",
                features: ["Defect Detection", "Quality Control", "OCR & Barcode Reading", "Process Monitoring"],
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "TURNKEY INTEGRATION",
                description:
                  "Complete end-to-end automation solutions from initial concept and design through full deployment and ongoing support.",
                features: ["System Design", "Project Management", "Installation & Testing", "Training & Support"],
              },
            ].map((expertise, index) => (
              <Card
                key={index}
                className="bg-[#004080] text-white hover:shadow-2xl transition-all duration-300 rounded-2xl border-0"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#004080]">{expertise.icon}</div>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700] mx-auto mb-4"></div>
                  <CardTitle className="text-white font-heading uppercase text-xl">{expertise.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-200 text-center">{expertise.description}</CardDescription>
                  <div className="space-y-2">
                    {expertise.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#FFD700]" />
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#004080] font-heading uppercase mb-4">
              GLOBAL PRESENCE, LOCAL EXPERTISE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located offices to serve manufacturers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                location: "SHEFFIELD, UNITED KINGDOM",
                description:
                  "Our UK headquarters serves European markets with cutting-edge automation solutions and local engineering support.",
                highlights: [
                  "European Market Hub",
                  "Local Engineering Team",
                  "Regulatory Compliance",
                  "Customer Support",
                ],
                flag: "🇬🇧",
              },
              {
                location: "HYDERABAD, INDIA",
                description:
                  "Our Indian operations center provides cost-effective solutions and serves the rapidly growing Asian manufacturing sector.",
                highlights: ["Asian Market Focus", "Cost-Effective Solutions", "R&D Center", "Manufacturing Support"],
                flag: "🇮🇳",
              },
            ].map((office, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#004080] hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{office.flag}</span>
                    <CardTitle className="text-[#004080] font-heading uppercase">{office.location}</CardTitle>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700]"></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-lg">{office.description}</CardDescription>
                  <div className="space-y-2">
                    {office.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#00A0B0]" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
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
              WHY MANUFACTURERS CHOOSE ASEIRO
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "PROVEN RESULTS",
                description:
                  "Decades of experience delivering measurable ROI and operational improvements across diverse manufacturing sectors.",
                metric: "30+ Years Experience",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "GLOBAL REACH",
                description:
                  "International expertise with local market knowledge, serving manufacturers across UK, Europe, and Asia.",
                metric: "2 Global Offices",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "CONTINUOUS INNOVATION",
                description:
                  "Staying ahead of industry trends with cutting-edge technologies and continuous R&D investment.",
                metric: "Latest Technology",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="bg-[#004080] text-white hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#004080]">{advantage.icon}</div>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700] mx-auto mb-4"></div>
                  <CardTitle className="text-white font-heading uppercase">{advantage.title}</CardTitle>
                  <div className="text-[#FFD700] font-bold text-lg">{advantage.metric}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
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
            Let's discuss how our automation solutions can drive efficiency and quality in your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] rounded-lg px-8 font-bold">
              CONTACT US TODAY
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#FFD700] border border-white hover:border-[#FFD700]"
            >
              VIEW OUR SOLUTIONS
            </Button>
          </div>
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
