
import "./style.css"

export default function Article({ title, subtitle, img, icon=null, contain_img=false, Whyus=false }) {
    return (
        <article className={`relative ${!Whyus && "contain-img"}  ${contain_img && " courses"} `} >
            <div className="article-image  ">
                {
                    contain_img &&  <img src={img} alt="" className="innovation-icons"/>
                }
                <div className="absolute top-10 left-10">
                    {
                        icon
                    }
                </div>
              
               
            </div>
            <p className={`article-title courses ${Whyus && "whyus"}`} >
                {title}
            </p>
            <p className={`article-subtitle ${Whyus && "whyus"} courses`}>
                {subtitle}
            </p>
        </article>
    )
}