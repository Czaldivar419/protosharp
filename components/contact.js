import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })

export default function Contact() {
    const form = useRef();
    const [showMessageSent, setShowMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_llqpm1i', 'template_uw2s2eq', form.current, 'AiGO8oL6SL_yM2GhI')
          .then((result) => {
              setShowMessageSent(true);
              form.current.reset();
              setTimeout(() => setShowMessageSent(false), 3000);
          }, (error) => {
              console.log(error.text);
          });
    };


    return(
        <div 
        id ="contact"
        className="grid justify-center items-center bg-center bg-no-repeat bg-cover"
        style={{
        backgroundImage: `url("/contact1.jpg")`,
        backgroundPosition: "center",
        height: "90vh",
      }}>
        <div className="flex flex-col bg-black bg-opacity-50 p-4 rounded-lg" style={{ marginTop: "-50%" }}>
            <h1 className={`text-white text-6xl text-center ${teko.className}`}>Contact Us</h1>
            <p className="text-white text-center pb-4">
            If you have any questions or inquiries about our diverse range of services, don't hesitate to get in touch with us. 
            Feel free to use the email form below, and we'll reach out to you promptly. Our team is enthusiastic about 
            providing you with the guidance and expertise you need. We look forward to hearing from you and exploring 
            how we can assist you in achieving your goals.
            </p>
            <form className="flex flex-col align-center justify-center pr-8 pl-8 pb-4"ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder=" Name" name="user_name" className="block text-gray-500 mb-4 rounded"></input>
                <input type="email" placeholder=" Email" name="user_email" className="block text-gray-500  mb-4 rounded"></input>
                <input type="tel" placeholder=" Phone" name="phone_number" className="block text-gray-500 mb-4 rounded"></input>
                <textarea className="block text-gray mb-4"placeholder=" Message" name="message"></textarea>
                <button type="submit" className="bg-gray-700 hover:bg-gray-900 text-white rounded p-2 py-1 shadow">Submit</button>
                {showMessageSent && 
                <div className="text-white tex-center">
                    Message sent!
                    </div>}
            </form>
            </div>
        </div>
    )
}