import { Card } from "@/components/ui/card";

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">GLOBAL PRESENCE</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Two <span className="text-[#b59b1d]">Continents</span>,
            <br />
            One Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-50 border-0 rounded-2xl shadow-md p-8 flex flex-col justify-between h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#004080] border-4 border-[#b59b1d] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#b59b1d] text-lg font-semibold">GB</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Sheffield, United Kingdom</h3>
              <div className="flex flex-col items-center gap-1 text-gray-700 text-base leading-tight">
                <span className="font-semibold">Aseiro Industries Ltd</span>
                <span>14-18 Halford House</span>
                <span>Sheffield S1 2AZ</span>
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                Serving UK, Europe with local engineering support and regulatory compliance expertise.
              </p>
            </div>
          </Card>
          <Card className="bg-gray-50 border-0 rounded-2xl shadow-md p-8 flex flex-col justify-between h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#004080] border-4 border-[#b59b1d] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#b59b1d] text-lg font-semibold">IN</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Hyderabad, India</h3>
              <div className="flex flex-col items-center gap-1 text-gray-700 text-base leading-tight">
                <span className="font-semibold">Aseiro Industries Pvt Ltd</span>
                <span>Meghana Eastend Apartment, 10-2-2/10</span>
                <span>Nehru Nagar Colony, West Marredpally, Secunderabad</span>
                <span>Hyderabad, Telangana, India, 500026</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                R&D hub providing cost-effective solutions and engineering capabilities for global markets.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
