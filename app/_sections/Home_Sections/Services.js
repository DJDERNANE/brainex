import "./style.css"
import Card from "../../_components/Card/Card"
import Article from "../../_components/Article/Article"

    export default function Services() {

    const posts = [
        {
            contain_img: true,
            title: "AI in Oil and Gas",
            img: "./brainex_oil_gas.png",
            desc: "Optimizing Energy Exploration Harnessing AI to enhance efficiency in drilling, exploration, and predictive maintenance, reducing costs and environmental impact."
        },
        {
            contain_img: true,
            img: "./brainex_agriculture.png",
            title: "AI in Agriculture",
            desc: "Cultivating Smarter Farming Empowering precision agriculture with AI to optimize crop yield, monitor conditions, and ensure sustainable food production."
        },
        {
            contain_img: true,
            img: "./brainex_electronics.png",
            title: "Electronics",
             desc: "Revolutionizing Smart Devices AI drives innovation in electronics, enabling smarter automation, predictive analytics, and personalized user experiences."
        }
    ]
    return (
        <div className="services container pt-[250px] pb-[150px]">
            <div className="flex justify-between flex-col md:flex-row gap-6">
                <div className="flex-[1]">
                    <p className="text-start text-white py-4 welcome-h1 h-[160px]">Our <br /> <span className="innovation">Services</span></p>
                    <p className="services-subtitle pt-[50px] w-[100%]">
                        At Cambridge BraineX, we prioritize the privacy and security of our clients' data. We implement robust security measures and adhere to strict data protection protocols to safeguard sensitive information throughout the AI development and deployment process.
                    </p>
                </div>
                <div className="flex-[2]">
                    <Card contain_img={true} img="./brainex_ai.png" title="Artificial Intelligence" subtitle="We offer tailored AI services for companies, including data analysis, machine learning, natural language processing, and intelligent automation, to enhance efficiency and drive innovation." />
                </div>
            </div>
            <div className="pt-[150px] pb-[200px] flex flex-col md:flex-row justify-between relative">
                {posts.map((item, index) => (
                    <Article
                        key={index}  // Ensure key is passed here
                        title={item.title}
                        subtitle={item.desc}
                        img={item.img}
                        contain_img={item.contain_img}
                    />
                ))}
            </div>

        </div>
    )
}