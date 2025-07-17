import "./style.css"
import Article from "@/app/_components/Article/Article";

export default function Why_us() {
    const posts = [
        {
            title: "Cross-Disciplinary Expertise",
            desc: "Our team unites top experts in AI, Robotics, Automation and, IoT, blending technical and  industry insight to build integrated, high-impact solutions.",
        },
        {
            title: "Practical Innovation",
            desc: "We transform advanced technologies into real-world solutions across various sectors, successfully addressing the operational challenges of industries.",
        },
        {
            title: "Tailored Solutions",
            desc: "We approach each project with a client-centric mindset, designing customized solutions that align precisely with business objectives and long-term strategic goals.",
        }
    ]
    return (
        <div className="relative">
            <div className="why-us-section py-4  container ">
                <p className="text-start text-white py-4 welcome-h1">WHY US?</p>
                <div className="pt-[50px] pb-[200px] flex flex-col md:flex-row justify-between relative">
                    {posts.map((item, index) => (
                        <Article
                            key={index}  // Ensure key is passed here
                            title={item.title}
                            subtitle={item.desc}
                            Whyus={true}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}