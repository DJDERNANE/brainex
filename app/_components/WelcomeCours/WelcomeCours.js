import { ButtonSecondary } from "@/app/_components/Button/Button";
export default function WelcomeCours({ bg, title, desc }) {
    return (
        <div className="relative traing-section h-screen overflow-hidden z-1" style={{ backgroundImage: `url(${bg})` }}>
            <div className="relative z-1 mt-[200px] container">
                <p className="combridge">
                    Cambridge Brainex Academy
                </p>
                <h1 className="welcome-h1 text-white max-w-[500px]">
                    {title}
                </h1>
                <p className="text-white py-4 welcome-subtitle">
                    {desc}
                </p>
                <ButtonSecondary text="Register now" link={"#contact"} />
            </div>
        </div>
    );
}