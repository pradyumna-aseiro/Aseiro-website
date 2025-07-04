import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Cog, Zap, TrendingUp, CheckCircle, Target, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Machine Vision Systems",
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
      title: "Robotics & Automation",
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
      title: "Turnkey Integration",
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
      title: "Process Optimization",
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
      {/* Header - Same as homepage */}
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
              <Link href="/solutions" className="text-[#13315C] font-medium border-b-2 border-[#13315C]">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#13315C] font-mono leading-tight mb-6">
            Comprehensive Automation Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From machine vision to complete turnkey systems, we deliver custom solutions that solve your most complex
            manufacturing challenges.
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
                  <div className="w-20 h-20 bg-[#20CFCF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-[#20CFCF]">{solution.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold text-[#13315C] font-mono mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#13315C] mb-3 flex items-center">
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
                    <h3 className="text-lg font-semibold text-[#13315C] mb-3 flex items-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Our Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {solution.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#20CFCF] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#13315C] mb-2">Key Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-[#E7EEF6] text-[#13315C]">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#20CFCF]/10 p-4 rounded-lg mb-6">
                    <p className="text-[#13315C] font-semibold">Typical Results: {solution.results}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#13315C] hover:bg-[#13315C]/90 text-white rounded-lg">
                      Request Similar Solution
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#20CFCF] text-[#20CFCF] hover:bg-[#20CFCF] hover:text-white rounded-lg bg-transparent"
                    >
                      See Case Study
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#13315C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-mono mb-4">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your specific challenges and design a custom solution
          </p>
          <Button size="lg" className="bg-[#20CFCF] hover:bg-[#20CFCF]/90 text-white rounded-lg">
            Schedule Discovery Call
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
