import React from 'react';

const HeroCarousel = () => {
  return (
    <seciton className="w-full">
      <div className=" p-2 md:w-[90%] h-[80vh] mx-auto relative">
        <img
          src="https://img.freepik.com/free-photo/makeup-brushes-with-whirling-pink-powder_23-2148208975.jpg?t=st=1719936329~exp=1719939929~hmac=69b0894f7f1147766a96a207782eaf17bf7bf95b6426749d0c46bcbd5ea49c04&w=740"
          alt="meganthi design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full">
          <h1 className="text-[8vw] text-white font-Butler font-bold first-letter:text-yellow-400 first-letter:text-[12vw]">
            Beauty Pro
          </h1>
          <p className="bg-white p-4 w-fit rounded-full text-xs md:text-sm uppercase font-bold font-sans ">
            expore
          </p>
        </div>
      </div>
    </seciton>
  );
};

export default HeroCarousel;
