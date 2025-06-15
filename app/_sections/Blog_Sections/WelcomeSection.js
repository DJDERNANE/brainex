import "./style.css"
import { ButtonSecondary } from "../../_components/Button/Button";
export default function WelcomeSection() {
  return (
    <div className="relative bg-[#000002] h-screen overflow-hidden news_bg z-10">
      <div className="relative z-20 mt-[200px] md:mt-[150px] container text-center md:text-left">
        <h1 className="welcome-h1 text-white w-[50%]  text-center m-auto">
          Explore Our company’s latest  
        </h1>
        <h1 className="welcome-h1 text-white w-[50%]  text-center m-auto">
          Blogs
        </h1>
        <p className="text-white md:py-4 welcome-subtitle py-[40px] w-[60%] m-auto ">
        Discover Our latest Blogs related to the new era of Ai and all Tech related topics in the modern world .
        </p>
      </div>
    </div>
  );
}