
"use client"
import "./style.css"
import Article from "../../_components/Article/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import { MainApi } from "@/app/utils/MainApi";

export default function Cours_Section() {
    const [courses, setCourses] = useState([])
    const getCourses = () => {
        axios.get(`${MainApi}/cours`)
          .then((response) => {
            console.log(response.data.data); // Log the full response to inspect the structure
            setCourses(response.data.data); // Assuming `data` contains the courses
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      };
      useEffect(() => {
        getCourses()
      }, [])
    return (
        <div className="courses-section container  py-[00px] w-full gap-[50px] py-[150px]">
            <div className=" ">
                <p className="text-center yellow-subtitle flex items-center justify-center">
                    <span className="mr-2">  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clip-path="url(#clip0_10_2560)">
                            <mask id="mask0_10_2560" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="26">
                                <path d="M25.45 0.0898438H0.449951V25.0898H25.45V0.0898438Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_10_2560)">
                                <path d="M12.95 2.43359C10.9413 2.43359 8.97763 3.02924 7.30744 4.14523C5.63726 5.26121 4.33551 6.8474 3.5668 8.70321C2.7981 10.559 2.59697 12.6011 2.98885 14.5712C3.38074 16.5413 4.34802 18.351 5.7684 19.7714C7.18878 21.1917 8.99845 22.159 10.9686 22.5509C12.9387 22.9428 14.9808 22.7417 16.8366 21.973C18.6924 21.2042 20.2786 19.9025 21.3946 18.2323C22.5106 16.5621 23.1063 14.5985 23.1063 12.5898C23.1034 9.89711 22.0325 7.31548 20.1284 5.41143C18.2244 3.50738 15.6427 2.43643 12.95 2.43359ZM18.7264 10.9638L14.2195 12.8945L17.4549 16.7773C17.5875 16.9366 17.6514 17.142 17.6325 17.3484C17.6137 17.5548 17.5136 17.7453 17.3543 17.8779C17.195 18.0105 16.9896 18.0744 16.7832 18.0555C16.5768 18.0367 16.3863 17.9366 16.2537 17.7773L12.95 13.8105L9.64429 17.7773C9.51168 17.9366 9.32123 18.0367 9.11483 18.0555C8.90843 18.0744 8.70299 18.0105 8.5437 17.8779C8.38442 17.7453 8.28434 17.5548 8.26547 17.3484C8.24661 17.142 8.31051 16.9366 8.44312 16.7773L11.6805 12.8945L7.17359 10.9638C7.07635 10.9255 6.98779 10.868 6.91316 10.7948C6.83854 10.7217 6.77935 10.6342 6.73911 10.5378C6.69888 10.4413 6.6784 10.3378 6.67891 10.2332C6.67942 10.1287 6.7009 10.0254 6.74207 9.92932C6.78325 9.83325 6.84328 9.74641 6.91862 9.67396C6.99395 9.60151 7.08306 9.54491 7.18067 9.50752C7.27828 9.47013 7.38239 9.4527 7.48685 9.45628C7.59132 9.45985 7.694 9.48434 7.78882 9.52832L12.1688 11.4052V6.92578C12.1688 6.71858 12.2511 6.51986 12.3976 6.37335C12.5441 6.22684 12.7428 6.14453 12.95 6.14453C13.1572 6.14453 13.3559 6.22684 13.5024 6.37335C13.6489 6.51986 13.7313 6.71858 13.7313 6.92578V11.4052L18.1111 9.52832C18.206 9.48434 18.3086 9.45985 18.4131 9.45628C18.5176 9.4527 18.6217 9.47013 18.7193 9.50752C18.8169 9.54491 18.906 9.60151 18.9813 9.67396C19.0567 9.74641 19.1167 9.83325 19.1579 9.92932C19.1991 10.0254 19.2205 10.1287 19.221 10.2332C19.2216 10.3378 19.2011 10.4413 19.1608 10.5378C19.1206 10.6342 19.0614 10.7217 18.9868 10.7948C18.9122 10.868 18.8236 10.9255 18.7264 10.9638Z" fill="#E2FF02" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_10_2560">
                                <rect width="25" height="25" fill="white" transform="translate(0.449951 0.0898438)" />
                            </clipPath>
                        </defs>
                    </svg></span>
                    Our program</p>
                <h1 className="text-center training-h1 w-[60%] mx-auto">Hands-On Learning for Work and Entrepreneurship Integration</h1>
            </div>
            <div className="">
                <div className="grid grid-cols-3 grid-rows-2 gap-8 py-[80px]">
                    {courses.map((item, index) => (
                        <a href={`/cours/${item.id}`}>
                            <Article
                                key={index}  // Ensure key is passed here
                                title={item.title}
                                subtitle={item.description}
                                img={item.icon}
                                contain_img={true}
                            />
                        </a>

                    ))}
                </div>
            </div>
        </div>
    );
}