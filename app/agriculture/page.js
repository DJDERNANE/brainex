"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/Agriculture_Sections/WelcomeSection";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import Why_Brainex from "@/app/_sections/Agriculture_Sections/Why_Brainex";
import Plans_Section from "@/app/_sections/Agriculture_Sections/Plans_Section";
import Why_us from "@/app/_sections/Agriculture_Sections/Why_us";
import Combridge from "@/app/_sections/Agriculture_Sections/Combridge";
import Transform from "@/app/_sections/Agriculture_Sections/Transform";
import Promise from "@/app/_sections/Agriculture_Sections/Promise";
import Solutions from "@/app/_sections/Agriculture_Sections/Solutions";
import AiSection from "@/app/_sections/Agriculture_Sections/AiSection";

export default function Oil_Gaz() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        <Solutions />
        <Why_us/>

        <Why_Brainex/>
        <Promise />
        <Plans_Section/>
       
       
        <AiSection/>
        <FooterSection />
    </div>
  );
}
