"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';
import "./style.css";
import SubMenuItem from '../SubMenuItem/SubMenuItem';
import { MainApi } from '../../utils/MainApi';

import { Subtitles } from 'lucide-react';
import MobileNavbar from './MobileNavbar';
export default function Navbar() {

    const [state, setState] = useState(false)
    const [submenuData, setSubmenuData] = useState([])
    const [loading, setLoading] = useState(true)
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)

    // Fetch submenu data
    useEffect(() => {
        const fetchSubmenuData = async () => {
            try {
                const response = await fetch(`${MainApi}/submenu-items`);
                const result = await response.json();
                console.log(result)
                if (result.success) {
                    setSubmenuData(result.data);
                }
            } catch (error) {
                console.error('Error fetching submenu data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmenuData();
    }, []);



    const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.9704 14.44C18.3404 14.67 19.8504 14.43 20.9104 13.72C22.3204 12.78 22.3204 11.24 20.9104 10.3C19.8404 9.59001 18.3104 9.35 16.9404 9.59" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.00043 14.44C5.63043 14.67 4.12043 14.43 3.06043 13.72C1.65043 12.78 1.65043 11.24 3.06043 10.3C4.13043 9.59001 5.66043 9.35 7.03043 9.59" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.47 11.9101 9.47C13.3401 9.47 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.08973 17.78C7.67973 18.72 7.67973 20.26 9.08973 21.2C10.6897 22.27 13.3097 22.27 14.9097 21.2C16.3197 20.26 16.3197 18.72 14.9097 17.78C13.3197 16.72 10.6897 16.72 9.08973 17.78Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>

    // Helper function to get submenu items by parent
    const getSubmenuByParent = (parent) => {
        return submenuData
            .filter(item => item.parent === parent)
            .map(item => ({
                id: item.id,
                title: item.title,
                subtitle: item.description,
                icon: item.icon,
                link: item.link || '#',
                picture: item.picture
            }));
    };

    const imgs = [
        "ai_experts.png", "service_brainex.png", "electronics_specialists.png", "agr.png", "new.png", "medical.png"
    ]
    // Fixed navigation menu items
    const navigation = [
        {
            title: "Home",
            path: "/Home",
        },
        {
            title: "Solutions",
            path: "javascript:void(0)",
            icon: <span className='nav-icon pl-2'> <svg width="12" height="8" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.08337 0.541504L4.00004 3.45817L6.91671 0.541504" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg></span>,
            submenu: getSubmenuByParent('solutions')
        },
        {
            title: "Training",
            path: "/Training",
        },
        {
            title: "News", 
            icon: <span className='pl-2'><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.5" cy="6.43994" r="6" fill="#00C881" fillOpacity="0.45" />
                <circle cx="2.5" cy="2.5" r="2.5" transform="matrix(1 0 0 -1 3.75 8.90967)" fill="#00C881" />
            </svg></span>,
            path: "#"
        },
        { 
            title: "Blogs", 
            path: "#" 
        }
    ]

    return (

        <nav className="border-b w-full fixed top-0 left-0 right-0 md:text-sm md:border-none h-[85px] z-[9999]">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 flex justify-between items-center">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <Image
                            src="/logo.svg" // Use the path directly from the public folder
                            width={120}
                            height={50}
                            alt="Brainex"
                            className="md:w-[168px] w-[140px]"
                        />
                    </a>
                </div>
                {/* Mobile Navbar (md:hidden) */}
                <div className="md:hidden">
                    <MobileNavbar navigation={navigation} submenuData={submenuData} />
                </div>
                {/* Desktop Navbar (md:block) */}
                <div className="hidden md:block flex-1 pb-3 mt-0 md:pb-0 md:mt-0">
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className={`text-white  menu ${item.submenu ? 'submenu-exist' : ''} group`}>
                                {item.submenu ? (
                                    <>
                                        <a href={item.path} className="flex items-center">
                                            {item.title} {item.icon}
                                        </a>
                                        <div className="z-10 blur-bg md:absolute md:left-0 md:top-full md:w-auto w-full">
                                            <div className='submenu-navbar'>
                                                <SubMenuItem subitems={item.submenu} imgs={item.submenu.map(subItem => subItem.picture)} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a href={item.path} className="flex items-center">
                                        {item.title} {item.icon}
                                    </a>
                                )}
                            </li>
                        ))}
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="#get_in_touch" className="btn-navbar">
                                    Sign Up
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>




    )
}