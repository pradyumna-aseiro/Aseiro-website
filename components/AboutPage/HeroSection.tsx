import React from "react";

export default function HeroSection() {
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
    <source src="/about-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent z-10 pointer-events-none"></div>
    {/* Content */}
    <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
    <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">ABOUT ASEIRO</p>
    <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
        Pioneering the Future
        <br />
        of <span className="text-[#b59b1d]">Manufacturing</span>
    </h1>
    <p className="text-xl text-gray-200 mb-8 font-medium">
      Founded with a vision to revolutionize manufacturing through intelligent automation, Aseiro Industries is 
      a pioneer in machine vision and robotics solutions.
    </p>
    </div>
    </section>
  );
}
