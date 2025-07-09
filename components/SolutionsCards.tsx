// components/SolutionsCards.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR SOLUTIONS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            <span className="text-[#b59b1d]">Solutions</span> for Any Sector
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Machine Vision", image: "/machine-vision.png", link: "/solutions#machine-vision" },
            { title: "Robotics Integration", image: "/robotics.png", link: "/solutions#robotics" },
            { title: "Process Automation", image: "/automation.png", link: "/solutions#process-automation" },
          ].map((solution, index) => (
            <Link key={index} href={solution.link} className="group block">
              <div className="relative h-64 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40"></div>
                <div className="absolute inset-0 bg-[#004080]/0 transition-all duration-500 group-hover:bg-[#004080]/20"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-light text-white mb-4 transform transition-all duration-500 group-hover:text-[#b59b1d]">
                      {solution.title}
                    </h3>
                    <div className="inline-flex items-center bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 group-hover:bg-[#b59b1d] group-hover:text-[#004080] group-hover:scale-110 group-hover:shadow-lg">
                      <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Read More
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#b59b1d]/50"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
