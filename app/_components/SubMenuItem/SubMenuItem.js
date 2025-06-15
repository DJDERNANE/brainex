"use client";
import "./style.css";
import { useState } from "react";

export default function SubMenuItem({ subitems, imgs }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [fadeClass, setFadeClass] = useState("fade-in");


    return (
        <div className="sub-menu-container submenu w-screen absolute top-full left-0 bg-white mt-2 z-10">
            <div className="sub-menu-img flex-1 relative">
                {/* Image will fade out and in on hover */}
                <img
                    src={imgs[currentImageIndex]}
                    alt={`sub-menu-img-${currentImageIndex}`}
                    key={currentImageIndex}
                    className={`image absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${fadeClass}`}
                />
            </div>
            <div className="sub-menu-content p-4 flex-1 no-scrollbar overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                    {subitems.map((item, index) => (
                        <a
                            href={item.link}
                            className="sub-menu-item flex gap-4 "
                            key={index}
                            onMouseEnter={() => {
                                index ? setCurrentImageIndex(index) : setCurrentImageIndex(0);
                                setFadeClass("fade-in");
                            }}
                            // onMouseLeave={() => {
                            //     setFadeClass("fade-out");
                            // }}
                            
                        >
                            <div className=" w-10" style={{ width: '30px', height: '30px' }}>
                                <span className="icon " >{item.icon}</span>
                            </div>
                            <div className="flex flex-col ">
                                <span className="title m-0 p-0">{item.title}</span>
                                <span className="subtitle-submenu">{item.subtitle}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="flex justify-end items-center border-t pt-2 w-full h-[50px]">
                    <p className="text-white">Visit Our social media Pages</p>
                    <img src="/insta.png" alt="" className="mx-2"/>
                    <img src="/linkedin.png" alt="" />
                </div>
            </div>
        </div>
    );
}
