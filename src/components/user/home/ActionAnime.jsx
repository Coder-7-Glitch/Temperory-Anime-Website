import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ActionAnime = () => {
  const swiperRef = useRef();

  const mouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
  };
  const mouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <div className="pb-10">
      <div className="flex items-center gap-3 py-8">
        <div className="w-[3px] h-[30px] bg-primary"></div>
        <h1 className="text-2xl">Action & Adventure</h1>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          620: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          720: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b5621ff1277ed6ad1006b0c6f14900bb.jpg"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://www.animationmagazine.net/wordpress/wp-content/uploads/Lookism-key-art.jpg"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://starcrossedanime.com/wp-content/uploads/2024/06/Viral-Hit-Banner.png"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://a.storyblok.com/f/178900/960x1357/826c5bfeca/nina-die-sterne-sind-dein-schicksal-key-visual.jpg/m/filters:quality(95)format(webp)"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/16c3b10f7b332872ac993469b2c96bca.jpe"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="w-full md:w-[200px] overflow-hidden rounded bg-[#404040] relative group cursor-pointer">
            <div>
              <img
                src="https://i.redd.it/regardless-of-the-constant-criticism-that-jjk-gets-lets-not-v0-16mu5tyw0nbc1.jpg?width=1930&format=pjpg&auto=webp&s=bf8259adc4a91412cf6749f6eea698359037651e"
                className="w-full h-[210px] sm:h-[300px] object-cover"
                alt="ANIME_NAME"
              />
            </div>
            <div className="w-full h-full bg-[#404040] absolute top-0 left-0 py-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-k2d text-white">Blue Lock</h1>
              <div className="flex items-center mt-3 gap-3 text-[#afafaf]">
                <span>4.8</span>
                <span>
                  <FaStar />
                </span>
                <span>(10.3K)</span>
              </div>
              <p className="text-sm mt-3 text-white">
                Japan’s desire for World Cup glory leads the Japanese Football
                Association to launch a new rigorous training program to find
                the national team’s next striker.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ActionAnime