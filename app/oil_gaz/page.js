"use client "
import Navbar from "@/app/components/Navbar/Navbar";
import WelcomeSection from "../OilAndGas_Sections/WelcomeSection";
import FooterSection from "../components/FooterSection/FooterSection";
import Why_Brainex from "../OilAndGas_Sections/Why_Brainex";
import Plans_Section from "../OilAndGas_Sections/Plans_Section";
import Why_us from "../OilAndGas_Sections/Why_us";
import Combridge from "../OilAndGas_Sections/Combridge";
import Transform from "../OilAndGas_Sections/Transform";
import Promise from "../OilAndGas_Sections/Promise";
import Ai from "../OilAndGas_Sections/AI";

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
        <Promise />
        <Ai/>
        <FooterSection />
    </div>
  );
}
