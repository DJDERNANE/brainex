"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>
            <Swiper
                 slidesPerView={6}
                 spaceBetween={30}
                 loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
               
            >
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '130px', height: '54px' }}>
                        <Image src="/trust.png" width={100} height={100} alt="logo" objectFit='contain'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
