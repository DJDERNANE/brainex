"use client";
import "./style.css";
import PlanCard from "../../_components/Plan_Card/PlanCard";
import { useState } from "react";
import axios from 'axios';
import {MainApi} from "../../utils/MainApi";
export default function Plans_Section() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setInquiry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send to the backend
        const data = {
            email,
            name,
            phone,
            message,
        };

        try {
            // Send data to backend via POST request
            const response = await axios.post(`${MainApi}/contacts`, data);
            if (response.status === 200) {
                alert("Message sended  successfully!");
                // Clear form fields
                setEmail('');
                setName('');
                setPhone('');
                setInquiry('');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className=" pb-[100px] mx-auto container">
            <div className="grid md:grid-cols-2 text-white py-[70px] items-center">
                <p className="get-in-touch">
                    Get in touch with us
                </p>
                <p>
                    We are a team of AI specialists with extensive expertise in Machine
                    Learning and Deep Learning,
                </p>
            </div>

            <div className={`${show ? "md:p-[100px]" : "md:p-[200px]"}  flex md:justify-start justify-center md:gap-6 plans  `}>
                <div className={`card-cours-price oil ${show ? "show" : ""}`}>
                    <p className="card-cours-price-subtitle oil">
                        Stay Ahead with Research and Innovation
                    </p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={show ? "flex flex-col" : "hidden"}>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="email"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="email"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            className="inquiry email"
                            placeholder="Enter Your inquiry"
                            value={message}
                            onChange={(e) => setInquiry(e.target.value)}
                        />

                    </div>
                    <div className={`grid md:grid-cols-${show ? "2" : "1"} gap-[20px]`}>

                        <button className={`btn  ${show ? "btn-transparent " : "btn-primary"}  ${show ? "hidden-btn" : ""}`} onClick={() => setShow(!show)}>
                            <span className={`${show ? "text-black" : "text-white"}`}>{show ? "Cancel" : "Get in touch"} </span>
                        </button>
                        <div className={show ? "flex justify-between " : "hidden"}>
                            {/* <button className={`btn btn-primary m-2 bg-transparent`} >
                            <span>Cancel </span>
                        </button> */}
                            <button onClick={handleSubmit} className={`btn m-2`} >
                                <span>Get in touch </span>
                            </button>
                        </div>
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