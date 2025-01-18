"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/Training_Section/WelcomeSection";
import Cours_Section from "@/app/_sections/Training_Section/Cours_Section";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import Acceleration_Section from "@/app/_components/Accelerate/Acceleration_Section";
import Why_Brainex from "@/app/_components/WhyBrainex/Why_Brainex";
import Contact_Section from "@/app/_components/ContactSection/Contact_Section";

export default function Training_Cours() {
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
