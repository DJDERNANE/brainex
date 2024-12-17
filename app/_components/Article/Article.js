
import "./style.css"

export default function Article({ title, subtitle, img, icon=null, contain_img=false}) {
    return (
        <article className={`relative ${contain_img && "contain-img"}`}>
            <div className="article-image  ">
                {
                    contain_img &&  <img src={img} alt="brainex" className="innovation-icons"/>
                }
                <div className="absolute top-10 left-10">
                    {
                        icon
                    }
                </div>
              
               
            </div>
            <p className="article-title">
                {title}
            </p>
            <p className="article-subtitle">
                {subtitle}
            </p>
        </article>
    )
}