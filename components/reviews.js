import { ReviewsCard } from "./reviewsCard";
import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function Reviews() {

  const reviews = [
    {
      source: "- Frank Arambarri VP Operations L-3 Communications, Telemetry-West.",
      review: `"Tony Martinez...pioneered team based manufacturing and continuous improvement [at Hughes Aircraft Company]. His leadership and knowledge were key factors in the turnaround of one of our subsidiary divisions. He has always been regarded as an expert in the Production and Inventory Control field as witnessed by his APICS certifications. He has always made time to develop and mentor people."`,
      imgUrl: "/jet.jpg",
      index: 1
    },
    {
      source: "- James E Kloberdanz Senior Director, Cabin Systems Operations Rockwell Collins, Inc.",
      review: `"Tony has been a respected leader in the production operations of our company, driving year over year improvements to the way in which we manage, plan and control our factories. He has led several cross-functional teams to the achievement of breakthrough results, such as the recent improvement in our business units on-time delivery from 25% to 99%. He has been an implementation leader for our recent deployment of a new Enterprise Resource Planning system, supported the acquisition of state of the art production equipment employed in Rockwell Collins facilities and led team process improvement projects that are reducing waste and driving improved flow and resource utilization."`,
      imgUrl: "/f16.jpg",
      index: 2
    },
    {
      source: "- Marcus Martinez, Armed Forces Veteran.",
      review: `"I had the privilege of collaborating with Tony Martinez, a true trailblazer in both team-based manufacturing and continuous improvement. Tony's profound leadership and unparalleled expertise played a pivotal role in assisting my own professional growth and development. He is always showcasing his exceptional skills in the realm of Production and Inventory Control, as evidenced by his esteemed APICS certifications. Tony's unwavering commitment to fostering talent and mentorship has left an indelible mark upon myself and our organization as whole."`,
      imgUrl: "/apache.jpg",
      index: 3
    },
  ];

  return (
    <div className="grid bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/black.jpg")`,
        backgroundPosition: "center left 5%",
      }}>
    <div className="md:p-9 lg:p-15" id="testimonials">
        <h1 className={`text-white lg:text-7xl text-6xl text-center pt-3 ${teko.className}`}>Testimonials</h1>
        <div className="px-4">
          <div className="mt-8">
            {reviews.map((review, index) => (
              <ReviewsCard key={index} {...review} />
            ))}
          </div>
        </div>
        </div>
      </div>
  );
};