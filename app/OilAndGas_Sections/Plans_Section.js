import "./style.css";
import PlanCard from "../components/Plan_Card/PlanCard";

export default function Plans_Section() {
    return (
        <div className=" pb-[100px] mx-auto container">
          <div className="grid grid-cols-2 text-white py-[70px] items-center">
            <p className="get-in-touch">
                Get in touch with us 
            </p>
            <p>
                We are a team of AI specialists with extensive expertise in Machine
                Learning and Deep Learning, backed by:
            </p>
          </div>

            <div className=" p-[200px] flex justify-start gap-6 plans">
                <div className="card-cours-price oil">
                    <p className="card-cours-price-subtitle oil">
                        Stay Ahead with Research and Innovation
                    </p>
                    <input type="text" placeholder="Enter your email" className="email"/>
                    <button className="btn btn-primary">
                        <span>Subscribe </span>
                    </button>

                    <p className="note">
                    Get updates, insights, and reports on
                    the latest industry Technologies.
                    </p>

                </div>
            </div>
        </div>
    )
}