import "./style.css"
import Card from "../components/Card/Card"
export default function Innovation() {
    const posts = [
        {
            title: "Our Mission",
            description: "Welcome to Cambridge BraineX, where we are at the forefront of AI research and innovation. Our team of experts is dedicated to pushing the boundaries of what's possible in artificial intelligence, unlocking new potentials and reshaping industries..",
        },
        {
            title: "Our Vision",
            description: "Our vision at Cambridge BraineX is to be a global leader in AI research and development, pioneering breakthroughs that shape the future of intelligence. We envision a world where AI technology enhances every aspect of human life, making businesses smarter, societies more connected, and the world more prosperous.",
        },
        {
            title: "Our Goal",
            description: "Our goal at Cambridge BraineX is to deliver unparalleled value to our clients by harnessing the power of AI to solve complex challenges and drive sustainable growth. We aim to continuously push the boundaries of what's possible in artificial intelligence, driving innovation, and making a positive impact on businesses and society as a whole.",
        },
        {
            title: "Ethical AI Commitment",
            description: "At Cambridge BraineX, we are committed to the responsible development and deployment of AI technologies. We prioritize ethical considerations in all aspects of our work, ensuring that our AI solutions uphold principles of fairness, transparency, and accountability. ",
        }
    ]
    return (
        <div className="innovation-section py-4 ">
            <div className="container flex flex-col md:flex-row justify-between gap-6">
                <div className="">
                    <div className="h-[130px] w-[50px]">

                    </div>
                    <p className="text-start text-white py-4 welcome-h1 h-[160px]">About <br /> <span className="innovation">Cambridge BraineX</span></p>
                </div>

                <div className="pt-[50px] pb-[200px]">
                    {posts.map((item, index) => (
                        <Card
                            key={index} // Ensure key is passed here
                            title={item.title}
                            subtitle={item.description}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
