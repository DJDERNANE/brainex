import "./style.css";
import PlanCard from "../../_components/Plan_Card/PlanCard";

export default function Plans_Section() {
    return (
        <div className=" py-[100px] mx-auto container">
             <h1 className="text-center training-h1">Choose Your Plan</h1>
            <p className="text-white text-center subtitle">Simple pricing. No hidden fees. Advanced features for you education.</p>
           
            <div className="pt-[150px] pb-[200px] flex justify-between gap-6">
                <PlanCard name="Beginner" time="1 Month" offers="Component properties" />
                <PlanCard name="Beginner" time="1 Month" offers="Component properties" light={true} />
                <PlanCard name="Beginner" time="1 Month" offers="Component properties" />
            </div>
        </div>
    )
}