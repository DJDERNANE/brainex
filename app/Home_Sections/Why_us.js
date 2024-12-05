import "./style.css"
import Article from "@/app/components/Article/Article";

export default function Why_us() {
    const posts = [
        {
            title: "Innovation Leaders",
            desc: "We are a team of AI specialists with extensive expertise in Machine Learning and Deep Learning.",
        },
        {
            title: "Proven Excellence",
            desc: "With a track record of success, Cambridge BraineX has demonstrated its ability to drive tangible results for businesses across industries, showcasing its expertise and reliability in the field of AI.",
        },
        {
            title: "Tailored Solutions",
            desc: "Cambridge BraineX understands the unique needs of each business and offers tailored AI solutions to address specific challenges, ensuring alignment with strategic objectives",
        }
    ]
    return (
        <div className="relative">
            <div className="why-us-section py-4  container ">
                <p className="text-start text-white py-4 welcome-h1">Why us ?</p>
                <div className="pt-[50px] pb-[200px] flex flex-col md:flex-row justify-between relative">
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