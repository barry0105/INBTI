import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination,Autoplay } from "swiper/core"; 
import styled from 'styled-components';
function Slide(props) {
    return (
        <SwipeWrap>
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
              autoplay={{ delay: 5000, disableOnInteraction: false}}
            >
                <SwiperSlide>낮말은 새가 듣고 밥말은 라면이 먹고 싶다.</SwiperSlide>
                <SwiperSlide>사람은 죽어서 이름을 남기고 치킨은 죽어서 뼈를 남긴다.</SwiperSlide>
                <SwiperSlide>사공이 많으면 배가 빨리간다.</SwiperSlide>
                <SwiperSlide>오르지 못할 나무는 사다리를 타고 오르도록 하자.</SwiperSlide>
                <SwiperSlide>형광등 위가 어둡다.</SwiperSlide>
                <SwiperSlide>가다가 중지하면 간만큼 이득이다.</SwiperSlide>
                <SwiperSlide>식당개 삼년이면 라면을 끓인다.</SwiperSlide>
                <SwiperSlide>가는 말이 고우면 얕본다.</SwiperSlide>
                <SwiperSlide>어제보다 나은 내일은 토요일 밖에 없다.</SwiperSlide>
                <SwiperSlide>늦었다고 생각하면 이미 늦은거다.</SwiperSlide>
                <SwiperSlide>하나를 보고 열을 알면 무당이다.</SwiperSlide>
                <SwiperSlide>미뤄봤자 어차피 그 일은 내가 한다.</SwiperSlide>
                <SwiperSlide>참으면 아무도 모른다.</SwiperSlide>
                <SwiperSlide>출근시간 어기면 욕먹고 퇴근시간 지키면 욕먹는다.</SwiperSlide>
                <SwiperSlide>멀리 보면 가까이 있는걸 못 본다.</SwiperSlide>
                <SwiperSlide>원래 발등은 믿는 도끼가 찍는다.</SwiperSlide>
                <SwiperSlide>지금 놀면 평생 논다.</SwiperSlide>
            </Swiper>
        </SwipeWrap>
    );
}
const SwipeWrap = styled.div`
    display: flex;
    font-size: 3vw;
    color: brown;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    width: 100%;
    .swiper-pagination{
        display:none
    }
`;
export default Slide;