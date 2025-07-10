"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ContactForm() {
  // You can use this ref to access form data for Google Sheets integration
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Google Sheets logic (will add in next step)
    alert("Message sent! (Google Sheets integration coming next)");
    formRef.current?.reset();
  };

  return (
    <div>
      <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">SEND MESSAGE</p>
      <h2 className="text-3xl font-light text-gray-900 mb-8">Tell Us About Your Project</h2>
      <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name
            </Label>
            <Input id="firstName" name="firstName" type="text" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="John" required />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name
            </Label>
            <Input id="lastName" name="lastName" type="text" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="Doe" required />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input id="email" name="email" type="email" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="john@company.com" required />
        </div>
        <div>
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company Name
          </Label>
          <Input id="company" name="company" type="text" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="Your Company Ltd." />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input id="phone" name="phone" type="tel" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="+44 123 456 7890" />
        </div>
        <div>
          <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
            Industry
          </Label>
          <Input id="industry" name="industry" type="text" className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="e.g., Pharmaceutical, Automotive" />
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Project Details
          </Label>
          <Textarea id="message" name="message" rows={6} className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]" placeholder="Tell us about your automation requirements, current challenges, and project goals..." required />
        </div>
        <Button type="submit" size="lg" className="w-full bg-[#004080] hover:bg-[#004080]/90 text-white py-4">
            Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
