import "./style.css"
import { ButtonSecondary } from "../../_components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative oil-section h-screen overflow-hidden">
      <div className="relative z-20  container">
        <div className="grid md:grid-cols-2 md:gap-[100px] pb-[60px]">
          <h1 className="oil_gaz_front text-white">
          AI in Agriculture:  <br/>
          Smart Farming Revolution
          </h1>
          <p className="text-white oil_gaz_paragraph">
          Elevating agricultural practices with AI-driven crop monitoring, precision farming, and predictive analytics to maximize yields and sustainability.
          </p>
        </div>
        <div className="flex items-center md:hidden relative h-[200px]">
          <img src="/img.png" alt="lkkezffkez" className="absolute top-0 left-0 h-[100%] w-[100%] "  />
          <ButtonSecondary link={'#solutions'} text="See our solutions" addClassName={' absolute bottom-[-30%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full' }/> 
        </div>
       
        <ButtonSecondary text="See our solutions" addClassName={'hidden-btn md:flex'} link={'#solutions'}/> 
      </div>
      <div className="absolute bottom-[0px] right-[0px] w-full z-10 text-white md:py-[50px] flex items-center md:justify-center justify-start md:gap-[50px] text-[18px]  flex-col md:flex-row ">
        <span className="res-span">Drive innovation</span>
        
        <span  className="res-span">Optimize efficiency</span>
        <span  className="res-span">Ensure sustainability</span>
      </div>
    </div>
  );
}