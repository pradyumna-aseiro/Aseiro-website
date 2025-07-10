"use client";

const stats = [
  {
    stat: "99.9%",
    label: "Quality Accuracy",
    description: "Achieved across pharma clients",
    color: "text-blue-500",
  },
  {
    stat: "40%",
    label: "Efficiency Increase",
    description: "Typical improvement in auto lines",
    color: "text-red-500",
  },
  {
    stat: "60%",
    label: "Waste Reduction",
    description: "In food & beverage plants",
    color: "text-green-500",
  },
  {
    stat: "50%",
    label: "Faster Throughput",
    description: "Electronics mfg speed-up",
    color: "text-purple-500",
  },
];

export default function IndustriesStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">PROVEN RESULTS</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Industry <span className="text-[#FFD700]">Impact</span><br />by the Numbers
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-light ${item.color} mb-2`}>{item.stat}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
