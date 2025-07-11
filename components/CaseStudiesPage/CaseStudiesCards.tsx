import Link from "next/link";
import Image from "next/image";

const machineVision = [
  {
    title: "Printing Defect Inspection & Rejection",
    description: "Real-time detection and rejection of misprinted labelled strips on manufacturing lines using advanced machine vision.",
    image: "/case-printing-inspection.png",
    url: "/case-studies/printing-inspection",
    tag: "Machine Vision",
  },
  {
    title: "Tablet Presence/Absence Inspection",
    description: "Ensure 100% tablet presence in every blister with high-speed automated inspection and rejection.",
    image: "/case-tablet-inspection.png",
    url: "/case-studies/tablet-inspection",
    tag: "Machine Vision",
  },
  {
    title: "Bottle Level Inspection",
    description: "Non-contact vision-based inspection to guarantee correct liquid level in every bottle, ensuring regulatory compliance.",
    image: "/case-bottle-level.png",
    url: "/case-studies/bottle-level-inspection",
    tag: "Machine Vision",
  },
  {
    title: "Needle Roller Bearing Inspection",
    description: "Automated system for surface and dimension inspection of needle roller bearings. Robust, high-speed, minimal human intervention.",
    image: "/case-needle-roller.png",
    url: "/case-studies/bearing-inspection",
    tag: "Machine Vision",
  },
  {
    title: "Cap Inspection & Rejection",
    description: "Injection-moulded cap inspection and rejection using industrial vision and robotics for zero-defect packaging.",
    image: "/case-caps.png",
    url: "/case-studies/caps-inspection", 
    tag: "Machine Vision",
  },
];

const plcAutomation = [
  {
    title: "Stirrup Rebar Bending Machine",
    description: "Automated system for custom bending of construction rebars into various shapes with precision and repeatability.",
    image: "/case-stirrup-rebar.png",
    url: "/case-studies/rebar-bending",
    tag: "PLC Automation",
  },
  {
    title: "Wire Crimping Machine",
    description: "Custom PLC-driven wire crimping and cutting machine for high-volume sieve manufacturing.",
    image: "/case-wire-crimping.png",
    url: "/case-studies/wire-crimping",
    tag: "PLC Automation",
  },
  {
    title: "Material Handling Automation",
    description: "Fully automatic handling and bundling system for stirrup bending machine, minimizing manual intervention.",
    image: "/case-material-handling.png",
    url: "/case-studies/material-handling",
    tag: "PLC Automation",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Machine Vision */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            <span className="text-[#b59b1d]">Machine Vision</span> Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
            {machineVision.map((c, idx) => (
              <Link
                href={c.url}
                key={c.title}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                className="group bg-gray-50 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1 overflow-hidden relative flex flex-col"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#b59b1d] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {c.tag}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{c.description}</p>
                  <span className="mt-auto text-[#b59b1d] font-semibold inline-flex items-center group-hover:underline">
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* PLC Automation */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            <span className="text-[#b59b1d]">PLC Automation</span> Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {plcAutomation.map((c, idx) => (
              <Link
                href={c.url}
                key={c.title}
                className="group bg-gray-50 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1 overflow-hidden relative flex flex-col"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#004080] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {c.tag}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{c.description}</p>
                  <span className="mt-auto text-[#004080] font-semibold inline-flex items-center group-hover:underline">
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Robotics (empty, can hide if no data) */}
          {/* 
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 mt-14">
            <span className="text-[#004080]">Robotics</span> Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-6">
            <div className="bg-gray-100 border-dashed border-2 border-gray-300 rounded-2xl h-48 flex items-center justify-center text-gray-400 font-semibold">
              Coming Soon
            </div>
          </div>
          */}
        </div>
      </section>
    </main>
  );
}
