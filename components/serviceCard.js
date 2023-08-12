
export const ServiceCard = ({ title, description, imgUrl}) => {
  return (
    <div>
{/* large screen */}
      <div className="hidden lg:block m-12">
        <img className="border-2"src={imgUrl} alt="service" />
        <div>
          <h3 className="text-white text-2xl text-center pb-2">{title}</h3>
          <p className="text-white text-center pb-4">{description}</p>
        </div>

      </div>



{/* medium/small screens */}
        <div className="lg:hidden ">
        <img className="border-2"src={imgUrl} alt="service" />
        <div>
          <h3 className="text-white text-2xl text-center pb-2">{title}</h3>
          <p className="text-white text-center pb-4">{description}</p>
        </div>
        </div>



        </div>
  );
};