import "./style.css"
import { ButtonSecondary } from "../components/Button/Button";
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
          Accelerated FullStack <br /> JavaScript Training
        </h1>
        <p className="text-white py-4 welcome-subtitle">
        Start your journey by acquiring a robust <br />
        technical foundation,
        </p>
        <ButtonSecondary text="Register now"/> 
      </div>
    </div>
  );
}