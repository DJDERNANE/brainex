import TrustSwiper from "@/app/components/TrustSwiper/TrustSwiper";
export default function Trust_us_Section() {
    return (
        <div className="trust-us-section pt-[50px] py-[200px]   ">
            <p className="text-center text-white py-4 trust-h">They trust us</p>
            <div className="py-[50px]">
                <TrustSwiper />
            </div>
            
        </div>
    )
}