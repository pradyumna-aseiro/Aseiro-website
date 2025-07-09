import { Eye, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SolutionsDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">SOLUTION DETAILS</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Deep Dive into Our
            <br />
            Core Technologies
          </h2>
        </div>

        <div className="space-y-20">
          {/* Machine Vision Detail */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-[#004080] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">Machine Vision Systems</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our advanced machine vision solutions provide real-time inspection, measurement, and guidance capabilities that ensure consistent quality and reduce manufacturing defects.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "2D/3D Inspection",
                  "Pattern Recognition",
                  "Barcode/QR Reading",
                  "Surface Analysis",
                  "Dimensional Gauging",
                  "Color Verification",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#004080] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/precision-manufacturing.png"
                alt="Machine Vision System"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Robotics Integration Detail */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/automation-facility.png"
                alt="Robotics Integration"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-[#004080] rounded-2xl flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">Robotics Integration</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Seamlessly integrate robotic systems into your existing production lines to increase throughput, improve precision, and reduce labor costs while maintaining flexibility.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Collaborative Robots",
                  "Industrial Arms",
                  "Custom End Effectors",
                  "Safety Systems",
                  "Path Planning",
                  "Multi-Robot Coordination",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#004080] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}