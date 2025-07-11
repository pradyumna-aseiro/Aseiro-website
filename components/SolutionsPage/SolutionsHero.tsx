import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionsHero() {
    return (
        <section className="relative h-[600px] min-h-[70vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/solutions-warehouse.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solutions-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
          <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">OUR SOLUTIONS</p>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
            Comprehensive
            <br />
            <span className="text-[#b59b1d]">Automation</span> Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            From machine vision systems to complete turnkey automation, we deliver cutting-edge technology that transforms manufacturing processes across industries.
          </p>
        </div>
      </section>
    );
  }
  