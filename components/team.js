import { TeamCard } from "./teamCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function Team() {
  const teamMembers = [
    {
      imgUrl: "tony.jpg",
      name: "Tony Martinez",
      title: "President",
      about: "With over 30 years of experience in Operations Management and Logistics, Tony Martinez leads Protosharp Industries, a top consulting firm in Southern California for U.S. Government and Defense Industry needs. His leadership builds high-performance teams using Lean and Six Sigma techniques for a competitive edge. Notably, he has contributed to firms like Bombardier Aerospace, Goodrich Landing Gear, Hughes Electronics, and Rockwell Collins. Martinez holds an MA in Management from National University, a BS in Industrial Technology-Electronics from California State University-Long Beach, and APICS CPIM and CIRM certifications. He's a Board member of APICS Inland Empire Chapter and contributes to local logistics and supply chain programs.",
    },
    {
      imgUrl: "hank.jpg",
      name: "Hank Rogers",
      title: "Senior Consultant",
      about: "Hank Rogers, a distinguished manufacturing consultant, has made an indelible mark with his prowess in quality systems, Six Sigma, and Lean methodologies. With a trailblazing career spanning the U.S. and Latin America, Hank's achievements include elevating aerospace SPC programs and establishing thriving factories. Notably, he spearheaded a $20M savings initiative alongside a major Mexican auto plant. Hank's expertise extends across diverse sectors such as finance, aerospace, healthcare, and education. Holding degrees from prestigious institutions like Notre Dame, Illinois State, and Cal Poly Pomona, Hank's contributions have earned him the esteemed Distinguished Instructor Award from UC Irvine.",
    },
    {
      imgUrl: "lisa.jpg",
      name: "Lisa Anderson",
      title: "Senior Consultant",
      about: "Lisa Anderson is a seasoned business executive with a strong track record in operations, project management, and supply chain optimization. She notably led an operational turnaround and merger at Attends Healthcare, achieving impressive inventory turnover, cost reduction, and improved service levels. Lisa holds an MBA in Finance from California State University, Fullerton, and a BS in Business Administration from the University of North Carolina, Chapel Hill. Currently, she serves as President of the APICS Inland Empire Chapter.",
    },
    {
        imgUrl: "fuentes.jpg",
        name: "Cecelia Fuentes",
        title: "Business Development Specialist",
        about: "Cecelia Fuentes, a seasoned consultant, has driven business development, training, and project management in Southern California. Notably, at Lockheed Martin, she spearheaded security protocol implementation for the Transportation Security Administration project across US airports. As head of Advanced Consulting Associates, Cecelia excels in fundraising, event production, marketing, and research, enhancing Protosharp's contract management. With degrees from UCLA and The London School of Economics, including an MSc. in International Political Economy, her expertise shines.",
      },
  ];

  return (

    <div id="team" className="bg-gray-900 p-4 content-center">
      <div className="lg:p-15">
        <h1 className={`text-white lg:text-7xl text-6xl text-center pt-3 ${teko.className}`}>Our Team</h1>
        <Carousel showThumbs={false}>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <TeamCard {...member} />
        </div>
      ))}
    </Carousel>
    </div>
    </div>
  );
}