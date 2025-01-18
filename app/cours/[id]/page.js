
"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react";
import { MainApi } from "../../utils/MainApi";
import Navbar from "@/app/_components/Navbar/Navbar";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import Acceleration_Section from "@/app/_components/Accelerate/Acceleration_Section";
import Why_Brainex from "@/app/_components/WhyBrainex/Why_Brainex";
import Plans_Section from "@/app/_components/Cours_Price/Plans_Section";
import Contact_Section from "@/app/_components/ContactSection/Contact_Section";
import WelcomeCours from "@/app/_components/WelcomeCours/WelcomeCours";
import Cours_Section from "@/app/_sections/Cours_Sections/Cours_Section";

const Cours = () => {
    const { id } = useParams();
    const [cours, setCours] = useState([]);
    const getCoursDetails = (id) => {
        axios.get(`${MainApi}/cours/${id}`)
            .then((response) => {
                setCours(response.data.data[0]); // Assuming `data` contains the courses
            })
            .catch((error) => {
                console.error('Error fetching courses:', error);
            });
    };
    useEffect(() => {
        getCoursDetails(id)
    }, [id])
    
    return (
        <div className="">
             <div className="">
                    <Navbar />
                    <WelcomeCours bg={cours.bg} title={cours.title} desc={cours.description} />
                    <Cours_Section title={cours.title} sections={cours.sections}/>
                    <Acceleration_Section/>
                    <Why_Brainex/>
                    <Plans_Section title={cours.title} price={cours.price} desc={cours.description}/>
                    <Contact_Section/>
                    <FooterSection />
                </div>
        </div>
    );

}
export default Cours