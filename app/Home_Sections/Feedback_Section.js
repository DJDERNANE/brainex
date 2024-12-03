"use client"
import { useEffect, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Feedback_Card from '../components/Card/Feedback_Card';

export default function Feedback_Section() {
    const carouselRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        // Interval for auto-scrolling every 3 seconds
        const interval = setInterval(() => {
            if (nextButtonRef.current) {
                nextButtonRef.current.click(); // Manually trigger the "Next" button click
            }
        }, 3000); // 3000ms = 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="py-4 container ">
            <p className="text-start text-white py-4 welcome-h1 container">Clients <br />
                Feedback</p>
            <div className="w-full relative py-[150px]">
                <Carousel ref={carouselRef} className="w-full" opts={{ loop: true }}>
                    <CarouselContent className="flex w-full px-3">
                        <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 w-full">
                                <Feedback_Card img={'./person.png'} name="John Doe" position="CEO" raiting="4.9" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nesciunt." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 w-full">
                                <Feedback_Card img={'./person.png'} name="John Doe" position="CEO" raiting="4.9" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nesciunt." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 w-full">
                                <Feedback_Card img={'./person.png'} name="John Doe" position="CEO" raiting="4.9" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nesciunt." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 w-full">
                                <Feedback_Card img={'./person.png'} name="John Doe" position="CEO" raiting="4.9" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nesciunt." />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 w-full">
                                <Feedback_Card img={'./person.png'} name="John Doe" position="CEO" raiting="4.9" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nesciunt." />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="custom-prev-next-btn">
                        <CarouselPrevious className="custom-prev" />
                        <CarouselNext className="custom-next" ref={nextButtonRef} /> {/* Use ref here */}
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
