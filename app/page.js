"use client "
import Navbar from "@/app/components/Navbar/Navbar";
import WelcomeSection from "@/app/Home_Sections/WelcomeSection";
import Trust_us_Section from "@/app/Home_Sections/Trust_us_Section";
import Why_us from "../Home_Sections/Why_us";
import Innovation from "../Home_Sections/Innovation";
import Services from "../Home_Sections/Services";
import Expertise_Section from "../Home_Sections/Expertise_Section";
import FooterSection from "../components/FooterSection/FooterSection";
import Subscribe_Section from "../Home_Sections/Subscribe_Section";
import FAQ from "../Home_Sections/FAQ";
import Feedback_Section from "../Home_Sections/Feedback_Section";
import Plans_Section from "../OilAndGas_Sections/Plans_Section";
import '../OilAndGas_Sections/style.css'

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
