
import "./style.css"

export default function Promise() {
    return (
        <div className=" promise-section md:my-[200px] relative overflow-visible">
            <div className=" absolute right-0 top-[0px] z-10 md:flex hidden">
                <img src="/right.png" alt="promise" className="mx-auto" />
            </div>
            <div className="absolute top-0 left-0 z-10 md:flex hidden">
                <img src="/left.png" alt="promise" className="mx-auto " />
            </div>
            
            <p className="ourPromise pt-[50px]">Our Promise</p>
            <p className="text-center text-white promise-dec py-[50px]">
                “Seamless delivery, measurable outcomes, and helping you lead in an increasingly competitive global energy market.”
            </p>
        </div>
    );
}