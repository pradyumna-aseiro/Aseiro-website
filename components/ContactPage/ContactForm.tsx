"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerDMgrMuUyz5ZuvUBs9vyRRdAxocuvTNnnCXytqqNuo-NApw/formResponse"; // <-- Replace with your live form's POST URL

// Replace these with your form's real entry IDs:
const ENTRY_IDS = {
  firstName: "entry.420838071",
  lastName: "entry.1088519382",
  email: "entry.2102514087",
  company: "entry.55230752",
  phone: "entry.1840582477",
  industry: "entry.2111812928",
  details: "entry.436970204"
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    details: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData();
    data.append(ENTRY_IDS.firstName, form.firstName);
    data.append(ENTRY_IDS.lastName, form.lastName);
    data.append(ENTRY_IDS.email, form.email);
    data.append(ENTRY_IDS.company, form.company);
    data.append(ENTRY_IDS.phone, form.phone);
    data.append(ENTRY_IDS.industry, form.industry);
    data.append(ENTRY_IDS.details, form.details);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data
      });
      setSubmitted(true);
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-green-800 text-lg mt-8">
        Thank you! Your message has been sent. Our team will reach out to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" name="company" value={form.company} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="industry">Industry</Label>
        <Input id="industry" name="industry" value={form.industry} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="details">Project Details</Label>
        <Textarea id="details" name="details" value={form.details} onChange={handleChange} />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-[#004080] text-white">
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
