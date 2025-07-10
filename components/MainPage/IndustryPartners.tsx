// components/IndustryPartners.tsx

import Image from "next/image";

const partners = [
  {
    name: "VAP",
    logo: "/Partners/vap.png", 
    alt: "Vinayak Automation Products logo"
  },
  {
    name: "L&T",
    logo: "/Partners/lnt.png",
    alt: "Larson and Turbo logo"
  },
  {
    name: "Hikrobot",
    logo: "/Partners/hikrobot.png",
    alt: "Hikrobot logo"
  },
  {
    name: "NRB",
    logo: "/Partners/nrb.png",
    alt: "NRB logo"
  }
];

export default function IndustryPartners() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 font-mono">Industry Partners</h2>
        <p className="mb-8 text-lg text-gray-600 max-w-2xl">
          At Aseiro, we're proud to collaborate with some of the world's most respected manufacturers and brands. Our industry partners trust us to deliver innovative automation and machine vision solutions that drive quality, efficiency, and competitive advantage in their operations.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center w-56 h-32 hover:shadow-lg transition"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={160}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2 font-mono">
            Why Partner With Us?
          </h3>
          <p className="text-gray-700 text-base">
            By partnering with Aseiro, you join a network of forward-thinking companies that value innovation, reliability, and long-term growth. We bring deep expertise in automation, flexible integration, and end-to-end support—helping our partners stay ahead in a rapidly changing industrial landscape. Ready to future-proof your operations? Let’s build success together.
          </p>
        </div>
      </div>
    </section>
  );
}
