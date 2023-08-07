
export const ReviewsCard = ({ source, review, imgUrl, index}) => {
  const isEvenIndex = (index % 2 === 0);

  return (
    <div>
      {/* small screens */}
      <div className="md:hidden">
        <img 
        className="border-2 mb-2"
        src={imgUrl} 
        alt="service"
        />
          <h3 className="text-white text-md text-center pb-2">{review}</h3>
          <p className="text-white text-center text-md pb-4">{source}</p>
        </div>


      {/* medium screens */}
        <div className={`hidden md:flex items-center ${isEvenIndex ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2">
          <img 
          style={{ marginTop: "-25%"}} 
          className="p-7 " 
          src={imgUrl} 
          alt="testimonial" />
          </div>
          <div className="w-1/2 pb-14">
          <h3 className="text-white text-md text-center p-4">{review}</h3>
          <p className="text-white text-center text-md pt-6">{source}</p>
          </div>
        </div>
        </div>
  );
};