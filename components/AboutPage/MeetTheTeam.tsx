// components/MeetTheTeam.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Abhijeet Madnurkar",
    title: "Co-Founder & Managing Director",
    specialty: "Industrial Automation Leadership",
    summary:
      "Built VAP into a top automation brand. Trusted for reliable solutions and deep OEM connections.",
    img: "/Team/team-abhijeet.png",
    linkedin: "https://www.linkedin.com/in/abhijeet-madnurkar-27a15142/",
    email: "info@aseiro.in",
  },
  {
    name: "Pradyumna Madnurkar",
    title: "Co-Founder & Robotics Engineer",
    specialty: "Robotics & Intelligent Systems",
    summary:
      "Ex-Rivelin Robotics, M.S. Sheffield. Drives vision, robotics, and AI for global manufacturing clients.",
    img: "/Team/team-pradyumna.png",
    linkedin: "https://www.linkedin.com/in/pradyumnam/",
    email: "pradyumna@aseiro.in",
  },
  {
    name: "Subbarao Tadikonda",
    title: "Business Development",
    specialty: "Tech Project Leadership",
    summary:
      "Ex-Piramal, TATA. Deep expertise in systems, SPM, plant automation, and international project delivery.",
    img: "/Team/team-subbarao.png",
    linkedin: "https://www.linkedin.com/in/subbarao-business-development-171119301/",
    email: "subbarao@aseiro.in",
  },
  {
    name: "Sriranga Puppala",
    title: "Automation Engineer",
    specialty: "Embedded Systems & Automation",
    summary:
      "Expert in PLC, HMI, vision robotics for material handling and automation in manufacturing plants.",
    img: "/Team/team-sriranga.png",
    linkedin: "https://www.linkedin.com/in/sriranga-puppala-656428200",
    email: "design.sriranga@aseiro.in",
  },
  {
    name: "Parth Madnurkar",
    title: "Instrumentation Engineer",
    specialty: "Machine Vision & IoT",
    summary:
      "Leads next-gen machine vision and robotics, with IoT, 3D modeling, and multiple tech innovations.",
    img: "/Team/team-parth.png",
    linkedin: "https://www.linkedin.com/in/parth-madnurkar-3b1123279/",
    email: "design.parth@aseiro.in",
  },
  {
    name: "Shriya Rai Agarwal",
    title: "Marketing Expert",
    specialty: "Global Marketing Strategy",
    summary:
      "Ex-agency founder. Leads brand, content, and international campaigns for Aseiro’s growth.",
    img: "/Team/team-shriya.png",
    linkedin: "https://www.linkedin.com/in/shriyaraiagarwal",
    email: "hello@aseiro.in",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-12">
          <span className="text-[#b59b1d]">Meet Our Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="bg-white shadow hover:shadow-lg rounded-2xl border-2 border-[#b59b1d] flex flex-col items-center text-center py-8 px-6 min-h-[430px] transition-all duration-300"
            >
              <div className="flex justify-center w-full mb-4">
                <div className="w-[120px] h-[120px] rounded-full border-4 border-[#b59b1d] overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-[#004080]">{member.name}</div>
              <div className="text-gray-700 text-sm mb-1">{member.title}</div>
              <div className="text-xs font-medium text-[#b59b1d] mb-2">{member.specialty}</div>
              <div className="text-gray-600 text-sm mb-4">{member.summary}</div>
              <div className="flex justify-center gap-4 mt-auto">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5 text-[#0077B5] hover:text-[#004080]" />
                </a>
                <a href={`mailto:${member.email}`} aria-label="Email">
                  <FaEnvelope className="w-5 h-5 text-[#004080] hover:text-[#b59b1d]" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
