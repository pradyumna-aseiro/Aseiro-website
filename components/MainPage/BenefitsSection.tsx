// components/BenefitsCards.tsx

import { CheckCircle, ArrowRight, Target, LineChart, BadgePercent, Eye } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Smart Compliance & Traceability",
    description: "Ensure every product meets standards with automated, real-time tracking and digital records.",
    image: "/benefits-ensure-compliance.png",
    icon: <Eye className="h-6 w-6" />,
    features: [
      "100% Inline Inspection",
      "Effortless Traceability",
      "Automated Audit Trails",
      "Reduced Human Error"
    ],
    id: "compliance",
  },
  {
    title: "Data-Driven Productivity",
    description: "AI-powered analytics and monitoring enable lines to self-optimize for peak efficiency.",
    image: "/benefits-optimise.png",
    icon: <LineChart className="h-6 w-6" />,
    features: [
      "Live Analytics",
      "Predictive Adjustments",
      "Downtime Reduction",
      "Self-Optimizing Lines"
    ],
    id: "productivity",
  },
  {
    title: "Cost & Waste Reduction",
    description: "Cut waste, minimize rework, and maximize ROI with early detection and predictive maintenance.",
    image: "/benefits-reduce-costs.png",
    icon: <BadgePercent className="h-6 w-6" />,
    features: [
      "Lower Scrap & Rework",
      "Predictive Maintenance",
      "Less Downtime",
      "Faster ROI"
    ],
    id: "cost",
  },
];

export default function BenefitsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">AUTOMATION 4.0 BENEFITS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            <span className="text-[#b59b1d]">Benefits</span> of Automation 4.0
          </h2>
          <p className="max-w-2xl mx-auto text-center text-lg text-gray-700 mb-8 font-light">
            <span className="font-semibold text-[#b59b1d]">Automation 4.0</span> combines advanced automation, machine vision, IoT, robotics, and AI for intelligent, connected, and self-optimizing manufacturing—unlocking efficiency, quality, and business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {benefits.map((benefit, index) => (
            <div key={index} id={benefit.id} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50"></div>
                <div className="absolute inset-0 bg-[#004080]/0 transition-all duration-500 group-hover:bg-[#004080]/20"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#b59b1d] group-hover:scale-110">
                      <div className="text-white transition-colors duration-500 group-hover:text-[#004080]">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#b59b1d]">{benefit.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {benefit.description}
                    </p>
                    <div className="space-y-1 mb-4 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {benefit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="h-3 w-3 mr-2 text-[#b59b1d]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#b59b1d]/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
