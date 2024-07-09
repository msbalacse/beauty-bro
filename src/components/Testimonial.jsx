import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

import { TestimonialData } from '../constants/TestimonialData';

const Testimonial = () => {
    return (
        <section className="mx-2 my-24 md:mx-4">
            <div className="flex flex-col w-full gap-4 pl-2 mb-8 md:w-1/2 md:pl-12">
                <p className="text-sm font-bold font-Inter">CUSTOMER TESTIMONIALS</p>
                <h1 className="text-6xl text-red-500 font-Butler">See What Our Customers Has To Say About Us</h1>
            </div>
            <Swiper
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="flex items-center justify-center"
            >
                {TestimonialData.map((d, i) => {
                    return (
                        <SwiperSlide key={d.name}>
                            <div className="min-w-[300px] p-4 w-2/3 mx-auto my-6 flex justify-center items-center">
                                <Slide img={d.img} feekback={d.feedback} name={d.name} profession={d.profession} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonial;

const Slide = ({ img, feekback, name, profession }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 overflow-hidden rounded-full">
                <img className="object-cover object-center w-full h-full" src={img} alt="" />
            </div>
            <p className="text-base text-center">{feekback}</p>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-sm">{name}</h2>
                <span className="text-xs">{profession}</span>
            </div>
        </div>
    );
};
