'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainApi } from '@/app/utils/MainApi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ButtonSecondary } from '../Button/Button';

import { Storage } from '@/app/utils/MainApi';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Solutions({id, title, desc}) {
    const [data, setData] = useState([])
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
    useEffect(() => {
        // Replace 3 with a dynamic id if needed
        fetch(MainApi+"/solutions/submenu/"+id)
          .then((res) => res.json())
          .then((result) => { 
              setData(result);
          })
          .catch((err) => {
            console.error("Failed to fetch submenu data", err);
          });
      }, []);
      console.log(data)
  const [selectedItem, setSelectedItem] = useState(null);
  return (
        <div className='py-[100px] container'>
        <div className='container text-white '>
          <div className='flex md:flex-row flex-col justify-between items-center my-4'>
            <h1 className='text-[46px] font-bold md:w-[30%] w-[100%]'>{title}</h1>
            
            <p className='text-[20px] md:w-[30%] w-[100%]'>
              {desc}
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
            {
                data.map((item, index) => (
                    <SwiperSlide key={item.id || index}>
                    <img src={Storage + '/' + item.picture} alt={item.title} />
                    <div className="gallery-text flex justify-end items-center">
                        <p>{item.description}</p>
                    </div>
                    <h1 className="gallery-title">{item.title}
                    {
                      item.detail && (
                        <ButtonSecondary
                          onClick={() => {
                            setSelectedItem(item);
                            openModal();
                          }}
                          text="Full project"
                          addClassName={'my-4'}
                        /> 
                      )
                    }
                    </h1>
                
                    </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
         {/* Modal */}
      {isModalOpen && selectedItem && (
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
              <h2 className="text-2xl font-bold mb-6">{selectedItem.detail.title}</h2>
              <p className="text-lg text-white/80 mb-8 my-[60px]" dangerouslySetInnerHTML={{ __html: selectedItem.detail.description }}/>
              <div>
              {
                  selectedItem.detail.sections && selectedItem.detail.sections.map(section => (
                    <div className='section-container my-16' key={section.id}>
                      <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                      <p className="text-lg text-white/80 mb-8">
                        {section.subtitle}
                      </p>
                      {/* Divider */}
                      <div className="w-full h-[1px] bg-white/20 my-4"></div>
                      <img src={Storage + "/" + section.picture} alt='solution image' className='w-[100%]'/>
                      <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{ __html: section.description }}
                      />
                  </div>
                  ))}
              </div>
             
      
            </div>
          </div>
        </div>
      )}
      </div>
    
   

  );
}

