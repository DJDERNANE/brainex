import "./style.css"
import { ButtonSecondary } from "../components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative oil-section h-screen overflow-hidden">
      <div className="relative z-20  container">
        <div className="grid grid-cols-2 gap-[100px] pb-[60px]">
          <h1 className="oil_gaz_front text-white">
            Revolutionize the Energy 
            Sector with AI-Driven 
            Digital Transformation
          </h1>
          <p className="text-white oil_gaz_paragraph">
          Unlock the potential of Artificial Intelligence to  <br /> transform your energy operations and <br />  strategies.
          </p>
        </div>
       
        <ButtonSecondary text="Get in  touch"/> 
      </div>
      <div className="absolute bottom-[0px] right-[0px] w-full z-10 text-white py-[50px] flex items-center justify-center gap-[50px] text-[18px]">
        <span>Drive innovation</span>
        <span>Optimize efficiency</span>
        <span>Ensure sustainability</span>
      </div>
    </div>
  );
}