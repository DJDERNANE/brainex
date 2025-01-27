const NewsTitle = ({ news }) => {
    return (
        <div className="news-section">
            <img src={"/point.png"} alt={"point"} className="absolute left-[-25px]"/>
            <div className="feature">Feature</div>
            <h1 className="news-title">{news.title}</h1>
            <div className="news-date">
                {news.date}
            </div>
        </div>
        );
}

export default NewsTitle