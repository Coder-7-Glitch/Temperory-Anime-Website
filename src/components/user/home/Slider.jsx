import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Swiper Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 left-4 z-50 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <FaAngleLeft size={25} />
      </button>
      <button className="custom-next absolute top-1/2  right-4 z-50 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <FaAngleRight size={25} />
      </button>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={false}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect={"fade"}
        modules={[Navigation, EffectFade]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-full h-full">
          <div className="relative h-full w-full bg-red-500">
            <img
              className="h-full w-full object-cover"
              src="https://images8.alphacoders.com/130/1307186.jpg"
              alt="Jujutsu Kaisen"
            />
            <div className="absolute inset-0 hero-slider-gradient z-10"></div>
            <div className="absolute bottom-10 left-0 2xl:left-[50%] 2xl:translate-x-[-50%] flex flex-col items-center md:items-start w-full z-20 text-white px-4 sm:px-10 md:px-16 max-w-7xl">
              <Link>
                <img
                  src="https://i.redd.it/dobgt78q9a6d1.png"
                  className="w-[200px] sm:w-[250px] rotate-12"
                  alt="NAME"
                />
              </Link>
              <div className="flex items-center mt-6">
                <span className="bg-zinc-700 text-zinc-200 font-workSans font-semibold text-sm px-2 py-1 rounded">
                  16+
                </span>
                <RxDotFilled className="mx-2" />
                <span className="text-zinc-400">Sub | Dub</span>
                <RxDotFilled className="mx-2" />
                <span className="text-zinc-400">Action</span>
              </div>
              <p className="hidden md:block mt-3 text-gray-300 w-1/2">
                Desperate to defend her village from the demon king, Reiko
                offers herself to a 5,000-year-old dragon for his help in
                exchange, but the flame-breathing beast is vegetarian and a
                total weakling.
              </p>
              <button className="mt-4 bg-[#ff640a] flex items-center gap-3 px-6 py-2 rounded font-workSans font-medium">
                <FaPlay size={12} />
                Start Watching
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
      </Swiper>
    </div>
  );
}

export default Slider;
