import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Vision-Driven Innovation",
      description:
        "We see beyond current limitations, constantly pushing the boundaries of what's possible in automation and machine vision technology.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision in Everything",
      description:
        "From our engineering processes to customer service, we maintain the highest standards of accuracy and attention to detail.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Collaborative Solutions",
      description:
        "We work as partners with our clients, combining their industry expertise with our technical knowledge to create optimal solutions.",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">OUR VALUES</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Principles That
            <br />
            Drive Excellence
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#004080]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#004080]">{value.icon}</div>
                </div>
                <CardTitle className="text-[#004080] font-light text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
