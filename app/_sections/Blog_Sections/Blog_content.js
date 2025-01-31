"use client";
import BlogItem from "@/app/_components/BlogItem/BlogItem"
import { PaginationDemo } from "@/app/_components/Pagination/Pagination"
const Blog_content = () => {
    const news = [
        {
            title: "Pioneering AI Excellence: Cambridge BraineX at Industry Expos",
            desc: `With a mission to transform industries, Cambridge BraineX proudly participates in key industry expos worldwide. From live demos to insightful panel discussions, the team demonstrates how their 

expertise in AI and advanced analytics is solving real-world challenges. Each event amplifies their vision of creating smarter, more efficient systems for a better tomorrow.`,
            date: "May 19, 2023",
            image: "/news1.png"
        },
        {
            title: "Pioneering AI Excellence: Cambridge BraineX at Industry Expos",
            desc: `With a mission to transform industries, Cambridge BraineX proudly participates in key industry expos worldwide. From live demos to insightful panel discussions, the team demonstrates how their 

expertise in AI and advanced analytics is solving real-world challenges. Each event amplifies their vision of creating smarter, more efficient systems for a better tomorrow.`,
            date: "May 19, 2023",
            image: "/news1.png"
        }
    ];

    const ShowModal = (item) => {
        console.log(item)
    }
    return (
        <div className="news-content-section my-4   flex flex-col  justify-between items-center my-[50px] relative">
           
            <div className="container news_parent">

                <PaginationDemo className="mt-[50px]" />
                {
                    news.map((item, index) => {
                        return (
                            <div key={index} onClick={() => ShowModal(item)} >

                                <BlogItem news={item} />
                            </div>
                        )
                    })
                }
                <PaginationDemo className="mb-6" />
            </div>
        </div>
    )
}
export default Blog_content