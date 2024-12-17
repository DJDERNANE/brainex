import "./style.css";
import PlanCard from "../../_components/Plan_Card/PlanCard";

export default function Plans_Section() {
    return (
        <div className=" py-[100px] mx-auto container">
            <h1 className="text-center training-h1">Choose Your Plan</h1>
            <p className="text-white text-center subtitle">Simple pricing. No hidden fees. Advanced features for you education.</p>

            <div className="pt-[150px] pb-[200px] flex justify-start gap-6 plans mt-[200px]">
                <div className="card-cours-price">
                    <p className="card-cours-price-title my-4">AI & Deep Learning </p>
                    <p className="card-cours-price-subtitle">
                        An advanced course to explore deep learning concepts and techniques, enabling you to create AI systems for applications like image recognition and natural language processing.
                    </p>
                    <p className="card-cours-price my-4">33,000 DA</p>
                    <ul className="flex flex-col items-start">
                        <li className="my-2">
                            <svg className="pr-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12.8C2 9.02881 2 7.14319 3.17157 5.97162C4.34315 4.80005 6.22876 4.80005 10 4.80005H14C17.7712 4.80005 19.6569 4.80005 20.8284 5.97162C22 7.14319 22 9.02881 22 12.8V14.8C22 18.5713 22 20.4569 20.8284 21.6285C19.6569 22.8 17.7712 22.8 14 22.8H10C6.22876 22.8 4.34315 22.8 3.17157 21.6285C2 20.4569 2 18.5713 2 14.8V12.8Z" stroke="#1C274C" stroke-width="1.5" />
                                <path d="M7 4.80005V3.30005" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M17 4.80005V3.30005" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9 15.3L10.5 13.8V17.8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13 16.8V14.8C13 14.2478 13.4477 13.8 14 13.8C14.5523 13.8 15 14.2478 15 14.8V16.8C15 17.3523 14.5523 17.8 14 17.8C13.4477 17.8 13 17.3523 13 16.8Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2.5 9.80005H21.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <span>90 days</span>
                        </li>
                        <li className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M23.0256 12.4C23.0256 6.31106 18.0895 1.375 12.0006 1.375C5.91165 1.375 0.975586 6.31106 0.975586 12.4C0.975586 18.4889 5.91165 23.425 12.0006 23.425C18.0895 23.425 23.0256 18.4889 23.0256 12.4Z" stroke="#52536D" stroke-width="1.5" stroke-miterlimit="10" />
                                <path d="M11.2031 6.03394V13.8549L16.4993 16.8999" stroke="#52536D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>4 hours per week</span>
                        </li>
                        <li className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.9301 6.76001L18.5601 20.29C18.3201 21.3 17.4201 22 16.3801 22H3.24013C1.73013 22 0.650145 20.5199 1.10015 19.0699L5.31014 5.55005C5.60014 4.61005 6.47015 3.95996 7.45015 3.95996H19.7501C20.7001 3.95996 21.4901 4.53997 21.8201 5.33997C22.0101 5.76997 22.0501 6.26001 21.9301 6.76001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />
                                <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.67969 6.38L10.7197 2.06006" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.3799 6.39001L17.3199 2.05005" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.7002 12H15.7002" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.7002 16H14.7002" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Flexible hours</span>
                        </li>
                        <li className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M9 22.6001H15C20 22.6001 22 20.6001 22 15.6001V9.6001C22 4.6001 20 2.6001 15 2.6001H9C4 2.6001 2 4.6001 2 9.6001V15.6001C2 20.6001 4 22.6001 9 22.6001Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3801 15.8701V8.18009C18.3801 7.41009 17.7601 6.8501 17.0001 6.9101H16.9601C15.6201 7.0201 13.5901 7.71011 12.4501 8.42011L12.3401 8.49011C12.1601 8.60011 11.8501 8.60011 11.6601 8.49011L11.5001 8.39011C10.3701 7.68011 8.34012 7.01009 7.00012 6.90009C6.24012 6.84009 5.62012 7.41011 5.62012 8.17011V15.8701C5.62012 16.4801 6.1201 17.0601 6.7301 17.1301L6.9101 17.1601C8.2901 17.3401 10.4301 18.0501 11.6501 18.7201L11.6801 18.7301C11.8501 18.8301 12.1301 18.8301 12.2901 18.7301C13.5101 18.0501 15.6601 17.3501 17.0501 17.1601L17.2601 17.1301C17.8801 17.0601 18.3801 16.4901 18.3801 15.8701Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8.70007V18.2601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Online or in-person</span>
                        </li>

                        <li className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 15.2001C13.6569 15.2001 15 13.8569 15 12.2001C15 10.5432 13.6569 9.20007 12 9.20007C10.3431 9.20007 9 10.5432 9 12.2001C9 13.8569 10.3431 15.2001 12 15.2001Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 13.0801V11.3201C2 10.2801 2.85 9.42013 3.9 9.42013C5.71 9.42013 6.45 8.14013 5.54 6.57013C5.02 5.67013 5.33 4.50013 6.24 3.98013L7.97 2.99013C8.76 2.52013 9.78 2.80013 10.25 3.59013L10.36 3.78013C11.26 5.35013 12.74 5.35013 13.65 3.78013L13.76 3.59013C14.23 2.80013 15.25 2.52013 16.04 2.99013L17.77 3.98013C18.68 4.50013 18.99 5.67013 18.47 6.57013C17.56 8.14013 18.3 9.42013 20.11 9.42013C21.15 9.42013 22.01 10.2701 22.01 11.3201V13.0801C22.01 14.1201 21.16 14.9801 20.11 14.9801C18.3 14.9801 17.56 16.2601 18.47 17.8301C18.99 18.7401 18.68 19.9001 17.77 20.4201L16.04 21.4101C15.25 21.8801 14.23 21.6001 13.76 20.8101L13.65 20.6201C12.75 19.0501 11.27 19.0501 10.36 20.6201L10.25 20.8101C9.78 21.6001 8.76 21.8801 7.97 21.4101L6.24 20.4201C5.33 19.9001 5.02 18.7301 5.54 17.8301C6.45 16.2601 5.71 14.9801 3.9 14.9801C2.85 14.9801 2 14.1201 2 13.0801Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Professional support</span>
                        </li>


                    </ul>
                    <button className="btn btn-primary">
                        <span>Subscribe </span>
                    </button>

                </div>
            </div>
        </div>
    )
}