import React from 'react';

const HeroCarousel = () => {
    return (
        <seciton className="w-full">
            <div className=" p-2 md:w-[90%] h-[500px] mx-auto relative">
                <img
                    src="https://image1.jdomni.in/banner/11082021/BC/F6/F7/D9FC7BB37487A22B47EFB56C20_1628697846701.png?output-format=webp"
                    alt="meganthi design"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute flex flex-col items-center w-full gap-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="text-5xl md:text-9xl text-white font-Butler font-bold first-letter:text-yellow-400   first-letter:text-[22vw]  md:first-letter:text-[12vw] ">
                        Beauty Pro
                    </h1>
                    <p className="p-4 font-sans text-xs font-bold uppercase bg-white rounded-full w-fit md:text-sm ">
                        expore
                    </p>
                </div>
            </div>
        </seciton>
    );
};

export default HeroCarousel;
