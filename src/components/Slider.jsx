import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className=" w-full h-[10rem] sm:h-[25rem]"
      >
        <SwiperSlide>
          <img src="/public/assets/store-banner-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/store-banner-2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
