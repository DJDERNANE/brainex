import React from 'react'
import NewsTitle from '../NewsTitle/NewsTitle'
import NewsContent from '../NewsContent/NewsContent'
const NewsItem = ({ news }) => {
    return (
        <div className="news-item relative">
            <NewsTitle news={news} />
            <NewsContent news={news} />
        </div>
    )
}

export default NewsItem