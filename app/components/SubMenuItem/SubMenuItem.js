"use client";
import "./style.css";
import { useState } from "react";

export default function SubMenuItem({ subitems, imgs }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");

    const handleHover = (index) => {
        if (index !== currentImageIndex) {
            setFadeClass("fade-out");
            setTimeout(() => {
                setCurrentImageIndex(index);
                setFadeClass("fade-in");
            }, 300); // Match duration with CSS transition
        }
    };

    return (
        <div className="sub-menu-container submenu">
            <div className="sub-menu-img flex-1 relative">
                {/* Image will fade out and in on hover */}
                <img
                    src={imgs[currentImageIndex]}
                    alt={`sub-menu-img-${currentImageIndex}`}
                    key={currentImageIndex}
                    className={`image absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${fadeClass}`}
                />
            </div>
            <div className="sub-menu-content flex flex-col p-4 flex-1">
                {subitems.map((item, index) => (
                    <a
                        href={item.link}
                        className="sub-menu-item flex align-start justify-start gap-4 pb-6"
                        key={index}
                        onMouseEnter={() => handleHover(index)} // Trigger hover
                    >
                        <div className="relative w-10">
                            <span className="icon absolute top-2 left-1">{item.icon}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="title m-0 p-0">{item.title}</span>
                            <span className="subtitle">{item.subtitle}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
