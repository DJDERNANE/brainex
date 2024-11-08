import ExpertiseCard from "../components/Expertise_Card/Expertise_Card"
import { ButtonSecondary } from "../components/Button/Button"
export default function Expertise_Section() {
    const posts = [
        {
            title: "Oil and Gas",
            desc: "Our data science experts specialize in extracting actionable insights from complex datasets.",
            img: "./service_brainex.png",
        },
        {
            title: "AI Experts",
            desc: "Our AI specialists develop sophisticated algorithms to automate tasks and enhance operational efficiency. ",
            img: "./ai_experts.png",
        },
        {
            title: "Electronics Specialists",
            desc: "Our team excels in designing and implementing advanced electronic systems.",
            img: "./electronics_specialists.png",
        },

    ]
    return (
        <div className="relative">
            <div className="why-us-section py-4  container ">
                <p className="text-start text-white py-4 welcome-h1">introducing  <br />
                    <span className="innovation">Our field of expertise</span>  </p>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((item, index) => (
                        <ExpertiseCard
                            key={index}  // Ensure key is passed here
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                        />
                    ))}
                </ul>
            </div>

            <div className="expertise-register py-4  container flex justify-between items-center  ">
                <div className="flex-[1] ">
                    <p className="text-start text-white py-4 expertise-register-h1 w-[90%]">The first Algerian school devoted to the professions of the future</p>
                    <p className="text-white Expertise-register-desc pb-5">Learn the most in-demand technological skills on the market 
                    with Cambridge Brainex.</p>
                    <ButtonSecondary text="Register now"/>
                </div>
                <div className="flex-[1] ">
                    <img src="/brainex_expertise.png" alt="brainex expertiser"  className="expertise-register-img"/>
                </div>
            </div>

        </div>
    )
}