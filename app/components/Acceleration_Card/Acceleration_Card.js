import "./style.css"
export default function Acceleration_Card({ icon, title, desc , gris=false}) {
    return (
        <div className={`acceleration-card ${gris && "gris"}`}>
            <div className="acceleration-card-icon flex items-center justify-end">
                {
                    icon
                }

            </div>
            <p className="acceleration-card-title text-white">{title}</p>
            <p className="acceleration-card-subtitle ">{desc}</p>
        </div>
    )
}