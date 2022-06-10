import React from 'react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../SwiperSlide/SwiperSlideStyle.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";


export default function Slider () {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Thumbs, Autoplay, EffectFade]}
            loop={true}
            spaceBetween={30}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000}}
            effect={"fade"}
            >
            <SwiperSlide>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="../../images/banner-header.jpg" alt="a"/>
                    </div>
                </SwiperSlide>
            <SwiperSlide>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="../../images/banner-header-2.jpg" alt=""/>
                    </div>
            </SwiperSlide>
        </Swiper>
    );
};