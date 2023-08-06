
export const ServiceCard = ({ title, description, imgUrl}) => {
  return (
    <div>
        <img className="border-2"src={imgUrl} alt="service" />
        <div className="proj-txtx">
          <h3 className="text-white text-2xl text-center pb-2">{title}</h3>
          <p className="text-white text-center pb-4">{description}</p>
        </div>
        </div>
  );
};