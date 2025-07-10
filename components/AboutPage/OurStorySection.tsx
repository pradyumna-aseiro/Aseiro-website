import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR STORY</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 leading-tight">
              From <span className="text-[#b59b1d]">Vision</span> to
              <br />
              Reality
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
              Aseiro Industries Pvt Ltd was founded to help manufacturers adopt Industry 4.0 standards by integrating robotics, 
              machine vision, and advanced automation into production lines. Our mission is to eliminate human error, boost productivity, 
              and deliver consistent quality across industrial processes.
              </p>
              <p>
              We bring together the technical innovation of a modern startup and the trusted legacy of Vinayak Automation Products - a 
              respected name in industrial automation and instrumentation since 2007. With over 17 years of experience and 10,000 clients, 
              Vinayak Automation has sold various products including sensors, drives, encoders, PLCs, HMIs, and VFDs to clients across sectors.
              </p>
              <p>
              Aseiro was launched to cater to custom requirements in quality inspection, industrial robotics, and smart automation, blending 
              new-generation vision systems with time-tested control architectures. We believe in transforming conventional manufacturing into 
              intelligent, self-optimizing factories.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/automation-facility.png"
              alt="Aseiro Industries facility"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
