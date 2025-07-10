import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Abhijeet Madnurkar",
      title: "Co-Founder & CTO",
      bio: "Abhijeet leads our innovation in machine vision, driving development of world-class algorithms and hardware integration for demanding manufacturing environments.",
      specialty: "Vision Systems & Deep Learning Specialist",
      img: "/abhi-team.jpg",
      linkedin: "https://linkedin.com/in/abhijeetmadnurkar",
      email: "abhi@aseiro.in",
    },
    {
      name: "Subbarao",
      title: "Co-Founder & Business Development Lead",
      bio: "Subbarao heads Aseiro’s business strategy, bringing a passion for client success and a deep understanding of automation needs across diverse sectors.",
      specialty: "Sales, Operations & Client Relations",
      img: "/rao-team.jpg",
      linkedin: "https://linkedin.com/in/subbarao-aseiro",
      email: "subbarao@aseiro.in",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">MEET THE TEAM</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Leadership & Visionaries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our leadership blends technical excellence, business acumen, and global industry experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="bg-white border-0 shadow-sm flex flex-col md:flex-row items-center gap-6 px-8 py-6"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={110}
                height={110}
                className="rounded-full object-cover border-4 border-[#004080]"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#004080] mb-2">{member.name}</h3>
                <div className="text-gray-700 mb-2">{member.title}</div>
                <div className="text-gray-500 text-sm mb-3">{member.specialty}</div>
                <p className="text-gray-600">{member.bio}</p>
                <div className="flex gap-2 mt-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:underline text-sm">LinkedIn</a>
                  <a href={`mailto:${member.email}`} className="text-[#004080] hover:underline text-sm">Email</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
