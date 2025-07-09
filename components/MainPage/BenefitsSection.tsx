'use client'

import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl lg:text-5xl font-light text-gray-900 mb-6">
          The Many Benefits of <span className="text-[#b59b1d]">Automation 4.0</span>
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-14 font-light">
          <span className="font-semibold text-[#b59b1d]">Automation 4.0</span> represents the next evolution in manufacturing, combining advanced automation, machine vision, IoT, robotics, and AI to enable intelligent, self-optimizing, and connected production environments. Unlock efficiency, quality, and business growth by adopting Automation 4.0 today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-ensure-compliance.png"
              alt="Ensure Compliance"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Smart Compliance & Traceability</div>
              <div className="text-white font-bold text-2xl mb-3">Ensure Every Product Meets Standards</div>
              <div className="text-white/90 text-base font-light">
                Automation 4.0 systems use real-time data, machine vision, and connectivity to ensure 100% inline compliance, effortless traceability, and digital records—reducing human error and audit risks.
              </div>
            </div>
          </div>
          {/* Benefit Card 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-optimise.png"
              alt="Optimize"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Data-Driven Productivity</div>
              <div className="text-white font-bold text-2xl mb-3">Optimize & Automate Decisions</div>
              <div className="text-white/90 text-base font-light">
                Unlock actionable insights with real-time analytics and AI-powered monitoring. Adjust parameters on the fly, reduce downtime, and let your production line self-optimize for greater efficiency.
              </div>
            </div>
          </div>
          {/* Benefit Card 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-reduce-costs.png"
              alt="Reduce Costs"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Cost & Waste Reduction</div>
              <div className="text-white font-bold text-2xl mb-3">Reduce Costs, Boost Profits</div>
              <div className="text-white/90 text-base font-light">
                Automation 4.0 minimizes scrap, rework, and unplanned downtime. Early defect detection and predictive maintenance lead to lower operational costs and a faster return on investment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
