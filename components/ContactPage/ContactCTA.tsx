import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#004080]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">QUICK START</p>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-8 leading-tight">
          Need Immediate
          <br />
          Assistance?
        </h2>
        <p className="text-xl text-gray-200 mb-12">
          For urgent inquiries or immediate support, reach out to us directly via phone or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+917893715471">
            <Button
              size="lg"
              className="bg-[#b59b1d] hover:bg-[#b59b1d]/90 text-[#004080] px-8 py-4 text-base font-medium"
            >
              Call Now
              <Phone className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="https://wa.me/+917893715471" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#004080] px-8 py-4 text-base bg-transparent"
            >
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
