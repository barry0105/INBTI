import React from 'react';
import './Footer.css';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination,Autoplay } from "swiper/core"; 
function Slide(props) {
    return (
        <div className='swipe'>
            <Swiper
            style={{
                width: "1000px",
                height: "100px",
              }}
              followFinger={false}
              direction={'vertical'}
              modules={[Autoplay,Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              speed={500}
              allowTouchMove={false}
              loop={true}
              touchRatio={0}
              noSwiping={true}
              pagination={{clickable: false}}
              autoplay={{ delay: 3000, disableOnInteraction: false}}
            >
                <SwiperSlide>낮말은 새가 듣고 밥말은 라면이 먹고 싶다.</SwiperSlide>
                <SwiperSlide>사람은 죽어서 이름을 남기고 치킨은 죽어서 뼈를 남긴다.</SwiperSlide>
                <SwiperSlide>사공이 많으면 배가 빨리간다.</SwiperSlide>
                <SwiperSlide>오르지 못할 나무는 사다리를 타고 오르도록 하자.</SwiperSlide>
            </Swiper>
    </div>
    );
}

export default Slide;