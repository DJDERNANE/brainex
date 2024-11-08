import "./style.css"
import Article from "@/app/components/Article/Article";

export default function Why_us() {
    const posts = [
        {
            title: "Innovation Leaders",
            desc: "BrainEx leads the charge in AI innovation, consistently delivering groundbreaking solutions that redefine the possibilities of artificial intelligence.",
        },
        {
            title: "Proven Excellence",
            desc: "With a track record of success, BrainEx has demonstrated its ability to drive tangible results for businesses across industries, showcasing its expertise and reliability in the field of AI.",
        },
        {
            title: "Tailored Solutions",
            desc: "BrainEx understands the unique needs of each business and offers tailored AI solutions to address specific challenges, ensuring alignment with strategic objectives",
        }
    ]
    return (
        <div className="relative">
            <div className="why-us-section py-4  container ">
                <p className="text-start text-white py-4 welcome-h1">Why rely us ?</p>
                <div className="pt-[50px] pb-[200px] flex justify-between relative">
                    {posts.map((item, index) => (
                        <Article
                            key={index}  // Ensure key is passed here
                            title={item.title}
                            subtitle={item.desc}

                        />
                    ))}
                </div>
            </div>
        </div>

    )
}