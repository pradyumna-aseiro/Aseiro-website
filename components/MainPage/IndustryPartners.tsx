// components/IndustryPartners.tsx

import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "VAP", logo: "/Partners/vap.png", alt: "Vinayak Automation Products logo" },
  { name: "L&T", logo: "/Partners/lnt.png", alt: "Larson and Turbo logo" },
  { name: "Hikrobot", logo: "/Partners/hikrobot.png", alt: "Hikrobot logo" },
  { name: "NRB", logo: "/Partners/nrb.png", alt: "NRB logo" }
];

const benefits = [
  {
    title: "Innovation",
    desc: "Work with an agile team focused on next-gen machine vision & automation."
  },
  {
    title: "Full Support",
    desc: "From first meeting to after-sales, we provide end-to-end technical and business support."
  },
  {
    title: "Competitive Edge",
    desc: "Leverage our expertise to future-proof your operations and outperform the market."
  },
  {
    title: "Reliability",
    desc: "We believe in trust, transparency, and long-term growth for every partnership."
  }
];

export default function IndustryPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-sans">
          Industry Collaborators
        </h2>
        <p className="mb-10 text-lg text-gray-600 max-w-2xl font-sans">
          We are trusted by industry leaders in automation, engineering, and manufacturing. Our partners rely on Aseiro for innovative machine vision solutions, robust integration, and a relationship built on real results.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-50 rounded-xl shadow-sm p-6 flex items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl shadow-sm max-w-3xl mb-10">
          <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-sans">
            Why Partner With Aseiro?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-3 text-gray-700 font-sans list-none pl-0">
            {benefits.map((b) => (
              <li key={b.title} className="mb-2">
                <span className="font-semibold text-yellow-900">{b.title}:</span> {b.desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-base text-gray-600 font-sans mb-2 md:mb-0">
            Ready to explore a partnership? We’re always open to collaborating with forward-thinking brands, manufacturers, and solution providers.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
