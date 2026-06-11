import { useEffect, useState } from "react";
// import "../index.css";

    const LogoText = () => {

  const texts = [
    "University of Mumbai",
    "मुंबई विद्यापीठ"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(timer);

  },[] );

  return (
    <div className="logo-animation-wrapper font-light text-lg text-2  text-[#f8f8f8f8]  ">

      <h3
        key={index}
        className="flip-text"
      >
        {texts[index]}
      </h3>

    </div>
  );
}


export default LogoText