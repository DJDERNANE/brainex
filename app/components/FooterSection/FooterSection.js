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
                            Storm, your all-in-one solution for SAAS
                            and startup project websites. Packed with
                            a wide range of pre-built components, it
                            equips you with everything you need to
                            bring your ideas to life seamlessly.
                        </p>
                    </div>
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
                            </ul>
                        ))
                    }
            </div>
            <div className="mt-8 py-6 border-t items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0 text-center text-white">
                    ©2023 Storm Framer Template. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
