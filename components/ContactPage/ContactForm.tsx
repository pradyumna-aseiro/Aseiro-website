// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Google Form POST endpoint
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfQOSwYyVUpWO7mJKrt0KFFdPiM9wDXD8A62AjEwNqZpYxM-g/formResponse";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors", // required!
        body: formData,
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Submission failed. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input name="entry.420838071" id="firstName" type="text" required placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input name="entry.1088519382" id="lastName" type="text" required placeholder="Doe" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input name="entry.2102514087" id="email" type="email" required placeholder="john@company.com" />
      </div>

      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input name="entry.55230752" id="company" type="text" placeholder="Your Company Ltd." />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input name="entry.1840582477" id="phone" type="tel" placeholder="+44 123 456 7890" />
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <Input name="entry.2111812928" id="industry" type="text" placeholder="e.g., Pharmaceutical, Automotive" />
      </div>

      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea name="entry.436970204" id="message" rows={6} placeholder="Tell us about your automation requirements, current challenges, and project goals..." />
      </div>

      {submitted ? (
        <div className="text-green-700 bg-green-50 rounded px-4 py-3">
          Thank you! Your message has been sent. Our team will reach out to you soon.
        </div>
      ) : (
        <Button type="submit" size="lg" className="w-full bg-[#004080] hover:bg-[#004080]/90 text-white py-4" disabled={submitting}>
          {submitting ? "Sending..." : "Send Message"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}

      {error && <div className="text-red-700 bg-red-50 rounded px-4 py-3">{error}</div>}
    </form>
  );
}
