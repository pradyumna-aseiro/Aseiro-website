"use client";

import { ArrowRight, Pill, Car, Coffee, Cpu, Building2, Wheat, CheckCircle } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    title: "Pharmaceutical",
    description: "FDA-compliant automation for drug manufacturing, inspection and packaging.",
    image: "/industries-pharma.png",
    icon: <Pill className="h-6 w-6" />,
    applications: [
      "Tablet Inspection", "Vial Filling", "Serialization", "Clean Room Automation"
    ],
    color: "bg-blue-500", hoverColor: "group-hover:bg-blue-600",
  },
  {
    title: "Automotive",
    description: "Precision automation for vehicle assembly and component manufacturing.",
    image: "/industries-automotive.png",
    icon: <Car className="h-6 w-6" />,
    applications: [
      "Welding Automation", "Paint Line", "Quality Inspection", "Assembly Line"
    ],
    color: "bg-red-500", hoverColor: "group-hover:bg-red-600",
  },
  {
    title: "Food & Beverage",
    description: "Hygienic automation solutions for food processing and packaging.",
    image: "/industries-food.png",
    icon: <Coffee className="h-6 w-6" />,
    applications: [
      "Packaging Lines", "Quality Sorting", "Fill Level Check", "Label Verification"
    ],
    color: "bg-green-500", hoverColor: "group-hover:bg-green-600",
  },
  {
    title: "Electronics",
    description: "High-precision automation for electronic component manufacturing.",
    image: "/industries-electronics.png",
    icon: <Cpu className="h-6 w-6" />,
    applications: [
      "PCB Inspection", "Component Placement", "Soldering", "Testing"
    ],
    color: "bg-purple-500", hoverColor: "group-hover:bg-purple-600",
  },
  {
    title: "Warehousing & Logistics",
    description: "Smart automation for warehousing, fulfillment, and logistics operations.",
    image: "/industries-warehouse.png",
    icon: <Building2 className="h-6 w-6" />,
    applications: [
      "Conveyor Automation", "Sorting Systems", "Palletizing", "Barcode Tracking"
    ],
    color: "bg-yellow-600", hoverColor: "group-hover:bg-yellow-700",
  },
  {
    title: "Agro & FMCG",
    description: "Agro-processing and FMCG automation for efficient and scalable output.",
    image: "/industries-agro.png",
    icon: <Wheat className="h-6 w-6" />,
    applications: [
      "Sorting & Grading", "Packaging", "Traceability", "Quality Analysis"
    ],
    color: "bg-orange-600", hoverColor: "group-hover:bg-orange-700",
  }
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} id={industry.title.toLowerCase().replace(/\s+/g, "-")} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50"></div>
                <div className="absolute inset-0 bg-[#00A0B0]/0 transition-all duration-500 group-hover:bg-[#00A0B0]/20"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${industry.hoverColor}`}>
                      <div className="text-white">{industry.icon}</div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#FFD700]">
                      {industry.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {industry.description}
                    </p>
                    <div className="space-y-1 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="h-3 w-3 mr-2 text-[#00A0B0]" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#b59b1d]/80"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
