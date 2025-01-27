"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/News_Sections/WelcomeSection";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import News_Types from "../_sections/News_Sections/News_types";
import News_content from "../_sections/News_Sections/News_content";


export default function Oil_Gaz() {
  return (
    <div className="">
        <Navbar />
        <WelcomeSection />
        <News_Types />
        <News_content />
        <FooterSection />
    </div>
  );
}
