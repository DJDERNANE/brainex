'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Solutions() {
  return (
    <div className='py-[100px] container'>
        <div className='container text-white '>
        <div className='flex md:flex-row flex-col justify-between items-center my-4'>
            <h1 className='text-[46px] font-bold md:w-[30%] w-[100%]'>Our AI Solutions 
            for Energy</h1>
            <p className='text-[20px] md:w-[30%] w-[100%]'>
                Revolutionize your energy operations with 
                our innovative AI services
            </p>
        </div>
        </div>
  <div className=' solutions '>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className='gallery-text flex justify-end items-center'>
            <p >Real-time monitoring of critical systems to detect and prevent failures, minimizing downtime and operational risks.</p>
          </div>
          <h1 className='gallery-title'>
            Anomaly Detection Services
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  
  );
}

