import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, HeartHandshake, Puzzle, Shapes } from "lucide-react";

export default function WhatSetsUsApart() {
  const items = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "Hundreds of successful deployments across Pharma, Automotive, F&B, Electronics and more.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "End-to-End Support",
      description: "From planning and integration to training and maintenance, we stay with you every step of the way.",
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Innovative Integration",
      description: "We blend machine vision, robotics, and real-time controls for faster inspection and lower costs, up to 70% inspection time reduction.",
    },
    {
      icon: <Shapes className="h-8 w-8" />,
      title: "Custom-Tailored Systems",
      description: "We create modular solutions that fit perfectly into your factory setup, whether it's a small upgrade or a full transformation.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">WHAT SETS US APART</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Why Choose <span className="text-[#b59b1d]">ASEIRO</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Our approach combines deep industry expertise, a passion for innovation, and a relentless focus on delivering automation solutions for every client.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} className="bg-gray-50 border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#004080]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#004080]">
                  {item.icon}
                </div>
                <CardTitle className="text-[#004080] font-light text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
