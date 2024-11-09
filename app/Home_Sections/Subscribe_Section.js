export default function Subscribe_Section() {
    return (
        <div className="subscribe-section py-4  container flex justify-between items-center ">
            <div>
                <p className="text-start text-white py-4 subscribe-h1">Subscribe Now To <br />
                    Get Our latest updates!</p>
                <p className="subscribe-h5">Let's subscribe with us and find the fun.</p>
            </div>
            <div>
                <button className="subscribe-btn flex items-center justify-center p-4 relative">
                    <span className="text-white">Contact us</span>
                    <svg className="absolute right-5" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66748 18.0625L18.2925 7.4375M18.2925 7.4375V18.0625M18.2925 7.4375H7.66748" stroke="white" strokeWidth="1.59375" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>

            </div>
        </div>
    )
}