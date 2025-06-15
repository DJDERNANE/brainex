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
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsAnimating(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      document.body.style.overflow = 'unset';
    }, 300); // Match this with the transition duration
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
          fadeEffect={{ crossFade: true }}
          navigation={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/agriculture_solution.jpg" />
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
            <img src="/agriculture_solution.jpg" />
            <div className='gallery-text flex justify-end items-center'>
              <p >An Integrated Smart Farming solution that faces the new agriculture challenges using high tech in 2 main areas: Crop Quality Assessment & Sorting, and Smart Security Fencing.</p>
            </div>
            <h1 className='gallery-title'>
            Crop Health
            Monitoring
            <ButtonSecondary onClick={openModal} text="Full project" addClassName={'my-4'}/> 
            </h1>
          </SwiperSlide>
    
        
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 z-40 flex items-start justify-center pb-[50px] transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 transition-all duration-300 ${isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent backdrop-blur-0'}`}
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className={`relative solution-modal w-full h-[calc(100vh-80px)] mt-[80px] overflow-hidden transition-all duration-300 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10"
            >
              <ButtonSecondary text="Back" />
            </button>
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-white/20 mt-20"></div>
            
            {/* Modal Content Goes Here */}
            <div className="p-8 h-full overflow-y-scroll text-white pb-16 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full w-[80%] mx-auto">
              <h2 className="text-2xl font-bold mb-6">AgroNerve <br/> The Smart Spine of Modern Farming</h2>
              <p className="text-lg text-white/80 mb-8 my-[60px]">
                Agriculture is the backbone of our food supply, economy growth, and sustainable development. But it faces rising threats from various factors such as crop loss, labor shortages, and security risks. AgroNerve brings smart, AI-powered solutions to meet these challenges heads-on. With our AutoSort Conveyor for yield quality sorting and the Smart Fence for land protection, we empower farmers to work in a smarter and safer environment. AgroNerve is where technology meets the future of sustainable farming.
              </p>

              <div>
                <div className='section-container my-16'>
                  <h3 className="text-2xl font-bold mb-2">AutoSort Conveyor</h3>
                  <p className="text-lg text-white/80 mb-8">
                    Effortless Sorting. Exceptional Quality.
                  </p>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/20 my-4"></div>
                  <img src="agriculture/agr1.jpg" alt='solution image'/>
                  <ul className="mt-4">
                    <li className="mb-4">
                      AutoSort Conveyor is an intelligent crop sorting solution engineered for modern agricultural environments. Utilizing advanced AI vision systems, real-time quality assessment, and precision automation, this system streamlines post-harvest processes by sorting produce based on ripeness, size, and surface quality.
                    </li>
                    <li>
                      AutoSort Conveyor enhances grading accuracy, reduces labor dependency, and ensures consistent product quality. It empowers farmers and agribusinesses with efficient, scalable, and cost-effective sorting—improving overall productivity and market readiness.
                    </li>
                  </ul>
                </div>
                <div className='section-container my-16'>
                  <h3 className="text-2xl font-bold mb-2">How does it work ?</h3>
                  <p className="text-lg text-white/80 mb-8">
                  How does it work ?
                  </p>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/20 my-4"></div>
                  <img src="agriculture/agr2.jpg" alt='solution image'/>
                  <ul className="mt-4">
                    <li className="mb-4">
                    The Auto-Sort Conveyor works by loading mixed-quality tomatoes onto a moving belt where an AI-powered vision system scans each tomato in real time. Using advanced image processing and machine learning algorithms, the system evaluates key attributes such as size, color (to assess ripeness), and surface defects. Based on this analysis, the tomatoes are automatically directed into separate crates or channels corresponding to their quality level—typically sorted into premium, average, or low-grade categories—ensuring consistent quality control and reducing the need for manual inspection.
                    </li>
                    
                  </ul>
                </div>
                <div className='section-container my-16'>
                  <h3 className="text-2xl font-bold mb-2">Smart FenceGuard</h3>
                  <p className="text-lg text-white/80 mb-8">
                  Experience our new dashboard design that presents analytics and sales data in a clear and concise way. 
                  </p>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/20 my-4"></div>
                  <img src="agriculture/agr3.jpg" alt='solution image'/>
                  <ul className="mt-4">
                    <li className="mb-4">
                    Smart perimeter security solution designed specifically for agricultural environments. Leveraging a combination of advanced sensor technology, real-time monitoring, and intelligent alerting. Our system provides proactive protection against intrusions, vandalism, and theft.
                    </li>
                    <li>
                    By integrating smart fencing with sophisticated analytics and communication capabilities, we aim to enhance farm security, minimize losses, and provide farmers with immediate awareness and clear recommendations for action.
                    </li>
                  </ul>
                </div>
                <div className='section-container my-16'>
                  <h3 className="text-2xl font-bold mb-2">how does it work ?</h3>
                  <p className="text-lg text-white/80 mb-8">
                  Experience our new dashboard design that presents analytics and sales data in a clear and concise way. 
                  </p>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/20 my-4"></div>
                  <img src="agriculture/agr4.jpg" alt='solution image'/>
                  <ul className="mt-4">
                    <li className="mb-4">
                    Smart FenceGuard combines sensor-embedded fencing, surveillance cameras, and real-time data processing to create a proactive security shield around farms. Intrusions, unusual movements, or fence tampering are instantly detected and reported through intelligent alerts.
                    </li>
                    <li>
                    All hardware feeds into a unified dashboard and mobile app, giving farmers real-time visibility and control. After deployment and calibration, the system delivers seamless monitoring, helping reduce losses and enhance on-site decision-making with timely insights.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

