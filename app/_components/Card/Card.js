
import { icons } from "lucide-react"
import "./style.css"

export default function Card({ title, subtitle, key, contain_img = false, img, svgIcon= "" }) {
    return (
        <div className="card" key={key}>
            {
                <div className="svg-icon">
                    {svgIcon}
                </div>
            }
            <div className="h-[350px]">
            {
                    contain_img &&  <img src={img} alt="" className="innovation-icons"/>
                }
            </div>
            <p className="card-title my-2">
                {title}
            </p>
            <p className="card-subtitle">
                {subtitle}
            </p>
        </div>
    )
}