import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header";

// swiper
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// data
import layoutSwiperSlides from "../data/layoutSwiperSlides";

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="flex flex-col justify-between relative z-10 site-overlay min-h-screen">
        {/* header */}
        <Header />

        {/* main */}
        <main className="pt-20 pb-20 sm:pb-40">
          <Outlet />
        </main>
      </div>

      {/* background */}
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Autoplay]}
        className="main-swiper fixed inset-0 z-0 size-full"
      >
        {layoutSwiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt="truck background image"
              className="size-full object-cover bg-gray-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainLayout;
