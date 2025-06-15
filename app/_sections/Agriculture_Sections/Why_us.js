import OilCard from "../../_components/OilCard/OilCard";
import "./style.css"

export default function Why_us() {
    const posts = [
        {
            title: "Crop Health Monitoring",
            desc: "Collaboration with agri-tech pioneers and AI researchers to deliver solutions that address local and global farming challenges.",
        },
        {
            title: "Transformative Vision",
            desc: "Empowering farmers and agribusinesses to adopt sustainable practices and compete in a rapidly evolving global market.",
        },
        {
            title: "Comprehensive Support",
            desc: "End-to-end services, from AI strategy development to in-field implementation and farmer training programs.",
        }
    ]
    return (
        <div className="relative">
            <div className="why-us-section oil py-4  container ">
                <p className="green-text p-0 m-0">Why us</p>
                <p className="text-start text-white pb-4 pt-0 welcome-h1">What Makes Us Unique?</p>
                <div className="pt-[50px] pb-[200px] grid md:grid-cols-3 gap-[70px]">
                    {posts.map((item, index) => (
                        <OilCard
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