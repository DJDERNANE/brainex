import "./style.css"
import Card from "../../_components/Card/Card"
export default function Innovation() {
    const posts = [
        {
            title: "Our Mission",
            description: "Welcome to Cambridge BraineX, where we are at the forefront of AI research and innovation. Our team of experts is dedicated to pushing the boundaries of what's possible in artificial intelligence, unlocking new potentials and reshaping industries..",
            svgIcon: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10ZM66.7246 37.3296C63.9735 31.7552 56.0247 31.7552 53.2736 37.3296L49.3315 45.3172L40.5166 46.598C34.365 47.4919 31.9086 55.0517 36.36 59.3907L42.7385 65.6082L41.2328 74.3875C40.1819 80.5143 46.6127 85.1865 52.1149 82.2938L59.9991 78.1488L67.8834 82.2938C73.3856 85.1865 79.8163 80.5143 78.7655 74.3875L77.2597 65.6082L83.6382 59.3907C88.0896 55.0517 85.6333 47.4919 79.4816 46.598L70.6668 45.3172L66.7246 37.3296Z" fill="white"/>
          </svg>
        },
        {
            title: "Our Vision",
            description: "Our vision at Cambridge BraineX is to be a global leader in AI research and development, pioneering breakthroughs that shape the future of intelligence. We envision a world where AI technology enhances every aspect of human life, making businesses smarter, societies more connected, and the world more prosperous.",
            svgIcon:<svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.0011 27.9167C55.2206 27.9167 44.635 33.0951 36.2431 39.1328C27.807 45.2022 21.1058 52.4848 16.9749 57.5002C12.3931 63.0629 12.3931 70.9373 16.9749 76.5C21.1058 81.5154 27.807 88.798 36.2431 94.8674C44.635 100.905 55.2206 106.083 67.0011 106.083C78.7815 106.083 89.3671 100.905 97.7591 94.8674C106.195 88.798 112.896 81.5154 117.027 76.5C121.609 70.9373 121.609 63.0629 117.027 57.5002C112.896 52.4848 106.195 45.2022 97.7591 39.1328C89.3671 33.0951 78.7815 27.9167 67.0011 27.9167ZM67.0001 55.8334C60.8329 55.8334 55.8334 60.8329 55.8334 67.0001C55.8334 73.1673 60.8329 78.1667 67.0001 78.1667C73.1673 78.1667 78.1667 73.1673 78.1667 67.0001C78.1667 60.8329 73.1673 55.8334 67.0001 55.8334ZM44.6667 67.0001C44.6667 54.6657 54.6657 44.6667 67.0001 44.6667C79.3344 44.6667 89.3334 54.6657 89.3334 67.0001C89.3334 79.3344 79.3344 89.3334 67.0001 89.3334C54.6657 89.3334 44.6667 79.3344 44.6667 67.0001Z" fill="white"/>
          </svg>
        },
        {
            title: "Our Goal",
            description: "Our goal at Cambridge BraineX is to deliver unparalleled value to our clients by harnessing the power of AI to solve complex challenges and drive sustainable growth. We aim to continuously push the boundaries of what's possible in artificial intelligence, driving innovation, and making a positive impact on businesses and society as a whole.",
            svgIcon: <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.7114 4.58634C44.2134 -1.22604 35.7868 -1.22605 32.2888 4.58634L23.7965 18.6976L7.75159 22.4137C1.14277 23.9443 -1.46122 31.9585 2.98576 37.0814L13.7821 49.5187L12.3581 65.9266C11.7716 72.6849 18.5889 77.638 24.8352 74.9918L40.0001 68.5671L55.1649 74.9918C61.4112 77.638 68.2286 72.685 67.642 65.9266L66.218 49.5187L77.0144 37.0814C81.4614 31.9585 78.8574 23.9443 72.2486 22.4137L56.2037 18.6976L47.7114 4.58634Z" fill="white"/>
          </svg>
        },
        {
            title: "Ethical AI Commitment",
            description: "At Cambridge BraineX, we are committed to the responsible development and deployment of AI technologies. We prioritize ethical considerations in all aspects of our work, ensuring that our AI solutions uphold principles of fairness, transparency, and accountability. ",
            svgIcon: <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M63 10.5C34.0051 10.5 10.5 34.0051 10.5 63C10.5 72.5302 13.0437 81.4779 17.4891 89.1886C18.3945 90.759 18.5498 92.671 17.7858 94.3148L13.3038 103.958C10.5518 109.165 14.3187 115.5 20.2733 115.5H63C91.9949 115.5 115.5 91.9949 115.5 63C115.5 34.0051 91.9949 10.5 63 10.5ZM82.3407 48.6699C84.456 50.653 84.5632 53.9754 82.5801 56.0907L62.8926 77.0907C61.0118 79.0969 57.9017 79.3118 55.7628 77.5834L43.9503 68.038C41.6951 66.2156 41.3442 62.91 43.1666 60.6548C44.989 58.3996 48.2945 58.0488 50.5497 59.8711L58.5685 66.3509L74.9199 48.9093C76.903 46.794 80.2254 46.6869 82.3407 48.6699Z" fill="white"/>
          </svg>
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
                            svgIcon={item.svgIcon}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
