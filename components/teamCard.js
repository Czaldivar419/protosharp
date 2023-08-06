export const TeamCard = ({ imgUrl, name, title, about }) => {
    return (
      <div className="flex flex-col items-center bg-gray-900">
          <img 
            className="border-4 p-4 pt-5"
            src={imgUrl} 
            alt="service" 
            style={{maxWidth: "85%"}}
            />
          <div className="proj-txtx">
            <h4 className="text-white text-center text-2xl ">{name}</h4>
            <p className="text-white text-center pb-1">{title}</p>
            <p className="text-white text-center pr-4 pl-4">{about}</p>
          </div>
          </div>
    );
  };