import React from "react";

export default function CaseStudiesHero() {
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
    <source src="/case-studies-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>
    {/* Content */}
    <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-40">
    <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">APPLICATIONS</p>
    <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
        ASEIRO's <span className="text-[#b59b1d]">Case Studies</span>
    </h1>
    <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
      See how Aseiro’s technology solves real problems in quality, automation, and compliance.
    </p>
    </div>
    </section>
  );
}
