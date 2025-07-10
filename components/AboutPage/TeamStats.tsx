import { Users, Globe, Award } from "lucide-react";

export default function TeamStats() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      stat: "50+",
      label: "Expert Engineers",
      description: "Specialized in automation, robotics, and machine vision systems",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      stat: "15+",
      label: "Countries Served",
      description: "Global reach with local expertise and support",
    },
    {
      icon: <Award className="h-8 w-8" />,
      stat: "200+",
      label: "Projects Delivered",
      description: "Successful implementations across diverse industries",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-white">{item.icon}</div>
              </div>
              <div className="text-4xl font-light text-[#004080] mb-2">{item.stat}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{item.label}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
