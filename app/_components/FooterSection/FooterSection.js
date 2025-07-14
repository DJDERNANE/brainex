"use client "
import Image from 'next/image';
import "./style.css";
export default function FooterSection() {

    const footerNavs = [
        {
            label: "Product",
            items: [
                {

                    name: 'Features'
                },
                {

                    name: 'Pricing'
                },
            ],
        },
        {
            label: "Company",
            items: [
                {

                    name: 'Contact'
                },
                {

                    name: 'Blog'
                },

            ],
        },
        {
            label: "Pages",
            items: [
                {

                    name: 'Terms & Conditions'
                },
                {

                    name: 'License'
                },

            ]
        }
    ]

    return (
        <footer className="footer-section bg-[#101010] px-4 py-5 max-w-screen-xl mx-auto md:px-8 ">
            <div className="gap-6 justify-between md:flex  py-[90px]">
                <div className="max-w-xs">
                    <Image
                        src="/logo.svg" // Use the path directly from the public folder
                        width={180} // Adjust the width as needed
                        height={50} // Adjust the height as needed
                        alt="logo"
                    />
                    <p className="leading-relaxed">
                    Welcome to Cambridge BraineX — where AI, robotics, and smart technologies converge to create real-world solutions. Our team of experts transforms innovation into impact, driving progress and delivering intelligent systems that reshape industries.
                    </p>
                </div>
                <div className='footer-links'>
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                key={idx}
                            >
                                <h4 className="">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx} className='p-0 justify-start'>
                                            <a
                                                href={"#"}
                                                className=""

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                                {

                                    item.label == "Pages" && (
                                        <>
                                            <p className='text-white'> Follow us</p>
                                            <div className='flex my-2'>
                                                <a  href="https://www.facebook.com/cambridgebrainex" target="_blank" rel="noopener noreferrer">
                                                    <svg className='bg-[#fff] mr-2 p-1 rounded' width="35" height="35" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="cib:facebook-f" clip-path="url(#clip0_291_1882)" filter="url(#filter0_i_291_1882)">
                                                            <path id="Vector" d="M16.8516 12.9375L17.4906 8.77523H13.4965V6.07417C13.4965 4.93567 14.0542 3.8252 15.8432 3.8252H17.6588V0.281764C17.6588 0.281764 16.0114 0.000732422 14.4359 0.000732422C11.1469 0.000732422 8.9971 1.99454 8.9971 5.60339V8.77595H5.34082V12.9382H8.9971V23.0007H13.4965V12.9382L16.8516 12.9375Z" fill="#00C881" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_i_291_1882" x="0" y="0" width="23" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feOffset dy="4" />
                                                                <feGaussianBlur stdDeviation="7.5" />
                                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_291_1882" />
                                                            </filter>
                                                            <clipPath id="clip0_291_1882">
                                                                <rect width="23" height="23" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="https://www.facebook.com/cambridgebrainex" target="_blank" rel="noopener noreferrer">
                                                    <svg className='bg-white mr-2 p-1 rounded' width="35" height="35" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="akar-icons:linkedin-fill" clip-path="url(#clip0_291_1886)" filter="url(#filter0_i_291_1886)">
                                                            <g id="Group">
                                                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.958496 2.71979C0.958496 2.25264 1.14407 1.80461 1.4744 1.47428C1.80473 1.14395 2.25276 0.958376 2.71991 0.958376H20.2785C20.51 0.957998 20.7393 1.00329 20.9533 1.09165C21.1673 1.18001 21.3617 1.30971 21.5255 1.47332C21.6893 1.63694 21.8192 1.83125 21.9078 2.04514C21.9964 2.25902 22.042 2.48828 22.0418 2.71979V20.2784C22.0421 20.5099 21.9967 20.7393 21.9082 20.9533C21.8197 21.1672 21.69 21.3617 21.5263 21.5255C21.3626 21.6892 21.1682 21.8191 20.9543 21.9077C20.7403 21.9963 20.511 22.0418 20.2795 22.0417H2.71991C2.48852 22.0417 2.25939 21.9961 2.04563 21.9075C1.83186 21.819 1.63764 21.6891 1.47406 21.5255C1.31049 21.3618 1.18076 21.1675 1.0923 20.9537C1.00384 20.7399 0.95837 20.5107 0.958496 20.2793V2.71979ZM9.30366 8.99688H12.1585V10.4305C12.5706 9.60638 13.6248 8.86463 15.2089 8.86463C18.2459 8.86463 18.9656 10.5063 18.9656 13.5183V19.0977H15.8922V14.2045C15.8922 12.489 15.4801 11.5211 14.4336 11.5211C12.9817 11.5211 12.378 12.5648 12.378 14.2045V19.0977H9.30366V8.99688ZM4.03283 18.9664H7.10716V8.86463H4.03283V18.9655V18.9664ZM7.54704 5.56988C7.55284 5.8331 7.506 6.09484 7.40927 6.33972C7.31254 6.5846 7.16788 6.80769 6.98376 6.99591C6.79965 7.18412 6.57979 7.33366 6.3371 7.43576C6.09441 7.53785 5.83377 7.59044 5.57048 7.59044C5.30718 7.59044 5.04654 7.53785 4.80385 7.43576C4.56116 7.33366 4.34131 7.18412 4.15719 6.99591C3.97308 6.80769 3.82841 6.5846 3.73168 6.33972C3.63496 6.09484 3.58812 5.8331 3.59391 5.56988C3.60529 5.0532 3.81853 4.56151 4.18797 4.20012C4.55741 3.83873 5.05367 3.63636 5.57048 3.63636C6.08728 3.63636 6.58354 3.83873 6.95298 4.20012C7.32242 4.56151 7.53566 5.0532 7.54704 5.56988Z" fill="#00C881" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_i_291_1886" x="0" y="0" width="23" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feOffset dy="4" />
                                                                <feGaussianBlur stdDeviation="7.5" />
                                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_291_1886" />
                                                            </filter>
                                                            <clipPath id="clip0_291_1886">
                                                                <rect width="23" height="23" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="https://www.facebook.com/cambridgebrainex" target="_blank" rel="noopener noreferrer">
                                                    <svg className='bg-white mr-2 p-1 rounded' width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="instagram-1.svg">
                                                            <path id="Vector" d="M12.9355 7.05273C15.6426 7.05273 17.877 9.28711 17.877 11.9941C17.877 14.7441 15.6426 16.9355 12.9355 16.9355C10.1855 16.9355 7.99414 14.7441 7.99414 11.9941C7.99414 9.28711 10.1855 7.05273 12.9355 7.05273ZM12.9355 15.2168C14.6973 15.2168 16.1152 13.7988 16.1152 11.9941C16.1152 10.2324 14.6973 8.81445 12.9355 8.81445C11.1309 8.81445 9.71289 10.2324 9.71289 11.9941C9.71289 13.7988 11.1738 15.2168 12.9355 15.2168ZM19.209 6.88086C19.209 6.23633 18.6934 5.7207 18.0488 5.7207C17.4043 5.7207 16.8887 6.23633 16.8887 6.88086C16.8887 7.52539 17.4043 8.04102 18.0488 8.04102C18.6934 8.04102 19.209 7.52539 19.209 6.88086ZM22.4746 8.04102C22.5605 9.63086 22.5605 14.4004 22.4746 15.9902C22.3887 17.5371 22.0449 18.8691 20.9277 20.0293C19.8105 21.1465 18.4355 21.4902 16.8887 21.5762C15.2988 21.6621 10.5293 21.6621 8.93945 21.5762C7.39258 21.4902 6.06055 21.1465 4.90039 20.0293C3.7832 18.8691 3.43945 17.5371 3.35352 15.9902C3.26758 14.4004 3.26758 9.63086 3.35352 8.04102C3.43945 6.49414 3.7832 5.11914 4.90039 4.00195C6.06055 2.88477 7.39258 2.54102 8.93945 2.45508C10.5293 2.36914 15.2988 2.36914 16.8887 2.45508C18.4355 2.54102 19.8105 2.88477 20.9277 4.00195C22.0449 5.11914 22.3887 6.49414 22.4746 8.04102ZM20.4121 17.666C20.9277 16.4199 20.7988 13.4121 20.7988 11.9941C20.7988 10.6191 20.9277 7.61133 20.4121 6.32227C20.0684 5.50586 19.4238 4.81836 18.6074 4.51758C17.3184 4.00195 14.3105 4.13086 12.9355 4.13086C11.5176 4.13086 8.50977 4.00195 7.26367 4.51758C6.4043 4.86133 5.75977 5.50586 5.41602 6.32227C4.90039 7.61133 5.0293 10.6191 5.0293 11.9941C5.0293 13.4121 4.90039 16.4199 5.41602 17.666C5.75977 18.5254 6.4043 19.1699 7.26367 19.5137C8.50977 20.0293 11.5176 19.9004 12.9355 19.9004C14.3105 19.9004 17.3184 20.0293 18.6074 19.5137C19.4238 19.1699 20.1113 18.5254 20.4121 17.666Z" fill="#00C881" />
                                                        </g>
                                                    </svg>

                                                </a>
                                            </div>
                                        </>
                                    )
                                }
                            </ul>
                        ))
                    }
                </div>

            </div>

            <div className="mt-8 py-6 border-t items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0 text-center text-white">
                    © 2025 Cambridge Brainex (United Kingdom) Ltd. |  All rights reserved
                </div>
            </div>
        </footer>
    )
}
