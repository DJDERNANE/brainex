"use client";
import "./style.css";
import PlanCard from "../components/Plan_Card/PlanCard";
import { useState } from "react";

export default function Plans_Section() {
    const [show, setShow] = useState(false);
    return (
        <div className=" pb-[100px] mx-auto container">
          <div className="grid md:grid-cols-2 text-white py-[70px] items-center">
            <p className="get-in-touch">
                Get in touch with us 
            </p>
            <p>
                We are a team of AI specialists with extensive expertise in Machine
                Learning and Deep Learning, backed by:
            </p>
          </div>

            <div className={`${show ? "md:p-[100px]" : "md:p-[200px]"}  flex md:justify-start justify-center md:gap-6 plans  `}>
                <div className={`card-cours-price oil ${show ? "show" : ""}`}>
                    <p className="card-cours-price-subtitle oil">
                        Stay Ahead with Research and Innovation
                    </p>
                    <input type="text" placeholder="Enter your email" className="email"/>
                    <div className={show ? "flex flex-col" : "hidden"}>
                        <input type="text" placeholder="Enter Full Name" className="email"/>
                        <input type="text" placeholder="Enter Phone Number" className="email"/>
                        <input type="text" placeholder="Enter Your inquiry " className="email inquiry"/>
                        <textarea className="inquiry email" placeholder="Enter Your inquiry"></textarea>
                    </div>
                

                    
                    <button className={`btn btn-primary ${show ? "hidden-btn" : ""}`} onClick={() => setShow(!show)}>
                        <span>Subscribe </span>
                    </button>
                    <div className={show ? "flex justify-between " : "hidden"}>
                        {/* <button className={`btn btn-primary m-2 bg-transparent`} >
                            <span>Cancel </span>
                        </button> */}
                        <button className={`btn m-2`} >
                            <span>Get in touch </span>
                        </button>
                    </div>

                    <p className={`note ${show ? "hidden" : ""}`}>
                    Get updates, insights, and reports on
                    the latest industry Technologies.
                    </p>

                </div>
            </div>
        </div>
    )
}