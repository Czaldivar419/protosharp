import React from "react";

export default function Banner() {
  return (
    <div
      className="grid justify-center items-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/bannner.jpg")`,
        height: "600px",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 m-3 rounded-lg">
        <h1 className="text-center text-3xl text-white">
          Protosharp Industries, your Manufacturing and Supply Chain Operations specialists.
        </h1>
      </div>
    </div>
  );
}