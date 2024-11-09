"use client"
import InputContact from "../Input/Input";
import "./style.css"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ButtonSecondary } from "../Button/Button";
export function Contact_Form() {

  return (
    <div>
      <div className="contact-container-form grid grid-cols-2 gap-[16px]">
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <InputContact name={"Name"} type={"text"} />
        <div className="input-container col-span-2 py-2">
          <label className="py-4" >status</label>
          <div className="flex items-center space-x-2">
            <Switch id="condition" />
            <Label htmlFor="condition">"I accept the general terms and conditions as well as the privacy policy of the site. I agree that my personal data will be collected and processed in accordance with this policy."</Label>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-4">
        <ButtonSecondary text={"Register now"}/>
      </div>
      
    </div>

  );
}
