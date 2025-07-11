// components/SolutionsCards.tsx

import { Eye, Cog, Shield, Zap, ArrowRight, CheckCircle, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Machine Vision",
    description: "Advanced optical inspection and quality control systems",
    image: "/machine-vision.png",
    icon: <Eye className="h-6 w-6" />,
    features: ["Defect Detection", "Dimensional Measurement", "OCR/OCV", "Color Analysis"],
    id: "machine-vision",
  },
  {
    title: "Robotics Integration",
    description: "Seamless integration of robotic systems for enhanced productivity",
    image: "/robotics.png",
    icon: <Cog className="h-6 w-6" />,
    features: ["Pick & Place", "Assembly", "Welding", "Material Handling"],
    id: "robotics",
  },
  {
    title: "Process Automation",
    description: "End-to-end automation for optimized manufacturing workflows",
    image: "/automation.png",
    icon: <Zap className="h-6 w-6" />,
    features: ["PLC Programming", "HMI Development", "SCADA Systems", "IoT Integration"],
    id: "process-automation",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR SOLUTIONS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            <span className="text-[#b59b1d]">Solutions</span> for Any Sector
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 font-light">
            <span className="font-semibold text-[#b59b1d]">Aseiro’s automation solutions</span> combine advanced machine vision, robotics integration, and end-to-end process automation to empower your business. We deliver tailored systems for quality control, efficiency, and digital transformation, enabling manufacturers of all sizes to unlock the full potential of Industry 4.0.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {solutions.map((solution, index) => (
            <div key={index} id={solution.id} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden will-change-transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50"></div>
                <div className="absolute inset-0 bg-[#004080]/0 rounded-2xl transition-all duration-500 group-hover:bg-[#004080]/20"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#b59b1d] group-hover:scale-110">
                      <div className="text-white transition-colors duration-500 group-hover:text-[#004080]">
                        {solution.icon}
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#b59b1d]">{solution.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {solution.description}
                    </p>
                    <div className="space-y-1 mb-4 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="h-3 w-3 mr-2 text-[#b59b1d]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-white text-white hover:bg-[#b59b1d] hover:text-[#004080] bg-black/50 backdrop-blur-sm rounded-full mt-2 transition-all group-hover:bg-[#b59b1d] group-hover:text-[#004080] group-hover:scale-110 group-hover:shadow-lg"
                    >
                      <Link href={`/solutions#${solution.id}`}>
                        <Target className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        Learn More
                      </Link>
                    </Button>
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
