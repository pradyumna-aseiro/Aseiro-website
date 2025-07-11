"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const caseStudies = [
  {
    title: "Printing Defect Inspection & Rejection",
    description: "Real-time detection and rejection of misprinted labelled strips on manufacturing lines using advanced machine vision.",
    image: "/case-printing-inspection.png",
    tags: ["Machine Vision"],
    applications: [
      "Misprint Detection", "Label Rejection", "Inline Quality Control", "Auto Sorting"
    ]
  },
  {
    title: "Tablet Presence/Absence Inspection",
    description: "Ensure 100% tablet presence in every blister with high-speed automated inspection and rejection.",
    image: "/case-tablet-inspection.png",
    tags: ["Machine Vision"],
    applications: [
      "Tablet Counting", "Missing Tablet Detection", "Blister Pack Inspection"
    ]
  },
  {
    title: "Bottle Level Inspection",
    description: "Non-contact vision-based inspection to guarantee correct liquid level in every bottle, ensuring regulatory compliance.",
    image: "/case-bottle-level.png",
    tags: ["Machine Vision"],
    applications: [
      "Fill Level Control", "Leak Detection", "Cap Presence", "Fast Throughput"
    ]
  },
  {
    title: "Needle Roller Bearing Inspection",
    description: "Automated system for diameter and defect checking of needle roller bearings using industrial cameras.",
    image: "/case-needle-roller.png",
    tags: ["Machine Vision"],
    applications: [
      "Diameter Measurement", "Surface Defect Detection", "Automated Sorting"
    ]
  },
  {
    title: "Injection Moulded Caps Inspection & Rejection",
    description: "Vision system to detect, inspect, and reject defective injection moulded caps at high speed.",
    image: "/case-caps.png",
    tags: ["Machine Vision"],
    applications: [
      "Cap Defect Detection", "Orientation Check", "Color/Print Verification"
    ]
  },
  {
    title: "Stirrup Rebar Bending Machine Automation",
    description: "Automated bending and pulling of rebars into custom shapes with PLC-based precision control.",
    image: "/case-stirrup-rebar.png",
    tags: ["Process Automation"],
    applications: [
      "Automatic Bending", "Batch Programming", "High Torque Control"
    ]
  },
  {
    title: "Wire Crimping Machine Automation",
    description: "Precision wire length setting, crimping, and cutting for sieve and mesh production with user-friendly HMI.",
    image: "/case-wire-crimping.png",
    tags: ["Process Automation"],
    applications: [
      "Wire Cutting", "Crimp Detection", "Length Measurement", "Batch Handling"
    ]
  },
  {
    title: "Material Handling for Rebar Bending",
    description: "Conveyor and transfer system for rebar lines, integrating sensors and logic for hands-free operation.",
    image: "/case-material-handling.png",
    tags: ["Process Automation"],
    applications: [
      "Conveyor Control", "Automated Transfer", "Sensor Integration"
    ]
  }
];

export default function CaseStudiesGrid() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10">
          <span className="text-[#b59b1d]">Case Studies</span> by Aseiro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            // <a href={`/case-studies/${study.slug}`} key={idx} className="group">
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 rounded-2xl group-hover:scale-110"
                />
                {/* Tag(s) in top-left */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-yellow-400 text-xs text-gray-900 font-bold px-3 py-1 rounded-full shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40 rounded-2xl"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-white text-sm mb-2">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.applications.map((app, i) => (
                      <span
                        key={i}
                        className="flex items-center text-xs text-white bg-black/40 px-2 py-1 rounded-full"
                      >
                        <CheckCircle className="h-3 w-3 mr-1 text-[#b59b1d]" />
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-[#b59b1d]/80"></div>
              </div>
            </div>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
}
