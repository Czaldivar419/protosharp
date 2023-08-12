export const TeamCard = ({ imgUrl, name, title, about }) => {
    return (
      <div>

        {/*small screens */}
      <div className="sm:flex flex-col items-center bg-gray-900 md:hidden">
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


            {/*medium/ large screens */}
            <div className=" hidden md:flex flex-row pt-5 lg:mr-10">
            <div className="w-1/2">
              <img
              className="border-4 p-4 pt-5  lg:max-w-md rounded"
              src={imgUrl}
              alt="service" 
              />
            </div>
            <div className="w-1/2 border-2 flex-column items-center rounded-lg bg-gray-100 bg-opacity-10">
              <p className="text-white p-4 text-xl lg:pr-10 lg:pl-10 lg:text-2xl">
              {name}, {title}
              </p>
              <p className="text-white p-4 pt-1 lg:pr-10 lg:pl-10 lg:text-xl">
              {about}
              </p>
            </div>
          </div>



          </div>
    );
  };