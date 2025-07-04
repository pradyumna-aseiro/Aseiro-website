import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Eye, Cog, Zap, Users, Globe, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#13315C] rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#13315C] font-mono">ASEIRO</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#13315C] font-medium">
                Home
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-[#13315C] font-medium">
                Solutions
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-[#13315C] font-medium">
                Industries
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-[#13315C] font-medium">
                Case Studies
              </Link>
              <Link href="/why-aseiro" className="text-gray-700 hover:text-[#13315C] font-medium">
                Why Aseiro
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#13315C] font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#13315C] font-medium">
                Contact
              </Link>
            </nav>
            <Button className="bg-[#20CFCF] hover:bg-[#20CFCF]/90 text-white rounded-lg">Book Consultation</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] to-[#E7EEF6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#13315C] font-mono leading-tight mb-6">
                Solving Manufacturing's Toughest Challenges
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Global provider of tailored automation, robotics, and machine vision solutions. We deliver measurable
                results that transform manufacturing operations worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#13315C] hover:bg-[#13315C]/90 text-white rounded-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#20CFCF] text-[#20CFCF] hover:bg-[#20CFCF] hover:text-white rounded-lg bg-transparent"
                >
                  Tell Us Your Challenge
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Industrial automation and robotics"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-[#13315C]">Aseiro Industries</strong> is your trusted global partner for complex
            automation challenges. With expertise spanning continents and industries, we deliver custom solutions that
            drive efficiency, quality, and competitive advantage for manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-[#E7EEF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#13315C] font-mono mb-4">Our Core Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your manufacturing challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Machine Vision",
                description: "Advanced defect detection, OCR, and assembly verification systems",
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Robotics & Automation",
                description: "Pick & place, assembly, and warehouse automation solutions",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Turnkey Integration",
                description: "End-to-end automation solutions from concept to deployment",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Process Optimization",
                description: "Data-driven insights to maximize efficiency and reduce waste",
              },
            ].map((solution, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow rounded-2xl border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#20CFCF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#20CFCF]">{solution.icon}</div>
                  </div>
                  <CardTitle className="text-[#13315C] font-mono">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{solution.description}</CardDescription>
                  <Button variant="ghost" className="text-[#20CFCF] hover:text-[#20CFCF]/80 p-0">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#13315C] font-mono mb-4">
              Why Global Leaders Choose Aseiro
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "15+ Years",
                subtitle: "Industry Experience",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                subtitle: "UK, India & Worldwide",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "ISO Certified",
                subtitle: "Quality Assurance",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "98% Success",
                subtitle: "Project Completion Rate",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#13315C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#13315C]">{stat.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#13315C] font-mono mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-[#E7EEF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#13315C] font-mono mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions across diverse manufacturing sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Pharmaceutical", "Automotive", "Food & Beverage", "Packaging", "Electronics", "Warehousing"].map(
              (industry, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-lg transition-shadow rounded-2xl border-0 text-center p-6"
                >
                  <div className="w-12 h-12 bg-[#20CFCF]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Cog className="w-6 h-6 text-[#20CFCF]" />
                  </div>
                  <h3 className="font-semibold text-[#13315C]">{industry}</h3>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#13315C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-mono mb-4">Ready to Automate Your Manufacturing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your free consultation and discover how we can solve your toughest challenges
          </p>
          <Button size="lg" className="bg-[#20CFCF] hover:bg-[#20CFCF]/90 text-white rounded-lg">
            Book Your Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#13315C] font-mono mb-8">
              Trusted by Global Manufacturing Leaders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-4 italic">
                    "Aseiro transformed our quality control process. Defect detection improved by 95% and our production
                    efficiency increased dramatically."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#13315C]/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-[#13315C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#13315C]">Manufacturing Director</p>
                      <p className="text-sm text-gray-500">Global Pharmaceutical Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-4 italic">
                    "The automation solution delivered by Aseiro reduced our labor costs by 40% while improving product
                    consistency across all production lines."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#13315C]/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-[#13315C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#13315C]">Operations Manager</p>
                      <p className="text-sm text-gray-500">Automotive Parts Manufacturer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-4 italic">
                    "Aseiro's machine vision system revolutionized our packaging line. Zero defects shipped in the last
                    6 months since implementation."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#13315C]/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-[#13315C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#13315C]">Quality Director</p>
                      <p className="text-sm text-gray-500">Food & Beverage Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#13315C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#20CFCF] rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-mono">ASEIRO</span>
              </div>
              <p className="text-gray-300 mb-4">
                Global solutions provider for manufacturing automation, robotics, and machine vision.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-mono">Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/solutions" className="hover:text-[#20CFCF]">
                    Machine Vision
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-[#20CFCF]">
                    Robotics & Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-[#20CFCF]">
                    Turnkey Integration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-[#20CFCF]">
                    Process Optimization
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-mono">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-[#20CFCF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-[#20CFCF]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/why-aseiro" className="hover:text-[#20CFCF]">
                    Why Aseiro
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#20CFCF]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-mono">Global Locations</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium">India</p>
                  <p className="text-sm">Mumbai, Bangalore</p>
                </div>
                <div>
                  <p className="font-medium">United Kingdom</p>
                  <p className="text-sm">London, Manchester</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Aseiro Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
