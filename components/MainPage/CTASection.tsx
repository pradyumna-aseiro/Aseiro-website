// components/CTASection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#004080] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/precision-manufacturing.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">GET STARTED</p>
        <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
          Ready to <span className="text-[#b59b1d]">Transform</span>
          <br />
          Your Manufacturing?
        </h2>
        <p className="text-xl text-gray-200 mb-12 leading-relaxed">
          Book a free consultation and discover how our automation solutions can drive efficiency and quality in your
          operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#b59b1d] hover:bg-[#b59b1d]/90 text-[#004080] px-8 py-4 text-base font-medium"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-base bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
