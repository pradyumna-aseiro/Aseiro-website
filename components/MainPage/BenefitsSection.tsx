'use client'

import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl lg:text-5xl font-light text-gray-900 mb-16">
          The Many Benefits of <span className="text-[#b59b1d]">Machine Vision</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-quality.jpg" 
              alt="Ensure Compliance"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Automated, Reliable QC</div>
              <div className="text-white font-bold text-2xl mb-3">Ensure Compliance</div>
              <div className="text-white/90 text-base font-light">
                Ensure compliance by inspecting all produced products inline and releasing manual labour from challenging inspection tasks. Reliable technology documents the quality of every produced product.
              </div>
            </div>
          </div>
          {/* Benefit Card 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-optimise.jpg"
              alt="Optimize"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Utilize Quality Data</div>
              <div className="text-white font-bold text-2xl mb-3">Optimize</div>
              <div className="text-white/90 text-base font-light">
                Automating and digitizing inspection provides insights on production. Statistics and recommendations help boost efficiency by adjusting process parameters.
              </div>
            </div>
          </div>
          {/* Benefit Card 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[420px] flex items-end">
            <Image
              src="/benefits-reduce-costs.jpg"
              alt="Reduce Costs"
              fill
              className="object-cover absolute inset-0 z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-8">
              <div className="text-[#b59b1d] font-semibold mb-2 text-lg">Reduce Waste and QC Costs</div>
              <div className="text-white font-bold text-2xl mb-3">Reduce Costs</div>
              <div className="text-white/90 text-base font-light">
                Automated inspection reduces QC costs, helps prevent recall and failure, and minimizes waste and downtime through 100% quality control.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
