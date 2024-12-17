import Acceleration_Card from "../../_components/Acceleration_Card/Acceleration_Card";
import "./style.css"
import Article from "../../_components/Article/Article";
export default function Why_Brainex() {
    const posts =[
        {
            icon:<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="4"/>
            <path d="M30 18.7996V29.732C30 29.8991 30.0836 30.0553 30.2226 30.148L38.4 35.5996" stroke="white" strokeWidth="4" stroke-linecap="round"/>
          </svg>,
            title: "Courses",
            desc: "Our educational platform is accessible 24/7, enabling continuous learning and assimilation of course materials at your convenience.",

        },
        {
            icon:<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37 9.25V15.4167M16.3852 22.5519L12.0247 18.1914M57.6145 22.5519L61.975 18.1914M18.5 46.25C18.5 36.0327 26.7827 27.75 37 27.75C47.2173 27.75 55.5 36.0327 55.5 46.25M67.8333 46.25H6.16666M58.5833 58.5833H15.4167" stroke="white" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            ,
            title: "Courses",
            desc: "Our educational platform is accessible 24/7, enabling continuous learning and assimilation of course materials at your convenience.",

        },
        {
            icon:<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.8333 48.8531C63.7837 50.6845 59.2883 51.704 54.5549 51.704C36.7388 51.704 22.2961 37.2613 22.2961 19.4452C22.2961 14.7118 23.3156 10.2164 25.147 6.16675C13.9544 11.2284 6.16667 22.4921 6.16667 35.5746C6.16667 53.3907 20.6094 67.8334 38.4255 67.8334C51.508 67.8334 62.7716 60.0456 67.8333 48.8531Z" stroke="white" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>,
           title: "Courses",
           desc: "Our educational platform is accessible 24/7, enabling continuous learning and assimilation of course materials at your convenience.",
        },
    ]
    return (
        <div className=" py-[100px] mx-auto container">
            <p className="text-white text-center subtitle">Why CambridgeBranex?</p>
            <h1 className="text-center training-h1">Study according to the schedule 
            that suits you .</h1>
            <div className="pt-[150px] pb-[200px] flex justify-between">
                {posts.map((item, index) => (
                    <Article
                        key={index}  // Ensure key is passed here
                        title={item.title}
                        subtitle={item.desc}
                        icon={item.icon}
                        contain_img={false}
                    />
                ))}
            </div>
        </div>
    );
}