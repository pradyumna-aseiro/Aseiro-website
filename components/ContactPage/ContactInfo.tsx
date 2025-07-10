import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
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
                <CardDescription className="text-gray-500">Aseiro Industries Ltd</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-gray-600">
              <p>14-18 Halford House</p>
              <p>Sheffield S1 2AZ</p>
              <p>United Kingdom</p>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="h-4 w-4" />
                <span>+44 782 503 1261</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>pradyumna@aseiro.in</span>
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
                <CardDescription className="text-gray-500">Aseiro Industries Pvt Ltd</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-gray-600">
              <p>Meghana Eastend Apartment, 10-2-2/10</p>
              <p>Nehru Nagar Colony, West Marredpally, Secunderabad</p>
              <p>Hyderabad, Telangana, India, 500026</p>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="h-4 w-4" />
                <span>+91 789 371 5471</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@aseiro.in</span>
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
                <span>Monday - Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
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
  );
}
