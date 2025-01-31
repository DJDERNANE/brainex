"use client "
import Navbar from "@/app/_components/Navbar/Navbar";
import WelcomeSection from "@/app/_sections/Blog_Sections/WelcomeSection";
import FooterSection from "@/app/_components/FooterSection/FooterSection";
import Blog_content from "../_sections/Blog_Sections/Blog_content";
import ModalBlog from "../_components/ModalBlog/ModalBlog";


export default function Oil_Gaz() {
  return (
    <div className="">
        <Navbar />
        <div className="relative">
          <WelcomeSection />
          <Blog_content />
          <FooterSection />
          <ModalBlog />
        </div>
        
    </div>
  );
}
