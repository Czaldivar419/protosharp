import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-black">
      <p className="text-white text-center">
        Copyright Protosharp Industries Inc. 
      </p>
      <p className="text-white text-center">{currentYear}</p>
    </div>
  );
}