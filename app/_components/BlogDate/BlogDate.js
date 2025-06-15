const BlogDate = ({ news }) => {
    return (
        <div className="blog_section" >
           
            <img src={"/green_point.png"} alt={"point"} className="absolute left-[-20px]" width={10} height={10}/>
            <div className="news-date">
                {news.date}
            </div>
        </div>
        );
}

export default BlogDate