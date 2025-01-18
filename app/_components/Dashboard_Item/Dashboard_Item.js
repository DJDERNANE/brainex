import "./style.css"



export default function Dashboard_Item({ img, text, link }) {
    return (
        <a className="dashboard-item w-full " href={link}>
            {img}
            <p className="dashboard-item-text text-white">{text}</p>
        </a>
    )
}