"use client "
import Navbar from "@/app/components/Navbar/Navbar";
import WelcomeSection from "@/app/ML_Cours_Sections/WelcomeSection";
import Cours_Section from "@/app/ML_Cours_Sections/Cours_Section";
import FooterSection from "@/app/components/FooterSection/FooterSection";
import Acceleration_Section from "@/app/ML_Cours_Sections/Acceleration_Section";
import Why_Brainex from "@/app/ML_Cours_Sections/Why_Brainex";
import Plans_Section from "@/app/ML_Cours_Sections/Plans_Section";
import Contact_Section from "@/app/ML_Cours_Sections/Contact_Section";

export default function Ml_Cours() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        <Cours_Section/>
        <Acceleration_Section/>
        <Why_Brainex/>
        {/* <Plans_Section/> */}
        <Contact_Section/>
        <FooterSection />
    </div>
  );
}
