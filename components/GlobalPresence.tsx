// components/GlobalPresence.tsx
import Image from "next/image";

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">GLOBAL PRESENCE</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Local Expertise,
            <br />
            International Standards
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#b59b1d]">GB</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Sheffield, UK</h3>
            <p className="text-gray-600">
              European headquarters serving UK, Europe with local engineering support and regulatory compliance.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#b59b1d]">IN</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Hyderabad, India</h3>
            <p className="text-gray-600">
              Asian operations center providing cost-effective solutions and R&D capabilities for global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
