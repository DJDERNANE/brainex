const BlogContent = ({ news }) => {

    return (
        <div>
            <div className="blog-img-container">
                <div className="blog-title">
                    Read Blog : Your title .
                </div>
                <div className="blog-headline">
                    Seamlessly switch between multiple user accounts without logging out, enhancing workflow efficiency and security.
                </div>
                <hr className="my-4 " />
                <img src={news.image} alt={news.title} className="w-full my-[25px] h-[0px]" />
                <p className="blog-desc">
                    {news.desc}
                </p>
            </div>

        </div>
    )
}

export default BlogContent