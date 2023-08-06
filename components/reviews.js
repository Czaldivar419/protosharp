import { ReviewsCard } from "./reviewsCard";
import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function Reviews() {

  const reviews = [
    {
      source: "- Frank Arambarri VP Operations L-3 Communications, Telemetry-West",
      review: `"Tony Martinez...pioneered team based manufacturing and continuous improvement [at Hughes Aircraft Company]. His leadership and knowledge were key factors in the turnaround of one of our subsidiary divisions. He has always been regarded as an expert in the Production and Inventory Control field as witnessed by his APICS certifications. He has always made time to develop and mentor people."`,
      imgUrl: "/jet.jpg",
    },
    {
      source: "- James E Kloberdanz Senior Director, Cabin Systems Operations Rockwell Collins, Inc.",
      review: `"Tony has been a respected leader in the production operations of our company, driving year over year improvements to the way in which we manage, plan and control our factories. He has led several cross-functional teams to the achievement of breakthrough results, such as the recent improvement in our business units on-time delivery from 25% to 99%. He has been an implementation leader for our recent deployment of a new Enterprise Resource Planning system, supported the acquisition of state of the art production equipment employed in Rockwell Collins facilities and led team process improvement projects that are reducing waste and driving improved flow and resource utilization."`,
      imgUrl: "/f16.jpg",
    },
  ];

  return (
    <section className=" bg-black" id="testimonials">
        <h1 className={`text-white text-6xl text-center pt-3 ${teko.className}`}>Testimonials</h1>
      <div className="container mx-auto">
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {reviews.map((review, index) => (
              <ReviewsCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};