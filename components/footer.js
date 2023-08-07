import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="grid bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/black.jpg")`,
        backgroundPosition: "top 90%",
      }}>
    <div className="p-4">
      <p className="text-xs text-white text-center">
        Copyright Protosharp Industries Inc. 
      </p>
      <p className="text-xs text-white text-center">Cucamonga Tech Solutions Inc. <span className="text-white text-center">{currentYear}</span></p>
    </div>
    </div>
  );
}