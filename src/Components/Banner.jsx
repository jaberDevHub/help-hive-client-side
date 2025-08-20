// components/HeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import hero from '../assets/images/hero-banner.jpg';
import hero2 from '../assets/images/hero-banner-2.jpg';
import hero3 from '../assets/images/hero-banner-3.jpg';

const slides = [
  {
    id: 1,
    title: 'Make a Difference Today',
    description: 'Join our community events and spread kindness.',
    image:hero,
  },
  {
    id: 2,
    title: 'Clean & Green Initiative',
    description: 'Be a part of the environmental cleanup drive.',
    image: hero2,
  },
  {
    id: 3,
    title: 'Donate for a Better Tomorrow',
    description: 'Support the underprivileged through donation events.',
    image: hero3,
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="h-[80vh] rounded-md overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center text-white px-4 text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-opacity-50 p-6 rounded-lg max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
