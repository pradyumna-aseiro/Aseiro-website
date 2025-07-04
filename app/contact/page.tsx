"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cog, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    challenge: "",
    timeline: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#13315C] rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#13315C] font-mono">ASEIRO</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#13315C] font-medium">
                Home
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-[#13315C] font-medium">
                Solutions
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-[#13315C] font-medium">
                Industries
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-[#13315C] font-medium">
                Case Studies
              </Link>
              <Link href="/why-aseiro" className="text-gray-700 hover:text-[#13315C] font-medium">
                Why Aseiro
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#13315C] font-medium">
                About
              </Link>
              <Link href="/contact" className="text-[#13315C] font-medium border-b-2 border-[#13315C]">
                Contact
              </Link>
            </nav>
            <Button className="bg-[#20CFCF] hover:bg-[#20CFCF]/90 text-white rounded-lg">Book Consultation</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] to-[#E7EEF6] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#13315C] font-mono leading-tight mb-6">
            Let's Solve Your Manufacturing Challenge
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your operations? Share your challenge and we'll design a custom solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#13315C] font-mono">
                    Tell Us About Your Project
                  </CardTitle>
                  <CardDescription className="text-lg">
                    The more details you provide, the better we can tailor our solution to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-[#13315C] font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-[#13315C] font-medium">
                          Company *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="mt-1 rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-[#13315C] font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-[#13315C] font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry" className="text-[#13315C] font-medium">
                          Industry
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                          <SelectTrigger className="mt-1 rounded-lg">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                            <SelectItem value="packaging">Packaging</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="warehousing">Warehousing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-[#13315C] font-medium">
                          Project Timeline
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                          <SelectTrigger className="mt-1 rounded-lg">
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                            <SelectItem value="short">Short term (3-6 months)</SelectItem>
                            <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                            <SelectItem value="long">Long term (12+ months)</SelectItem>
                            <SelectItem value="planning">Just planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="challenge" className="text-[#13315C] font-medium">
                        Describe Your Challenge *
                      </Label>
                      <Textarea
                        id="challenge"
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        placeholder="Tell us about your current manufacturing challenges, what you're trying to achieve, and any specific requirements..."
                        className="mt-1 rounded-lg min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#13315C] hover:bg-[#13315C]/90 text-white rounded-lg"
                    >
                      Submit Project Challenge
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#13315C] font-mono">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#20CFCF]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#20CFCF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#13315C]">Call Us</p>
                      <p className="text-gray-600">+44 20 1234 5678 (UK)</p>
                      <p className="text-gray-600">+91 98765 43210 (India)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#20CFCF]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#20CFCF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#13315C]">Email</p>
                      <p className="text-gray-600">solutions@aseiro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#20CFCF]/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#20CFCF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#13315C]">WhatsApp</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#13315C] font-mono">Global Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#20CFCF]" />
                      <h3 className="font-semibold text-[#13315C]">United Kingdom</h3>
                    </div>
                    <p className="text-gray-600 ml-7">
                      London Office
                      <br />
                      123 Innovation Street
                      <br />
                      London, EC1A 1BB
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#20CFCF]" />
                      <h3 className="font-semibold text-[#13315C]">India</h3>
                    </div>
                    <p className="text-gray-600 ml-7">
                      Mumbai Office
                      <br />
                      456 Tech Park
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="rounded-2xl border-0 shadow-lg bg-[#20CFCF]/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-[#20CFCF]" />
                    <div>
                      <h3 className="font-semibold text-[#13315C]">Quick Response</h3>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
