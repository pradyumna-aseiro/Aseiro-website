import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Target, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Increased Efficiency",
    description:
      "Reduce cycle times by up to 40% with optimized automation workflows and intelligent systems.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enhanced Quality",
    description: "Achieve 99.9% accuracy with advanced inspection systems and real-time quality control.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Rapid ROI",
    description: "Typical payback period of 12-18 months through reduced labor costs and improved throughput.",
  },
];

export default function SolutionsBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">BENEFITS</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Why Choose
            <br />
            <span className="text-[#b59b1d]">Aseiro's Solutions?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-50 border-0 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-white">{benefit.icon}</div>
              </div>
              <CardTitle className="text-xl font-light text-gray-900 mb-4">{benefit.title}</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
