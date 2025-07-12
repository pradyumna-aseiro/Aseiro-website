"use client";

export default function IndustriesHero() {
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
    <source src="/industries-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>
    {/* Content */}
    <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-36">
    <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">INDUSTRIES WE SERVE</p>
    <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
      Specialized Automation & Machine Vision Solutions for Every Industry
    </h1>
    <h2 className="text-3xl font-medium text-white mb-6">Ready to Transform Your Industry?</h2>
    <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
        From pharmaceutical precision to logistics speed, we deliver automation solutions
        tailored for each sector, compliance, reliability, and maximum ROI.
    </p>
    </div>
    </section>
  );
}
