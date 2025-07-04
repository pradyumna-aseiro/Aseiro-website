import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, Cog, Zap, TrendingUp, CheckCircle, Target, Wrench, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "MACHINE VISION SYSTEMS",
      description: "Advanced computer vision solutions for quality control, defect detection, and process monitoring",
      problems: [
        "Manual quality inspection errors",
        "Inconsistent product quality",
        "High labor costs for inspection",
        "Slow production line speeds",
      ],
      capabilities: [
        "Defect detection and classification",
        "OCR and barcode reading",
        "Assembly verification",
        "Dimensional measurement",
        "Color and texture analysis",
      ],
      industries: ["Pharmaceutical", "Automotive", "Electronics", "Food & Beverage"],
      results: "Up to 99.9% accuracy in defect detection",
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "ROBOTICS & AUTOMATION",
      description: "Custom robotic solutions for pick & place, assembly, packaging, and material handling",
      problems: [
        "Repetitive manual tasks",
        "Workplace safety concerns",
        "Inconsistent production output",
        "High labor turnover",
      ],
      capabilities: [
        "Pick & place automation",
        "Assembly line robotics",
        "Packaging automation",
        "Material handling systems",
        "Collaborative robotics (cobots)",
      ],
      industries: ["Manufacturing", "Warehousing", "Packaging", "Automotive"],
      results: "40-60% reduction in labor costs",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "TURNKEY INTEGRATION",
      description: "Complete end-to-end automation solutions from concept design to full deployment",
      problems: [
        "Complex system integration challenges",
        "Multiple vendor coordination",
        "Extended project timelines",
        "Integration compatibility issues",
      ],
      capabilities: [
        "System design and engineering",
        "Hardware and software integration",
        "Custom control systems",
        "HMI and SCADA development",
        "Complete project management",
      ],
      industries: ["All Manufacturing Sectors"],
      results: "Single-source accountability for entire project",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "PROCESS OPTIMIZATION",
      description: "Data-driven insights and analytics to maximize efficiency and minimize waste",
      problems: [
        "Production bottlenecks",
        "Excessive waste and rework",
        "Poor OEE performance",
        "Lack of real-time visibility",
      ],
      capabilities: [
        "Production data analytics",
        "OEE monitoring and improvement",
        "Predictive maintenance",
        "Real-time dashboards",
        "Process optimization consulting",
      ],
      industries: ["Process Manufacturing", "Discrete Manufacturing"],
      results: "15-30% improvement in OEE",
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
                className="text-[#00A0B0] hover:text-[#004080] font-medium font-heading text-sm uppercase tracking-wide border-b-2 border-[#00A0B0]"
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
      <section className="bg-gradient-to-br from-[#004080] to-[#00A0B0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-heading uppercase leading-tight mb-6">
            COMPREHENSIVE AUTOMATION SOLUTIONS
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            From machine vision to complete turnkey systems, we deliver custom solutions that solve your most complex
            manufacturing challenges and eliminate human error.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-20 h-20 bg-[#004080] rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-[#FFD700]">{solution.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold text-[#004080] font-heading uppercase mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#004080] mb-3 flex items-center font-heading uppercase">
                      <Target className="w-5 h-5 mr-2" />
                      Problems We Solve
                    </h3>
                    <ul className="space-y-2">
                      {solution.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#004080] mb-3 flex items-center font-heading uppercase">
                      <Wrench className="w-5 h-5 mr-2" />
                      Our Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {solution.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#00A0B0] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#004080] mb-2 font-heading uppercase text-sm">
                      Key Industries:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} className="bg-[#004080]/10 text-[#004080] border-[#004080]/20">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FFD700]/10 p-4 rounded-lg mb-6 border border-[#FFD700]/20">
                    <p className="text-[#004080] font-semibold">
                      <strong>Typical Results:</strong> {solution.results}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg font-bold uppercase">
                      REQUEST SIMILAR SOLUTION
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00A0B0] text-[#00A0B0] hover:bg-[#00A0B0] hover:text-white rounded-lg bg-transparent font-bold uppercase"
                    >
                      SEE CASE STUDY
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="rounded-2xl border-2 border-[#004080] shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={index % 2 === 0 ? "/precision-manufacturing.png" : "/automation-facility.png"}
                        alt={solution.title}
                        width={600}
                        height={400}
                        className="w-full h-[400px] object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading uppercase mb-4">
            READY TO TRANSFORM YOUR MANUFACTURING?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your specific challenges and design a custom automation solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] rounded-lg px-8 font-bold uppercase"
            >
              SCHEDULE DISCOVERY CALL
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#FFD700] border border-white hover:border-[#FFD700] font-bold uppercase"
            >
              CONTACT US TODAY
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
