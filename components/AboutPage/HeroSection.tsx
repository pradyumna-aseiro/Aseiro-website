import React from "react";

export default function HeroSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">ABOUT ASEIRO</p>
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Pioneering the Future
            <br />
            of <span className="text-[#b59b1d]">Manufacturing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize manufacturing through intelligent automation, Aseiro Industries is 
            a pioneer in machine vision and robotics solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
