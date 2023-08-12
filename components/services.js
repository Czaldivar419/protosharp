import { ServiceCard } from "./serviceCard";
import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function Services() {

    const operationsManagement = "Tony Martinez and his team at Protosharp Industries excel in the field of Operations, They have successfully overcome technical and supply chain challenges, ensuring smooth transitions from development to production. With a solid reputation as leaders in the field, they continue to support major aerospace, defense, and manufacturing industries ithe Southwestern US."
    const supplyChain = "Protosharp Industries has established themselves as leaders in Supply Chain Management, consistently delivering exceptional results to their clients. Their track record of successful projects reflects their ability to overcome challenges, optimize operations, and drive continuous improvement in all aspects of supply chain and logistics management."
    const manu = "The team's keen insights and proactive approach have proven instrumental in aligning manufacturing and sales activities, resulting in enhanced efficiency and customer satisfaction. Their dedication to continuous improvement and strategic planning has positioned them as leaders in driving manufacturing and sales success for their clients."

  const services = [
    {
      title: "Operations Management",
      description: `${operationsManagement}`,
      imgUrl: "/torpedo.webp",
    },
    {
      title: "Supply Chain Management",
      description: `${supplyChain}`,
      imgUrl: "/banner.jpg",
    },
    {
      title: "Manufacturing and Sales Planning",
      description: `${manu}`,
      imgUrl: "/banner1.jpg",
    },
  ];

  return (
    <div 
    id="services"
    className="grid bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/black.jpg")`,
        backgroundPosition: "center",
      }}
    >
    <div className="md:p-9" id="services">
        <h1 className={`text-white lg:text-7xl text-6xl text-center pt-4 ${teko.className}`}>Services</h1>
      <div>
        <div className="p-4 pt-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
