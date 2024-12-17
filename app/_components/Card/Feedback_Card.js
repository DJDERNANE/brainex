
import "./style.css"
export default function Feedback_Card({ name, position, raiting, feedback, key, img }) {
    return (
        <div className="feedback_card" key={key}>
            <div className="h-[217px] feedback_img">
                    <img src={img} alt="Brainex " />
            </div>
            <p className="person-name ">
                {name}
            </p>
            <p className="person-position">
                {position}
            </p>
            <p className="feedback">
                {feedback}
            </p>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path d="M10.9345 0.946289L14.2124 7.36924L21.3339 8.50186L16.2382 13.6041L17.3617 20.727L10.9345 17.4574L4.50737 20.727L5.63085 13.6041L0.535173 8.50186L7.65667 7.36924L10.9345 0.946289Z" fill="url(#paint0_linear_10_2262)" />
                    <defs>
                        <linearGradient id="paint0_linear_10_2262" x1="10.9345" y1="0.946289" x2="-8.51708" y2="4.46642" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C887" />
                            <stop offset="1" stopColor="#2384FD" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="text-white flex ml-2">

                    {raiting} <span>/5</span>

                </span>
            </div>
        </div>
    )
}