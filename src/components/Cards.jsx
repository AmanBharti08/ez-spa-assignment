import React from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";

const Cards = () => {
  const cards = [
    {
      title: "Presentation Design",
      img: logo1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
    {
      title: "Audio - Visual Production",
      img: logo2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
    {
      title: "Translation Services",
      img: logo3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
    {
      title: "Graphic Design",
      img: logo4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
    {
      title: "Research & Analytics",
      img: logo5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
    {
      title: "Data Processing",
      img: logo6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem fuga, recusandae dolor vero in odio facere nulla quam exercitationem.",
    },
  ];

  return (
    <div className="p-5 gap-5 flex flex-wrap justify-center">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className="p-4 bg-gradient-to-tr from-[#16425f] via-[#091627] to-[#16425f]  min-h-[200px] rounded-md text-white flex flex-col gap-5 md:w-[45%] lg:w-[30%]"
          >
            <div className="flex justify-between">
              <img src={card.img} alt="" className="w-8" />
              <h1 className="text-xl text-[#3cc3f1]">{card.title}</h1>
            </div>
            <h1>{card.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
