"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IndustriesCTA() {
  return (
    <section className="py-20 bg-[#004080]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-wider text-[#FFD700] mb-4">GET STARTED</p>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-8 leading-tight">
          Ready to Transform<br />Your Industry?
        </h2>
        <p className="text-xl text-gray-200 mb-12">
          Let our experts design a custom automation solution tailored to your industry’s challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] px-8 py-4 text-base font-medium"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-base bg-transparent"
            >
              View Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
