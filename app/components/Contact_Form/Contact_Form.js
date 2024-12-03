"use client"
import InputContact from "../Input/Input";
import "./style.css"
import { Switch } from "@/components/ui/switch"
import { ButtonSecondary } from "../Button/Button";
import SelectContact from "../Select/SelectInput";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
export function Contact_Form() {

  return (
    <div>
      <div className="contact-container-form grid grid-cols-2 gap-[16px]">
        <InputContact name={"Full Name"} type={"text"} placeholder={"Enter your name"} />
        <InputContact name={"Adress e-mail"} type={"text"} placeholder={"Enter your e-mail address"} />
        <InputContact name={"Family Name"} type={"text"} placeholder={"Enter your family name"} />
        <InputContact name={"Contact Phone "} type={"text"} placeholder={"+213 000 000 000"} />
        <SelectContact name={"Country"} opitions={["France", "Germany", "Italy", "Spain"]} placeholder={"Select your country"} />
        <InputContact name={"City of Residence"} type={"text"} placeholder={"Enter your city"} />
        <SelectContact name={"Age Group"} opitions={["Under 18", "18-24", "25-34", "35-44", "45+"]} placeholder={"Select your age group"} />
        <SelectContact name={"Status"} opitions={["Student", "Employed", "Unemployed", "self-employed", "Free-lancer", "Other"]} placeholder={"Select your status"} />
        <SelectContact name={"Select Your Course"} opitions={["Coding with Python", "AI & DL", "AI & ML", "Web Development", "Graphics Design", "English"]} placeholder={"Select Your Course"} />
        <SelectContact name={"Current Level of Experience"} opitions={["Beginner", "Intermediate", "Advanced", "I don't know"]} placeholder={"Select Your Course"} />
        <div className="col-span-2 p-2 input-container">
          <label className="py-4" >Availability for Live Sessions</label>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekdays (morning)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekdays (afternoon)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekends (morning)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekends (afternoon)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Online
            </label>
          </div>
        </div>
        
        <div className="col-span-2 p-2 input-container">
          <Label htmlFor="message-2 py-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
        </div>
        <div className="input-container col-span-2 py-2">
          <label className="py-4" >status</label>
          <div className="flex items-center space-x-2 py-1">
            <Switch id="condition" />
            <Label htmlFor="condition">"I agree to the Terms & Conditions"</Label>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-4">
        <ButtonSecondary text={"Register now"} />
      </div>

    </div>

  );
}
