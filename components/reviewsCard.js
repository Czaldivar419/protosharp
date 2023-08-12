
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
        <div className={`hidden md:flex items-center lg:mr-10 lg:ml-10 ${isEvenIndex ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2">
          <img 
          className="p-7 lg:p-10 " 
          src={imgUrl} 
          alt="testimonial" />
          </div>
          <div className="w-1/2 p-4 pb-6 border-2 rounded-lg bg-gray-900 bg-opacity-90">
          <h3 className="text-white text-md text-center p-4">{review}</h3>
          <p className="text-white text-center text-md pt-6">{source}</p>
          </div>
        </div>
        </div>
  );
};