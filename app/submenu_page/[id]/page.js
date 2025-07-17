"use client"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/Submenu_Page_Sections/WelcomeSection";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import Why_Brainex from "@/app/_sections/Submenu_Page_Sections/Why_Brainex";
import Plans_Section from "@/app/_sections/Submenu_Page_Sections/Plans_Section";
import Why_us from "@/app/_sections/Submenu_Page_Sections/Why_us";
import Combridge from "@/app/_sections/Submenu_Page_Sections/Combridge";
import Transform from "@/app/_sections/Submenu_Page_Sections/Transform";
import Promise from "@/app/_sections/Submenu_Page_Sections/Promise";
import Solutions from "@/app/_components/common/Solutions";
import AiSection from "@/app/_sections/Submenu_Page_Sections/AiSection";
import { MainApi } from "@/app/utils/MainApi";

export default function SubmenuPage() {
    const { id } = useParams();
    const [data, setData] = useState();
    const getPageDetails = (id) => {
        axios.get(`${MainApi}/pages/submenu/${id}`)
            .then((response) => {
                setData(response.data.data); // Assuming `data` contains the courses
            })
            .catch((error) => {
                console.error('Error fetching courses:', error);
            });
    };
    useEffect(() => {
        getPageDetails(id)
    }, [id])
    const solution_titles = [
        {
            "title": "Our AI Solutions for Energy",
            "desc": "Revolutionize your energy operations with our innovative AI services"
        },
        {
            "title": "Our AI Solutions for Energy",
            "desc": "Revolutionize your energy operations with our innovative AI services"
        },
        {
            "title": "Our AI Solutions for Energy",
            "desc": "Revolutionize your energy operations with our innovative AI services"
        },
        {
            "title": "Our AI Solutions Agriculture",
            "desc": "Revolutionise your agriculture operations with our innovative AI services"
        },
        {
            "title": "Our AI Solutions for Supply Chain",
            "desc": "Revolutionise your industry field with our innovative AI services"
        },
        {
            "title": "Our AI Solutions for Healthcare industry",
            "desc": "Revolutionise your agriculture operations with our innovative AI services"
        }
    ]
  return (
    <div className="">
        <Navbar />
        <WelcomeSection data={data} />
        <Combridge/>
        <Why_us/>

        <Why_Brainex/>
        <Plans_Section/>
        <Transform />

        <Solutions id={id} title={solution_titles[id-1].title} desc={solution_titles[id-1].desc}/>
        <Promise />
        <AiSection/>
        <FooterSection />
    </div>
  );
}
