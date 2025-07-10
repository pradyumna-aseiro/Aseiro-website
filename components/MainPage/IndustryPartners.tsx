import Image from "next/image";
import Link from "next/link";
import { Handshake, Award, Lightbulb, ShieldCheck } from "lucide-react";

const partners = [
  { name: "VAP", logo: "/Partners/vap.png", alt: "Vinayak Automation Products logo" },
  { name: "L&T", logo: "/Partners/lnt.png", alt: "Larson and Turbo logo" },
  { name: "Hikrobot", logo: "/Partners/hikrobot.png", alt: "Hikrobot logo" },
  { name: "NRB", logo: "/Partners/nrb.png", alt: "NRB logo" }
];

const benefits = [
  {
    icon: <Lightbulb className="h-7 w-7 text-[#004080]" />,
    title: "Innovation",
    desc: "Access cutting-edge solutions and stay ahead with a partner who thrives on R&D and engineering excellence."
  },
  {
    icon: <Award className="h-7 w-7 text-[#004080]" />,
    title: "Credibility",
    desc: "Work with a trusted name relied on by top manufacturers across sectors—our results speak for themselves."
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#004080]" />,
    title: "Reliability",
    desc: "We deliver robust integration, technical support, and long-term partnerships built on transparency."
  },
  {
    icon: <Handshake className="h-7 w-7 text-[#004080]" />,
    title: "Mutual Growth",
    desc: "Scale your business and expand opportunities—our success is measured by your competitive edge."
  },
];

export default function IndustryPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">COLLABORATORS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Industry Partners & <span className="text-[#b59b1d]">Collaborators</span>
          </h2>
          <p className="max-w-2xl mx-auto text-center text-lg text-gray-700 font-light mb-3">
            We are proud to work with leaders in automation, engineering, and manufacturing. 
            Our partners trust Aseiro for advanced machine vision, seamless integration, and a results-driven approach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-gray-50 rounded-2xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center h-32"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={140}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">BENEFITS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Why <span className="text-[#b59b1d]">Partner</span> With Us?
          </h2>
          <p className="max-w-2xl mx-auto text-center text-lg text-gray-700 font-light mb-3">
            At Aseiro, we go beyond products—we forge long-term collaborations with our partners, 
            enabling them to lead in efficiency, quality, and digital transformation. Here's what you 
            gain when you choose to partner with us:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={b.title}
                className="bg-[#f8f9fa] rounded-2xl p-7 flex flex-col items-center text-center shadow hover:shadow-lg transition group"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-4 bg-white rounded-xl shadow group-hover:scale-110 transition">
                  {b.icon}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-base">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#fffbe6] border-l-4 border-[#b59b1d] p-8 rounded-2xl shadow-lg mb-4">
          <p className="text-base text-gray-800 font-light max-w-2xl mb-4 md:mb-0">
            Ready to join a network of forward-thinking manufacturers, brands, and solution providers? 
            Partner with Aseiro and unlock innovation, support, and growth for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3 bg-[#b59b1d] hover:bg-[#cfb856] text-white text-lg font-semibold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-[#b59b1d]/60 focus:ring-offset-2"
          >
            Become a Partner
          </Link>
        </div>

      </div>
    </section>
  );
}
