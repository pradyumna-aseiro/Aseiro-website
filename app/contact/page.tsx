"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
    preferredOffice: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/aseiro-logo-main.png"
                  alt="Aseiro Industries"
                  width={180}
                  height={72}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                HOME
              </Link>
              <Link
                href="/solutions"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                SOLUTIONS
              </Link>
              <div className="relative group">
                <button className="flex items-center text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide">
                  INDUSTRIES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link
                href="/case-studies"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                CASE STUDIES
              </Link>
              <Link
                href="/about"
                className="text-[#004080] hover:text-[#00A0B0] font-medium font-heading text-sm uppercase tracking-wide"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-[#00A0B0] hover:text-[#004080] font-medium font-heading text-sm uppercase tracking-wide border-b-2 border-[#00A0B0]"
              >
                CONTACT
              </Link>
            </nav>
            <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg px-6 py-2 font-medium">
              LEARN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004080] to-[#00A0B0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading uppercase leading-tight mb-6">
            LET'S SOLVE YOUR MANUFACTURING CHALLENGE
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ready to transform your operations? Share your challenge and we'll design a custom automation solution.
          </p>
          <div className="flex items-center justify-center space-x-4 text-[#FFD700]">
            <Mail className="h-5 w-5" />
            <span className="font-medium">subbarao@aseiro.in</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl border-2 border-[#004080] shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#004080] font-heading uppercase">
                    TELL US ABOUT YOUR PROJECT
                  </CardTitle>
                  <CardDescription className="text-lg">
                    The more details you provide, the better we can tailor our automation solution to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-[#004080] font-medium uppercase text-sm">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-[#004080] font-medium uppercase text-sm">
                          Company *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-[#004080] font-medium uppercase text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-[#004080] font-medium uppercase text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry" className="text-[#004080] font-medium uppercase text-sm">
                          Industry
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                          <SelectTrigger className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]">
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
                        <Label htmlFor="preferredOffice" className="text-[#004080] font-medium uppercase text-sm">
                          Preferred Office
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, preferredOffice: value })}>
                          <SelectTrigger className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]">
                            <SelectValue placeholder="Choose office location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sheffield">Sheffield, UK</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad, India</SelectItem>
                            <SelectItem value="either">Either Location</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-[#004080] font-medium uppercase text-sm">
                        Project Timeline
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                        <SelectTrigger className="mt-1 rounded-lg border-[#004080]/20 focus:border-[#004080]">
                          <SelectValue placeholder="When do you need this solution?" />
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

                    <div>
                      <Label htmlFor="challenge" className="text-[#004080] font-medium uppercase text-sm">
                        Describe Your Manufacturing Challenge *
                      </Label>
                      <Textarea
                        id="challenge"
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        placeholder="Tell us about your current manufacturing challenges, automation needs, quality control requirements, or any specific goals you want to achieve..."
                        className="mt-1 rounded-lg min-h-[120px] border-[#004080]/20 focus:border-[#004080]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#004080] hover:bg-[#004080]/90 text-white rounded-lg font-bold uppercase"
                    >
                      SUBMIT PROJECT CHALLENGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Sheffield Office */}
              <Card className="rounded-2xl border-2 border-[#004080] shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇬🇧</span>
                    <CardTitle className="text-xl font-bold text-[#004080] font-heading uppercase">
                      SHEFFIELD, UK
                    </CardTitle>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700]"></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#00A0B0] mt-1" />
                    <div>
                      <p className="font-medium text-[#004080]">European Headquarters</p>
                      <p className="text-gray-600">
                        Sheffield Technology Park
                        <br />
                        Sheffield, South Yorkshire
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Phone</p>
                      <p className="text-gray-600">+44 114 XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Email</p>
                      <p className="text-gray-600">uk@aseiro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hyderabad Office */}
              <Card className="rounded-2xl border-2 border-[#004080] shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇮🇳</span>
                    <CardTitle className="text-xl font-bold text-[#004080] font-heading uppercase">
                      HYDERABAD, INDIA
                    </CardTitle>
                  </div>
                  <div className="h-1 w-16 bg-[#FFD700]"></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#00A0B0] mt-1" />
                    <div>
                      <p className="font-medium text-[#004080]">Asian Operations Center</p>
                      <p className="text-gray-600">
                        HITEC City
                        <br />
                        Hyderabad, Telangana
                        <br />
                        India - 500081
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Phone</p>
                      <p className="text-gray-600">+91 40 XXXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Email</p>
                      <p className="text-gray-600">subbarao@aseiro.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">WhatsApp</p>
                      <p className="text-gray-600">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#00A0B0]" />
                    <div>
                      <p className="font-medium text-[#004080]">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="rounded-2xl border-0 shadow-xl bg-[#FFD700]/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-8 w-8 text-[#004080]" />
                    <div>
                      <h3 className="font-bold text-[#004080] font-heading uppercase">GLOBAL SUPPORT</h3>
                      <p className="text-gray-600">
                        We respond to all inquiries within 24 hours, regardless of location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading uppercase mb-4">
            PREFER TO TALK DIRECTLY?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our automation experts are ready to discuss your specific manufacturing challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] rounded-lg px-8 font-bold">
              SCHEDULE A CALL
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#FFD700] border border-white hover:border-[#FFD700]"
            >
              VIEW PRODUCT CATALOGUE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00A0B0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/aseiro-logo-light.png"
                alt="Aseiro Industries"
                width={200}
                height={80}
                className="h-16 w-auto mb-4"
              />
            </div>
            <div>
              <nav className="flex flex-wrap gap-6 justify-end">
                <Link href="/" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  HOME
                </Link>
                <Link href="/solutions" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  SOLUTIONS
                </Link>
                <Link href="/industries" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  INDUSTRIES
                </Link>
                <Link href="/case-studies" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  CASE STUDIES
                </Link>
                <Link href="/about" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  ABOUT
                </Link>
                <Link href="/contact" className="hover:text-[#FFD700] font-heading uppercase text-sm">
                  CONTACT
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-200">© 2024 Aseiro Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
