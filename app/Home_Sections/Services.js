import "./style.css"
import Card from "../components/Card/Card"
import Article from "../components/Article/Article"
    export default function Services() {

    const posts = [
        {
            contain_img: true,
            title: "Oil and Gas",
            img: "./brainex_oil_gas.png",
            desc: "12% of the total supply of 10 billionMATIC is allocated to fund stakingrewards. As a validator, you set yourown commission for acceptingdelegations to your node. There arealso annual incentives available!"
        },
        {
            contain_img: true,
            img: "./brainex_agriculture.png",
            title: "Agriculture",
             desc: "12% of the total supply of 10 billionMATIC is allocated to fund stakingrewards. As a validator, you set yourown commission for acceptingdelegations to your node. There arealso annual incentives available!"
        },
        {
            contain_img: true,
            img: "./brainex_electronics.png",
            title: "Electronics",
             desc: "12% of the total supply of 10 billionMATIC is allocated to fund stakingrewards. As a validator, you set yourown commission for acceptingdelegations to your node. There arealso annual incentives available!"
        }
    ]
    return (
        <div className="services container pt-[250px] pb-[150px]">
            <div className="flex justify-between gap-6">
                <div className="flex-[1]">
                    <p className="text-start text-white py-4 welcome-h1 h-[160px]">Our <br /> <span className="innovation">Services</span></p>
                    <p className="services-subtitle pt-[50px]">
                        At BrainEx, we prioritize the privacy and security of our clients' data. We implement robust security measures and adhere to strict data protection protocols to safeguard sensitive information throughout the AI development and deployment process.
                    </p>
                </div>
                <div className="flex-[2]">
                    <Card contain_img={true} img="./brainex_ai.png" title="Artificial Intelligence" subtitle="We offer tailored AI services for companies, including data analysis, machine learning, natural language processing, and intelligent automation, to enhance efficiency and drive innovation." />
                </div>
            </div>
            <div className="pt-[150px] pb-[200px] flex justify-between relative">
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