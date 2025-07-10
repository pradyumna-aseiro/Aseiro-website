import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR STORY</p>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 leading-tight">
              From Vision to
              <br />
              Global Reality
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Aseiro Industries was born from a simple yet powerful belief: that manufacturing excellence should be
                accessible to companies of all sizes, regardless of their location or resources.
              </p>
              <p>
                Starting with a small team of passionate engineers in Hyderabad, we quickly recognized the gap between
                cutting-edge automation technology and practical, cost-effective implementation for manufacturers.
              </p>
              <p>
                Today, with offices spanning from Sheffield, UK to Hyderabad, India, we serve clients across multiple
                continents, delivering solutions that combine international expertise with local understanding.
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
