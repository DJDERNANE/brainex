"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/Home_Sections/WelcomeSection";
import Trust_us_Section from "@/app/_sections/Home_Sections/Trust_us_Section";
import Why_us from "@/app/_sections/Home_Sections/Why_us";
import Innovation from "@/app/_sections/Home_Sections/Innovation";
import Services from "@/app/_sections/Home_Sections/Services";
import Expertise_Section from "@/app/_sections/Home_Sections/Expertise_Section";
import FooterSection from "../../_components/FooterSection/FooterSection";
import Subscribe_Section from "@/app/_sections/Home_Sections/Subscribe_Section";
import FAQ from "@/app/_sections/Home_Sections/FAQ";
import Feedback_Section from "@/app/_sections/Home_Sections/Feedback_Section";
import Plans_Section from "@/app/_sections/OilAndGas_Sections/Plans_Section";
import '@/app/_sections/OilAndGas_Sections/style.css'

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        {/* <Trust_us_Section /> */}
        <Why_us />
        <Innovation />
        <Services />
        <Expertise_Section/>
        {/* <Feedback_Section/> */}
        <FAQ/>
        {/* <Subscribe_Section/> */}
        <Plans_Section/>
        <FooterSection />
    </div>
  );
}
