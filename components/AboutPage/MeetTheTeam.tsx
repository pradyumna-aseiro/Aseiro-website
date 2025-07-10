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
      "With 17+ years in automation, Abhijeet built VAP into a leading brand trusted by OEMs and factories across South India. At Aseiro, he leverages his industry network and expertise to deliver practical, modern automation and vision systems.",
    img: "/Team/team-abhijeet.png",
    linkedin: "https://www.linkedin.com/in/abhijeet-madnurkar-27a15142/",
    email: "info@aseiro.in",
  },
  {
    name: "Pradyumna Madnurkar",
    title: "Co-Founder & Robotics Engineer",
    specialty: "Robotics & Intelligent Systems",
    summary:
      "Pradyumna holds a Master’s in Robotics and has built advanced robotic systems for global aerospace and defense clients. Backed by a UK Global Talent Visa, he leads Aseiro’s development of intelligent automation and vision solutions for modern manufacturing.",
    img: "/Team/team-pradyumna.png",
    linkedin: "https://www.linkedin.com/in/pradyumnam/",
    email: "pradyumna@aseiro.in",
  },
  {
    name: "Subbarao Tadikonda",
    title: "Business Development",
    specialty: "Tech Project Leadership",
    summary:
      "With 16+ years leading projects at Piramal, TATA, and Mojay Group, Subbarao specializes in automation, machine vision, and embedded systems. He drives business development at Aseiro, leveraging deep technical and leadership experience across IT and manufacturing.",
    img: "/Team/team-subbarao.png",
    linkedin: "https://www.linkedin.com/in/subbarao-business-development-171119301/",
    email: "subbarao@aseiro.in",
  },
  {
    name: "Sriranga Puppala",
    title: "Automation Engineer",
    specialty: "Embedded Systems & Automation",
    summary:
      "Sriranga specializes in industrial automation and embedded systems, with experience in the semiconductor industry. At Aseiro, he engineers smart vision robotics and automation solutions for modern manufacturing.",
    img: "/Team/team-sriranga.png",
    linkedin: "https://www.linkedin.com/in/sriranga-puppala-656428200",
    email: "design.sriranga@aseiro.in",
  },
  {
    name: "Parth Madnurkar",
    title: "Instrumentation Engineer",
    specialty: "Machine Vision & IoT",
    summary:
      "Parth combines expertise in PLC programming, machine vision, and robotics with hands-on innovation in IoT, energy harvesting, and voice-controlled systems. At Aseiro, he leads next-gen automation and tech-driven solutions across industries.",
    img: "/Team/team-parth.png",
    linkedin: "https://www.linkedin.com/in/parth-madnurkar-3b1123279/",
    email: "design.parth@aseiro.in",
  },
  {
    name: "Shriya Rai Agarwal",
    title: "Marketing Expert",
    specialty: "Global Marketing Strategy",
    summary:
      "Shriya is an international marketing expert with 5+ years’ experience, building creative strategies and leading campaigns across Europe, the UK, Asia, and beyond. At Aseiro, she drives global brand and marketing strategy, making the company a trusted name in machine vision solutions.",
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
          <span className="text-gray-500">Meet Our <span className="text-[#b59b1d]">Team</span></span>
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
