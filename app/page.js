"use client "
import Navbar from "@/app/components/Navbar/Navbar";
import WelcomeSection from "@/app/Home_Sections/WelcomeSection";
import Trust_us_Section from "@/app/Home_Sections/Trust_us_Section";
import Why_us from "@/app/Home_Sections/Why_us";
import Innovation from "@/app/Home_Sections/Innovation";
import Services from "@/app/Home_Sections/Services";
import Expertise_Section from "@/app/Home_Sections/Expertise_Section";
import FooterSection from "@/app/components/FooterSection/FooterSection";
import Subscribe_Section from "@/app/Home_Sections/Subscribe_Section";
import FAQ from "@/app/Home_Sections/FAQ";
import Feedback_Section from "@/app/Home_Sections/Feedback_Section";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
        <Navbar />
        <WelcomeSection />
        {/* <Trust_us_Section /> */}
        <Why_us />
        <Innovation />
        <Services />
        <Expertise_Section/>
        {/* <Feedback_Section/> */}
        <FAQ/>
        <Subscribe_Section/>
        <FooterSection />
    </div>
  );
}
