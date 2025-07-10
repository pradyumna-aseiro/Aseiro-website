import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Abhijeet Madnurkar",
      title: "Co-Founder & Managing Director",
      bio: "With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known brand across Hyderabad and South India. His strong relationships with OEMs, integrators, and factories have made him a trusted name in the industry. He has helped hundreds of clients adopt reliable automation solutions, from PLCs and HMIs to sensors and motion control. At Aseiro, he brings this powerful network and on-ground experience to deliver practical, modern automation and machine vision systems.",
      specialty: "Industrial Automation Leadership & Solution Delivery",
      img: "/team-abhijeet.png",
      linkedin: "https://www.linkedin.com/in/abhijeet-madnurkar-27a15142/",
      email: "info@aseiro.in",
    },
    {
      name: "Pradyumna Madnurkar",
      title: "Co-Founder & Robotics Engineer",
      bio: "With a Master’s in Robotics from the University of Sheffield and hands-on experience at Rivelin Robotics, Pradyumna has contributed to building microfactories, custom end-of-arm tooling, and PLC-integrated robotic systems. His work spans global automation deployments in aerospace and defense sectors. Backed by a UK Global Talent Visa, his vision is to scale Aseiro into a global provider of machine vision and automation solutions. At Aseiro, he leads the development of intelligent robotic and vision systems tailored to the evolving needs of modern manufacturing.",
      specialty: "Robotics Engineering & Intelligent Systems",
      img: "/team-pradyumna.png",
      linkedin: "https://www.linkedin.com/in/pradyumnam/",
      email: "pradyumna@aseiro.in",
    },
    {
      name: "Subbarao Tadikonda",
      title: "Business Development",
      bio: "With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies, Subbarao brings deep experience in product and systems design, embedded systems, SPM, plant automation, machine vision, and robotics. He has led multi-disciplinary teams across global offshore development centres in both IT and manufacturing industries. At Aseiro, he leads the Business Development function, actively driving new enquiries and orders. He holds a degree in Mechanical Engineering from Pune University and a Master’s in Operations Management from BITS Pilani.",
      specialty: "Business Development & Technical Project Leadership",
      img: "/team-subbarao.png",
      linkedin: "https://www.linkedin.com/in/subbarao-business-development-171119301/",
      email: "subbarao@aseiro.in",
    },
    {
      name: "Sriranga Puppala",
      title: "Automation Engineer",
      bio: "Sriranga is an Automation Engineer with a Bachelor's in Electrical and Electronics Engineering and experience in the Semiconductor Industry. He specializes in Industrial Automation and Embedded Systems, combining hardware and software to build smart automation solutions. At ASEIRO, he designs and implements custom systems using PLCs (Siemens, ABB, Delta, RENU), HMIs, embedded controllers, and industrial cameras. His work focuses on Vision Robotics for material handling and industrial automation. Driven by innovation, he aims to create efficient and intelligent automation systems.",
      specialty: "Industrial Automation & Embedded Systems",
      img: "/team-sriranga.png",
      linkedin: "https://www.linkedin.com/in/sriranga-puppala-656428200",
      email: "design.sriranga@aseiro.in",
    },
    {
      name: "Parth Madnurkar",
      title: "Instrumentation Engineer",
      bio: "With a strong foundation in Instrumentation and Control Engineering from Vishwakarma Institute of Technology and experience at Vinayak Automation Products, Parth has contributed to PLC programming, 3D modeling, machine vision, and advanced robotics. His work spans IoT-based healthcare devices, energy-harvesting solutions, and voice-controlled robotics, reflected in multiple publications and intellectual property filings. Driven by a passion for automation and innovative problem-solving, he aims to scale next-generation technologies across various industries. At Aseiro Industries, Parth leads efforts in machine vision, industrial automation, and robotics, shaping the future of modern manufacturing.",
      specialty: "Instrumentation & Control",
      img: "/team-parth.png",
      linkedin: "https://www.linkedin.com/in/parth-madnurkar-3b1123279/",
      email: "design.parth@aseiro.in",
    },
    {
      name: "Shriya Rai Agarwal",
      title: "Marketing Expert",
      bio: "Shriya brings 5+ years of global marketing experience, having led campaigns across Europe, the UK, Asia, North America, and the Middle East. She began with her own agency, crafting creative strategies for international clients, and has been featured in The Entrepreneurs Ethics and Women in Business Net. A Master’s graduate in Advertising & Marketing from the University of Leeds, she thrives on building impactful campaigns and learning through the process. At Aseiro, Shriya leads marketing and brand strategy, working to make Aseiro a trusted name in machine vision solutions.",
      specialty: "Global Marketing & Brand Strategy",
      img: "/team-shriya.png",
      linkedin: "https://www.linkedin.com/in/shriyaraiagarwal",
      email: "hello@aseiro.in",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">MEET THE TEAM</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
          <span className="text-[#FFD700]">Leadership</span> & Visionaries
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
