
export const ReviewsCard = ({ source, review, imgUrl}) => {
    return (
      <div>
          <img className="border-2 mb-2"src={imgUrl} alt="service" />
          <div className="proj-txtx">
            <h3 className="text-white text-md text-center pb-2">{review}</h3>
            <p className="text-white text-center text-md pb-4">{source}</p>
          </div>
          </div>
    );
  };