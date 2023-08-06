import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function About() {
  return (
    <div id="about" className="bg-gray-900">
      <h1 className={`text-6xl text-white text-center p-4 pb-1 ${teko.className}`}>About Us</h1>
      <div className="m-4 border-2 "
        style={{
          backgroundImage: `url("/aboutImg.jpg")`,
          height: "300px",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      ></div>
      <p className="text-white text-md text-center p-4">
      For over fourty years, Tony Martinez has worked to establish a solid reputation 
      as a leader in the field of Manufacturing Operations, Continuous Improvement, 
      APICS Training, Supply Chain and Logistics Management. As President of Protosharp Industries, 
      Tony and his team of Senior Consultants are supporting some of the biggest names in the 
      aerospace, defense and manufacturing industries throughout Southern California and the Southwestern US.
      </p>
      <p className="text-white text-md text-center p-4">
      At PROTOSHARP Industries, our guiding principles are at the core of everything we do. We believe in fostering win-win relationships and 
      supporting our employees to succeed. Providing the necessary resources, equipment, training, and mentoring allows them to excel and break 
      down barriers together. We value the expertise of our team members and understand that management cannot solve all problems alone.
       Integrity is paramount to us; we strive to do what we say we will do, making and honoring our commitments. Holding ourselves accountable
        through action plans and logs ensures smooth execution. Effective communication is key to our success, avoiding surprises and fostering a 
        culture of transparency. We believe in continuous improvement, recognizing its superiority over postponing perfection. These principles 
        shape our culture and drive our commitment to excellence in all aspects of our operations.
      </p>
    </div>
  );
}