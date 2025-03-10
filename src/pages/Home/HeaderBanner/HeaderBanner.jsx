import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.css'
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";





function HeaderBanner() {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
        {/* <div className="absolute top-0 bg-[#1111117d] z-10 w-full min-h-full">
  
        </div> */}

        {/* <div className="px-6 lg:px-0 w-full md:space-y-4 text-center z-20 absolute top-[45%] left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
          <p className="animate__animated animate__fadeInDown md:text-xl font-semibold">VOLUNTEERS</p>
          <h1 className="animate__animated animate__fadeInDown text-2xl lg:text-5xl lg:font-black font-bold">Change is Possible in Society</h1>
          <p className="animate__animated animate__fadeInDown md:text-xl md:pt-4 md:px-36">Discover the joy of giving back and making a real difference in your community,Join us in shaping a brighter tomorrow!</p>
        </div> */}

      </div>
    </div>
  );
}

export default HeaderBanner;
