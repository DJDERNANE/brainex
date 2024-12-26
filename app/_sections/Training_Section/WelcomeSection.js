import "./style.css"
import { ButtonSecondary } from "../../_components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative traing-section h-screen overflow-hidden z-1">
      <div className="relative z-1 mt-[200px] container">
        <p className="combridge">
          Cambridge Brainex Academy
        </p>
        <h1 className="welcome-h1 text-white w-[60%]">
        The Leading Algerian School Devoted to the Professions of the Future
        </h1>
        <ButtonSecondary text="Register now"/> 
      </div>
    </div>
  );
}