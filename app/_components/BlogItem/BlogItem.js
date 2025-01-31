import React from 'react'
import BlogDate from '../BlogDate/BlogDate'
import BlogContent from '../BlogContent/BlogContent'
const BlogItem = ({ news }) => {
    return (
        <div className="blog-item relative cursor-pointer">
            <BlogDate news={news} />
            <BlogContent news={news} />
        </div>
    )
}

export default BlogItem