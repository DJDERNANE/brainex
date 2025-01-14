import "./style.css"
import { ButtonSecondary } from "../../_components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative bg-[#000002] h-screen overflow-hidden">
      <div className="relative z-20 mt-[100px] md:mt-[200px] container text-center md:text-left">
        <h1 className="welcome-h1 text-white w-[100%] md:w-[600px]">
          Shaping Tomorrow's Intelligence
        </h1>
        <p className="text-white md:py-4 welcome-subtitle py-[40px] w-[500px]">
        Cambridge BraineX understands the unique needs of your business and offers tailored AI solutions to address your specific challenges.
        </p>
        <ButtonSecondary text="Register now" addClassName={'m-auto md:m-0 '} link={"#get_in_touch"}/> 
      </div>
      <video
        className="absolute bottom-[0px] right-[0px] md:bottom-[-100px] md:right-[-200px] w-full h-full object-cover z-10"
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