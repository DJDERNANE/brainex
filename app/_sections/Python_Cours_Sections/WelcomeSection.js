import "./style.css"
import { ButtonSecondary } from "../../_components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative traing-section h-screen overflow-hidden">
      <div className="absolute top-[0px] right-[0px] w-full h-full  z-10 gradiant-black">

      </div>
      <div className="relative z-20 mt-[200px] container">
        <p className="combridge">
          Cambridge Brainex Academy
        </p>
        <h1 className="welcome-h1 text-white">
          Foundations Of  Python <br /> Programming
        </h1>
        <p className="text-white py-4 welcome-subtitle">
        Shape Your Coding Path with Python  <br />
        Fundamentals
        </p>
        <ButtonSecondary text="Register now"/> 
      </div>
    </div>
  );
}