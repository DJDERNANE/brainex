
import "./style.css"
import { ButtonSecondary } from "../components/Button/Button";
import { Button } from "@/components/ui/button"
export default function AiSection() {
    return (
        <div className=" container ai p-[0px] relative">
            <div className="grid md:grid-cols-2 gap-[20px]  md:gap-[40px] absolute left-0 bottom-0 z-10  overflow-hidden md:p-[40px]">
                <div className="bg-white p-8 item-ai rounded-[8px]">
                    <div className="flex items-center justify-between">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVG">
                                <path id="Vector" d="M22 6H15.6C12.2397 6 10.5595 6 9.27606 6.65396C8.14708 7.2292 7.2292 8.14708 6.65396 9.27606C6 10.5595 6 12.2397 6 15.6V32.4C6 35.7604 6 37.4404 6.65396 38.724C7.2292 39.853 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42H32.4C35.7604 42 37.4404 42 38.724 41.346C39.853 40.7708 40.7708 39.853 41.346 38.724C42 37.4404 42 35.7604 42 32.4V26M24 16H32V24M31 7V4M38.8786 9.12132L41 7M41.0206 17H44.0206M6 26.6942C7.30388 26.8956 8.63974 27 10 27C18.7727 27 26.5306 22.6552 31.2394 16" stroke="#756859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        
                        <Button className={`text-white btn-ai `}> <span className="arrow-right"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00066 8.99934H16.0267M16.0267 8.99934L8.51367 16.5123M16.0267 8.99934L8.51367 1.48633" stroke="white" strokeWidth="1.59375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span>
                        </Button>

                    </div>
                    <div>
                        <p className="ai-gaz-title">
                            AI in Healthcare: "Smart Healthcare Revolution"
                        </p>
                        <p>
                            Revolutionizing patient care with AI-driven diagnostics, personalized treatments, and advanced health data analytics for better outcomes.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 item-ai rounded-[8px]">
                    <div className="flex items-center justify-between">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVG">
                                <path id="Vector" d="M22 6H15.6C12.2397 6 10.5595 6 9.27606 6.65396C8.14708 7.2292 7.2292 8.14708 6.65396 9.27606C6 10.5595 6 12.2397 6 15.6V32.4C6 35.7604 6 37.4404 6.65396 38.724C7.2292 39.853 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42H32.4C35.7604 42 37.4404 42 38.724 41.346C39.853 40.7708 40.7708 39.853 41.346 38.724C42 37.4404 42 35.7604 42 32.4V26M24 16H32V24M31 7V4M38.8786 9.12132L41 7M41.0206 17H44.0206M6 26.6942C7.30388 26.8956 8.63974 27 10 27C18.7727 27 26.5306 22.6552 31.2394 16" stroke="#756859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <Button className={`text-white  btn-ai`}> <span className="arrow-right"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00066 8.99934H16.0267M16.0267 8.99934L8.51367 16.5123M16.0267 8.99934L8.51367 1.48633" stroke="white" strokeWidth="1.59375" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span>
                        </Button>

                    </div>
                    <div>
                        <p className="ai-gaz-title">
                            AI in Healthcare: "Smart Healthcare Revolution"
                        </p>
                        <p>
                            Revolutionizing patient care with AI-driven diagnostics, personalized treatments, and advanced health data analytics for better outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}