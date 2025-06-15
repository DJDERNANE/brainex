'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ButtonSecondary } from "../../_components/Button/Button";
import './style.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Solutions() {
  return (
    <div className='py-[100px] container' id='solutions'>
      <div className='container text-white '>
        <div className='flex md:flex-row flex-col justify-between items-center my-4'>
          <h1 className='text-[46px] font-bold md:w-[30%] w-[100%]'>Our <br/>  Solutions </h1>
          <p className='text-[20px] md:w-[30%] w-[100%]'>
          Revolutionise your agriculture operations with 
          our innovative AI services
          </p>
        </div>
      </div>
      <div className=' solutions '>
        <Swiper
          spaceBetween={30}
          effect="fade"
          fadeEffect={{ crossFade: true }} // Ensures smooth fade between slides
          navigation={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/agriculture_solution.png" />
            <div className='gallery-text flex justify-end items-center'>
              <p >An Integrated Smart Farming solution that faces the new agriculture challenges using high tech in 2 main areas: Crop Quality Assessment & Sorting, and Smart Security Fencing.</p>
            </div>
            <h1 className='gallery-title'>
            Crop Health
            Monitoring
            <ButtonSecondary link={'#solutions'} text="Full project" addClassName={'my-4' }/> 
            </h1>
           
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.png" />
            <div className='gallery-text flex justify-end items-center'>
              <p >Predictive analytics and trend forecasting to optimize energy consumption</p>
            </div>
            <h1 className='gallery-title'>
              Real-Time
              Data Analytics
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.png" />
            <div className='gallery-text flex justify-end items-center'>
              <p >Automating inspection processes like pipeline monitoring, defect detection, and visual analysis for renewable energy systems.</p>
            </div>
            <h1 className='gallery-title'>
              Computer Vision Solutions
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.png" />
            <div className='gallery-text flex justify-end items-center'>
              <p >Simplify decision-making with automated insights and summaries from large, complex datasets like energy usage reports and environmental impact assessments.</p>
            </div>
            <h1 className='gallery-title'>
              AI-Driven Report Analysis and Generation
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
}

