import "./style.css"
import { ButtonSecondary } from "../components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative bg-[#000002] h-screen overflow-hidden">
      <div className="relative z-20 mt-[200px] container">
        <h1 className="welcome-h1 text-white">
          Shaping Tomorrow's <br /> Intelligence
        </h1>
        <p className="text-white py-4 welcome-subtitle">
          BrainEx understands the unique needs of each business and offers <br />
          tailored AI solutions to address specific challenges
        </p>
        <ButtonSecondary text="Register now"/> 
      </div>
      <video
        className="absolute bottom-[-100px] right-[-200px] w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/welcome_to_brainex.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}