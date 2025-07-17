import OilCard from "../../_components/OilCard/OilCard";
import "./style.css"

export default function Why_us() {
    const posts = [
        {
            title: "Global Expertise",
            desc: "We have access to international, world-leading AI experts in the energy sector and beyond.",
        },
        {
            title: "Transformative Vision",
            desc: "We aim to digitally transform Algeria’s business landscape by applying advanced AI technologies tailored to local and global challenges.",
        },
        {
            title: "Comprehensive Support",
            desc: "From consultancy services to in-house training and AI solution development, we offer a 360° approach to empower organizations and ensure long-term success.",
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