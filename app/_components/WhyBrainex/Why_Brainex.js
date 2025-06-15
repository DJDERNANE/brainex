
import Article from "../../_components/Article/Article";
export default function Why_Brainex() {
    const posts =[
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 28C7 18.335 14.835 10.5 24.5 10.5H59.5C69.165 10.5 77 18.335 77 28V59.5C77 69.165 69.165 77 59.5 77H24.5C14.835 77 7 69.165 7 59.5V28ZM24.5 17.5C18.701 17.5 14 22.201 14 28V59.5C14 65.299 18.701 70 24.5 70H59.5C65.299 70 70 65.299 70 59.5V28C70 22.201 65.299 17.5 59.5 17.5H24.5Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28 7C29.933 7 31.5 8.567 31.5 10.5V21C31.5 22.933 29.933 24.5 28 24.5C26.067 24.5 24.5 22.933 24.5 21V10.5C24.5 8.567 26.067 7 28 7Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 35C21 33.067 22.567 31.5 24.5 31.5H59.5C61.433 31.5 63 33.067 63 35C63 36.933 61.433 38.5 59.5 38.5H24.5C22.567 38.5 21 36.933 21 35Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5 59.5C52.5 57.567 54.067 56 56 56L59.5 56C61.433 56 63 57.567 63 59.5C63 61.433 61.433 63 59.5 63H56C54.067 63 52.5 61.433 52.5 59.5Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56 7C57.933 7 59.5 8.567 59.5 10.5V21C59.5 22.933 57.933 24.5 56 24.5C54.067 24.5 52.5 22.933 52.5 21V10.5C52.5 8.567 54.067 7 56 7Z" fill="white"/>
          </svg>,
            title: "Weekdays",
            desc: "Learn on weekdays with structured, flexible courses that fit your schedule.",

        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6665 26.6667C6.6665 17.4619 14.1284 10 23.3332 10H56.6665C65.8712 10 73.3332 17.4619 73.3332 26.6667V56.6667C73.3332 65.8714 65.8712 73.3333 56.6665 73.3333H23.3332C14.1284 73.3333 6.6665 65.8714 6.6665 56.6667V26.6667ZM23.3332 16.6667C17.8103 16.6667 13.3332 21.1438 13.3332 26.6667V56.6667C13.3332 62.1895 17.8103 66.6667 23.3332 66.6667H56.6665C62.1893 66.6667 66.6665 62.1895 66.6665 56.6667V26.6667C66.6665 21.1438 62.1893 16.6667 56.6665 16.6667H23.3332Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6668 6.66663C28.5078 6.66663 30.0002 8.15901 30.0002 9.99996V20C30.0002 21.8409 28.5078 23.3333 26.6668 23.3333C24.8259 23.3333 23.3335 21.8409 23.3335 20V9.99996C23.3335 8.15901 24.8259 6.66663 26.6668 6.66663Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3333 6.66663C55.1743 6.66663 56.6667 8.15901 56.6667 9.99996V20C56.6667 21.8409 55.1743 23.3333 53.3333 23.3333C51.4924 23.3333 50 21.8409 50 20V9.99996C50 8.15901 51.4924 6.66663 53.3333 6.66663Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9998 30C41.8408 30 43.3332 31.4924 43.3332 33.3333V40H49.9998C51.8408 40 53.3332 41.4924 53.3332 43.3333C53.3332 45.1743 51.8408 46.6667 49.9998 46.6667H43.3332V53.3333C43.3332 55.1743 41.8408 56.6667 39.9998 56.6667C38.1589 56.6667 36.6665 55.1743 36.6665 53.3333L36.6665 46.6667H29.9998C28.1589 46.6667 26.6665 45.1743 26.6665 43.3333C26.6665 41.4924 28.1589 40 29.9998 40H36.6665V33.3333C36.6665 31.4924 38.1589 30 39.9998 30Z" fill="white"/>
          </svg>
            ,
            title: "Weekends",
            desc: "Weekend courses designed for focused learning at your convenience.",

        },
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16675 28.6667C7.16675 20.7506 13.584 14.3334 21.5001 14.3334H46.5834C54.4995 14.3334 60.9167 20.7506 60.9167 28.6667V57.3334C60.9167 65.2495 54.4995 71.6667 46.5834 71.6667H21.5001C13.584 71.6667 7.16675 65.2495 7.16675 57.3334V28.6667ZM21.5001 21.5C17.542 21.5 14.3334 24.7087 14.3334 28.6667V57.3334C14.3334 61.2914 17.542 64.5 21.5001 64.5H46.5834C50.5415 64.5 53.7501 61.2914 53.7501 57.3334V28.6667C53.7501 24.7087 50.5415 21.5 46.5834 21.5H21.5001Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.8724 24.2189C71.4843 20.0682 78.8333 23.3411 78.8333 29.5458V56.4541C78.8333 62.6588 71.4843 65.9317 66.8724 61.781L56.1224 52.106C54.6123 50.7469 53.75 48.8107 53.75 46.7791V39.2208C53.75 37.1892 54.6123 35.253 56.1224 33.8939L66.8724 24.2189ZM71.6667 29.5458L60.9167 39.2208L60.9167 46.7791L71.6667 56.4541L71.6667 29.5458Z" fill="white"/>
          </svg>,
           title: "Online",
           desc: "Study online anytime, anywhere with expert-led sessions.",
        },
    ]
    return (
        <div className=" py-[100px] mx-auto container" id="workshops">
            <p className="text-white text-center subtitle yellow-subtitle">Why Cambridge BraineX?</p>
            <h1 className="text-center training-h1">Study according to the schedule 
            that suits you .</h1>
            <div className="pt-[150px] pb-[200px] flex justify-between">
                {posts.map((item, index) => (
                    <Article
                        key={index}  // Ensure key is passed here
                        title={item.title}
                        subtitle={item.desc}
                        icon={item.icon}
                        contain_img={false}
                    />
                ))}
            </div>
        </div>
    );
}