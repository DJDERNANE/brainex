import "./style.css"



export default function Dashboard_Item({ img, text }) {
    return (
        <div className="dashboard-item w-full ">
            {img}
            <p className="dashboard-item-text text-white">{text}</p>
        </div>
    )
}