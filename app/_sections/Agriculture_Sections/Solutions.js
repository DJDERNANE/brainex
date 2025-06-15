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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

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
            <ButtonSecondary onClick={openModal} text="Full project" addClassName={'my-4'}/> 
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center ">
          {/* Backdrop */}
          <div 
            className="fixed "
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative solution-modal w-full h-[calc(100vh-80px)] mt-[80px]  overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10"
            >
              <ButtonSecondary text="Back" />
            </button>
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-white/20 mt-16"></div>
            
            {/* Modal Content Goes Here */}
            <div className="p-8 h-full overflow-y-auto text-white">
              <h2 className="text-2xl font-bold mb-6">AgroNerve <br/> The Smart Spine of Modern Farming</h2>
              <p className="text-lg text-white/80 mb-8 my-[60px]">
                Agriculture is the backbone of our food supply, economy growth, and sustainable development. But it faces rising threats from various factors such as crop loss, labor shortages, and security risks. AgroNerve brings smart, AI-powered solutions to meet these challenges heads-on. With our AutoSort Conveyor for yield quality sorting and the Smart Fence for land protection, we empower farmers to work in a smarter and safer environment. AgroNerve is where technology meets the future of sustainable farming.
              </p>
              {/* Add your modal content here */}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

