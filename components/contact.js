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
    const [showValidationError, setShowValidationError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all input fields are filled out
        const inputs = form.current.querySelectorAll("input, textarea");
        let isValid = true;
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        if (!isValid) {
            setShowValidationError(true);

            setTimeout(() => {
                setShowValidationError(false);
              }, 3000);

            return;
        }

        emailjs.sendForm('service_llqpm1i', 'template_uw2s2eq', form.current, 'AiGO8oL6SL_yM2GhI')
          .then((result) => {
              setShowMessageSent(true);
              form.current.reset();
              setTimeout(() => {
                  setShowMessageSent(false);
                  setShowValidationError(false);
              }, 3000);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div id="contact" className="grid bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/contact1.jpg")`, backgroundPosition: "center" }}>
            <h1 className={`text-white text-6xl text-center bg-black bg-opacity-50 p-4 ${teko.className}`}>Contact Us</h1>
            <div className="flex flex-col md:flex-row bg-black bg-opacity-50 p-4 pt-1 rounded-lg">
            <p className="text-white text-center p-4 pt-0 md:w-1/2">
            If you have any questions or inquiries about our diverse range of services, don&apos;t hesitate to get in touch with us. 
            Feel free to use the email form provided, and we will reach out to you promptly. Our team is enthusiastic about 
            providing you with the guidance and expertise you need. We look forward to hearing from you and exploring 
            how we can assist you in achieving your goals.
            </p>
                <form className="flex flex-col align-center justify-center pr-8 pl-8 pb-4 md:w-1/2"ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder=" Name" name="user_name" className="block text-gray-500 mb-4 rounded md:max-w-md"></input>
                <input type="email" placeholder=" Email" name="user_email" className="block text-gray-500  mb-4 rounded md:max-w-md"></input>
                <input type="tel" placeholder=" Phone" name="phone_number" className="block text-gray-500 mb-4 rounded md:max-w-md"></input>
                <textarea className="block text-gray mb-4 md:max-w-md"placeholder=" Message" name="message"></textarea>
                    <button type="submit" className="bg-gray-700 hover:bg-gray-900 text-white rounded p-2 py-1 md:max-w-md">
                        Submit
                    </button>
                    {showValidationError && (
                        <div className="text-red-500 text-center">Please fill out all fields.</div>
                    )}
                    {showMessageSent && (
                        <div className="text-white text-center">Message sent!</div>
                    )}
                </form>
            </div>
        </div>
    );
}