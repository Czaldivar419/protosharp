import { Teko } from "@next/font/google";

const teko = Teko({ 
   subsets: ["latin"],
   weight: "400",
    })


export default function Banner() {
  const handleLearnMoreClick = () => {
    const navbarHeight = document.getElementById("navbar").clientHeight;
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = aboutSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (

    <div className={teko.className}>
     <div
      id="home"
      className="grid justify-center items-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/realBanner.jpg")`,
        backgroundPosition: "center right 51.5%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col bg-black bg-opacity-20 p-4 rounded-lg" style={{ marginTop: "-35%" }}>
        <h1 className="text-center sm: text-7xl text-gray-100 md:text-8xl">Protosharp Industries</h1>
        <h3 className="text-center text-3xl text-gray-100">International supply chain and operations specialists.</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-gray-700 text-2xl hover:bg-gray-900 text-white rounded p-2 py-0 shadow"
          onClick={handleLearnMoreClick}
        >
          Learn more
        </button>
      </div>
    </div>
    </div>
  );
};
