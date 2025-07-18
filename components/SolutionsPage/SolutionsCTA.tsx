import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionsCTA() {
  return (
    <section className="py-20 bg-[#004080]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">GET STARTED</p>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-8 leading-tight">
          Ready to Automate
          <br />
          Your Production?
        </h2>
        <p className="text-xl text-gray-200 mb-12">
          Let our experts design a custom automation solution tailored to your specific requirements and industry standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            asChild
          >
            <Link href="/contact">Get Consultation</Link>
          </Button>
          <Link href="/case-studies">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-base bg-transparent"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
