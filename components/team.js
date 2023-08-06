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
      about: "Tony Martinez, a seasoned leader with 40+ years in Operations Management and Logistics, heads Protosharp Industries. His expertise in Lean and Six Sigma drives high-performance teams and competitive advantage. With notable contributions to aerospace and defense companies. Actively involved in professional associations, he is a respected figure in the industry.",
    },
    {
      imgUrl: "hank.jpg",
      name: "Hank Rogers",
      title: "Senior Consultant",
      about: "Hank Rogers is a seasoned consultant with expertise in manufacturing operations, quality systems, Six Sigma, and Lean methodologies. He has achieved significant cost savings in various industries across the US and Latin America. Hank's bilingual proficiency and academic background make him a valuable asset in cross-cultural settings",
    },
    {
      imgUrl: "lisa.jpg",
      name: "Lisa Anderson",
      title: "Senior Consultant",
      about: " Lisa Anderson is a seasoned business executive with a strong background in operations, project management, and supply chain. She has led successful turnarounds and achieved significant improvements in inventory management and service levels. Lisa holds an MBA in Finance and serves as the President of the APICS Inland Empire Chapter.",
    },
    {
        imgUrl: "fuentes.jpg",
        name: "Cecelia Fuentes",
        title: "Business Development Specialist",
        about: "Cecelia Fuentes is an experienced consultant with a strong background in business development, training, and project management. She has worked on significant projects at Lockheed Martin and leads fundraising and marketing initiatives at Advanced Consulting Associates. Her organizational skills are vital to Protosharp's contract development and management.",
      },
  ];

  return (

    <div id="team" className="bg-gray-900 p-4">
        <h1 className={`text-white text-6xl text-center pt-3 ${teko.className}`}>Our Team</h1>
        <Carousel showThumbs={false}>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <TeamCard {...member} />
        </div>
      ))}
    </Carousel>
    </div>
  );
}