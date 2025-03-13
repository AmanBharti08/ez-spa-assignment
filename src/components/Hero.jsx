import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");


  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-gradient-to-tr from-[#16425f] via-[#091627] to-[#16425f] p-8 text-white flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Suite Of Business Support Services</h1>
      <h1 className="my-8 text-2xl font-light text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odio
        aliquid id minima dolorum beatae quae sint? Magni totam nisi cumque
        eaque, nostrum, fuga cupiditate, vel doloremque dolorem quam eligendi
        adipisci sit fugiat quod odit dolore error saepe. Vero dolorum aliquam,
        cupiditate aut veniam nihil dolorem nemo omnis pariatur autem atque hic
        quo corporis velit doloribus nostrum corrupti ad rem. Rem dolores eum
        corrupti molestiae repellendus sapiente laborum aspernatur voluptatum
        porro minus, vero eveniet fuga nulla, qui culpa saepe soluta dolorum,
        libero dolore officiis fugit nemo ut quas? Minima tenetur suscipit quae
        autem laboriosam facilis dolorum adipisci doloribus possimus molestiae!
      </h1>
      <div className="flex gap-4">
        <input
          type="text"
          className="bg-white text-black border-none px-2 w-100 py-2 rounded-md"
          placeholder="Abz@Xyz.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-[#EA7B2C] px-2 rounded-md cursor-pointer hover:text-black font-medium text-[20px]" onClick={handleClick}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
