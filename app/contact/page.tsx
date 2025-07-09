import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#004080] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#FFD700]">#SeeMoreDoMore</span>
              <div className="flex items-center space-x-2">
                <a
                  href="https://linkedin.com/company/aseiro-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@AseiroIndustriesPvtLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/+917893715471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-3 h-3 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-200">pradyumna@aseiro.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
            <nav className="hidden md:flex space-x-12">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
              >
                Industries
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[#004080] font-medium text-sm tracking-wide transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#004080] font-medium text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FFD700] after:transform after:scale-x-100"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white px-6 py-2 text-sm font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">GET IN TOUCH</p>
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Let's Discuss Your
              <br />
              <span className="text-[#004080]">Automation</span> Needs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your manufacturing processes? Our team of experts is here to help you find the perfect
              automation solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">SEND MESSAGE</p>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Tell Us About Your Project</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    Industry
                  </Label>
                  <Input
                    id="industry"
                    type="text"
                    className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                    placeholder="e.g., Pharmaceutical, Automotive"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="mt-1 border-gray-300 focus:border-[#004080] focus:ring-[#004080]"
                    placeholder="Tell us about your automation requirements, current challenges, and project goals..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#004080] hover:bg-[#004080]/90 text-white py-4">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">CONTACT INFORMATION</p>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* UK Office */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#004080]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#004080]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium text-gray-900">Sheffield, UK</CardTitle>
                        <CardDescription className="text-gray-500">European Headquarters</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p>Advanced Manufacturing Park</p>
                      <p>Sheffield S60 5WG, United Kingdom</p>
                      <div className="flex items-center space-x-2 pt-2">
                        <Phone className="h-4 w-4" />
                        <span>+44 114 123 4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>uk@aseiro.in</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* India Office */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#004080]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#004080]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium text-gray-900">Hyderabad, India</CardTitle>
                        <CardDescription className="text-gray-500">Asian Operations Center</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p>HITEC City</p>
                      <p>Hyderabad 500081, Telangana, India</p>
                      <div className="flex items-center space-x-2 pt-2">
                        <Phone className="h-4 w-4" />
                        <span>+91 789 371 5471</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>pradyumna@aseiro.in</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#004080]/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#004080]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium text-gray-900">Business Hours</CardTitle>
                        <CardDescription className="text-gray-500">We're here to help</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                      <p className="text-sm text-gray-500 pt-2">
                        Times shown are local to each office. Emergency support available 24/7.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-wider text-[#FFD700] mb-4">QUICK START</p>
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
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#004080] px-8 py-4 text-base font-medium"
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

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/aseiro-logo-main.png"
                alt="Aseiro Industries"
                width={160}
                height={64}
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Global provider of automation and machine vision solutions for modern manufacturing.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Machine Vision
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Robotics Integration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Turnkey Systems
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-600 hover:text-[#004080]">
                    Process Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-gray-600 hover:text-[#004080]">
                    Electronics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#004080]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#004080]">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-[#004080]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">pradyumna@aseiro.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 Aseiro Industries. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/aseiro-industries" className="text-gray-400 hover:text-[#004080]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://youtube.com/@aseiroindustries" className="text-gray-400 hover:text-[#004080]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
