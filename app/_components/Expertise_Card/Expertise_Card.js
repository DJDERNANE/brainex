import "./style.css"
import Image from "next/image"

export default function ExpertiseCard({ title, desc, img }) {
    return (
        <div className="expertise-card">
            <li className="w-full mx-auto group sm:max-w-sm">
                <a href="#">
                    <div>
                        <Image src={'/' + img } width={100} height={100} alt="logo" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </div>
                    
                    <div className="pt-[60px]">
                        <h3>{title}</h3>
                        <p className="desc">{desc}</p>
                    </div>
                </a>
            </li>
        </div>
    )
}
