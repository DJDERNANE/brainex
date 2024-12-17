"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/OilAndGas_Sections/WelcomeSection";
import FooterSection from "../../_components/FooterSection/FooterSection";
import Why_Brainex from "@/app/_sections/OilAndGas_Sections/Why_Brainex";
import Plans_Section from "@/app/_sections/OilAndGas_Sections/Plans_Section";
import Why_us from "@/app/_sections/OilAndGas_Sections/Why_us";
import Combridge from "@/app/_sections/OilAndGas_Sections/Combridge";
import Transform from "@/app/_sections/OilAndGas_Sections/Transform";
import Promise from "@/app/_sections/OilAndGas_Sections/Promise";
import Solutions from "@/app/_sections/OilAndGas_Sections/Solutions";
import AiSection from "@/app/_sections/OilAndGas_Sections/AiSection";

export default function Oil_Gaz() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        <Combridge/>
        <Why_us/>

        <Why_Brainex/>
        <Plans_Section/>
        <Transform />
        <Solutions />
        <Promise />
        <AiSection/>
        <FooterSection />
    </div>
  );
}
