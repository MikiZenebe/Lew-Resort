// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="">
      <Swiper
        centeredSlides={true}
        navigation={true}
        speed="3000"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* slider 1 */}

<SwiperSlide>
  <div
    className="relative w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] pb-[150px] lg:pb-16 xl:pb-0 overflow-hidden"
    data-aos="fade-down"
  >
    {/* 1. VIDEO (No changes needed here) */}
    {/* This is your background video, positioned to cover the container. */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/images/home-1/Lewishorttrailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* 2. OVERLAY (This is the new dedicated element) */}
    {/* This creates the dark tint on top of the video, making text readable. */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

    {/* 3. CONTENT (Background color removed, z-index increased) */}
    {/* This container now only holds your content and sits on top of the overlay. */}
    <div className="relative z-20 grid items-center justify-center w-full h-full text-white">
      <div className="font-Garamond 2xl:w-[720px] text-center">
        <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
          <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]" />
          <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]" />
          <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]" />
          <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]" />
          <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]" />
        </div>
        <h4 className="text-base mb-4">HOTELS AND RESORTS</h4>
        <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
            IT IS A PLACE WHERE HAPPINESS HAPPENS.
          </h1>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px] text-[#00ac9f]"
            >
              Lewi Hotels and Resorts
            </h2>

        </div>
        <Link to="/about">
          <button
            className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
              text-base
              font-Garamond
              font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
          >
            Discover More
          </button>
        </Link>
      </div>
      <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
        <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +251 930 10 83 59
      </div>
    </div>
  </div>
</SwiperSlide>

        {/* slider 2 */}
        </Swiper>
    </div>
  );
};

export default HeroSection;
