import { Card } from "@/components/ui/card";

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">GLOBAL PRESENCE</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Two Continents,
            <br />
            One Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gray-50 border-0 p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#FFD700]">GB</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Sheffield, United Kingdom</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium">Aseiro Industries Ltd</p>
                <p>14-18 Halford House</p>
                <p>Sheffield S1 2AZ</p>
                <p>United Kingdom</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Serving UK, Europe with local engineering support and regulatory compliance expertise.
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-gray-50 border-0 p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#004080] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#FFD700]">IN</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Hyderabad, India</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium">Aseiro Industries Pvt Ltd</p>
                <p>Meghana Eastend Apartment, 10-2-2/10,</p>
                <p>Nehru Nagar Colony, West Marredpally, Secunderabad,</p>
                <p>Hyderabad, Telangana, India, 500026</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  R&D hub providing cost-effective solutions and engineering capabilities for global markets.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
