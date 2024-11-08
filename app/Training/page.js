"use client "
import Navbar from "@/app/components/Navbar/Navbar";
import WelcomeSection from "../Training_Section/WelcomeSection";
import Cours_Section from "../Training_Section/Cours_Section";
import FooterSection from "../components/FooterSection/FooterSection";
import Acceleration_Section from "../Training_Section/Acceleration_Section";
import Why_Brainex from "../Training_Section/Why_Brainex";
import Plans_Section from "../Training_Section/Plans_Section";
import Contact_Section from "../Training_Section/Contact_Section";

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        <Cours_Section/>
        <Acceleration_Section/>
        <Why_Brainex/>
        <Plans_Section/>
        <Contact_Section/>
        <FooterSection />
    </div>
  );
}
