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
          poster=""
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solutions-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
          <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">OUR SOLUTIONS</p>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 leading-tight">
            Comprehensive Automation Solutions for Quality Inspection
          </h1>
          <p className="text-xl text-[#b59b1d] mb-8 font-medium">
            From machine vision systems to complete end-to-end automation for quality inspection, we deliver advanced technology that transforms manufacturing processes across industries.
          </p>
        </div>
      </section>
    );
  }
