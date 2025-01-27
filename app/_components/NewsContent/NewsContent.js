const NewsContent = ({news}) => {
    
    return (
        <div className="news-section">
            <div className="news-img-container">
                <img src={news.image} alt={news.title} />
            </div>
            <p className="news-desc">
                {news.desc}
            </p>
        </div>
    )
}

export default NewsContent