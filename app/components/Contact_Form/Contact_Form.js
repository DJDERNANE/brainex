"use client";
import InputContact from "../Input/Input";
import "./style.css";
import { Switch } from "@/components/ui/switch";
import { ButtonSecondary } from "../Button/Button";
import SelectContact from "../Select/SelectInput";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState } from "react";

export function Contact_Form() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    family_name: "",
    phone: "",
    country: "",
    city: "",
    age_group: "",
    status: "",
    course: "",
    experience_level: "",
    message: "",
    terms: false,
    availability: [],
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAvailabilityChange = (availabilityOption) => {
    setFormData((prevState) => ({
      ...prevState,
      availability: prevState.availability.includes(availabilityOption)
        ? prevState.availability.filter((item) => item !== availabilityOption)
        : [...prevState.availability, availabilityOption],
    }));
  };

  const handleSubmit = async () => {
    
    try {
      const response = await axios.post("http://localhost:8000/api/contacts", formData);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to submit form");
    }
  };

  return (
    <div>
      <div className="contact-container-form grid grid-cols-2 gap-[16px]">
        <InputContact name={"Full Name"} type={"text"} placeholder={"Enter your name"} onChange={(e) => handleChange("full_name", e.target.value)} />
        <InputContact name={"Adress e-mail"} type={"text"} placeholder={"Enter your e-mail address"} onChange={(e) => handleChange("email", e.target.value)} />
        <InputContact name={"Family Name"} type={"text"} placeholder={"Enter your family name"} onChange={(e) => handleChange("family_name", e.target.value)} />
        <InputContact name={"Contact Phone "} type={"text"} placeholder={"+213 000 000 000"} onChange={(e) => handleChange("phone", e.target.value)} />
        <SelectContact onSelectChange={(e) => console.log("country", e.target.value)} name={"Country"} opitions={["Algeria", "France", "Germany", "Italy", "Spain", "other"]} placeholder={"Select your country"} onChange={(e) => handleChange("country", e.target.value)} />
        <InputContact name={"City of Residence"} type={"text"} placeholder={"Enter your city"} onChange={(e) => handleChange("city", e.target.value)} />
        <SelectContact name={"age_group"} opitions={["Under 18", "18-24", "25-34", "35-44", "45+"]} placeholder={"Select your age group"} onChange={(e) => handleChange("age_group", e.target.value)} />
        <SelectContact name={"Status"} opitions={["Student", "Employed", "Unemployed", "self-employed", "Free-lancer", "Other"]} placeholder={"Select your status"} onChange={(e) => handleChange("status", e.target.value)} />
        <SelectContact name={"course"} opitions={["Coding with Python", "AI & DL", "AI & ML", "Web Development", "Graphics Design", "English"]} placeholder={"Select Your Course"} onChange={(e) => handleChange("course", e.target.value)} />
        <SelectContact name={"experience_level"} opitions={["Beginner", "Intermediate", "Advanced", "I don't know"]} placeholder={"Select Your Course"} onChange={(e) => handleChange("experience_level", e.target.value)} />
        <div className="col-span-2 p-2 input-container">
          <label className="py-4">Availability for Live Sessions</label>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox onCheckedChange={() => handleAvailabilityChange("Weekdays (morning)")} />
            <label>Weekdays (morning)</label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" onCheckedChange={() => handleAvailabilityChange("Weekdays (afternoon)")} />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekdays (afternoon)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" onCheckedChange={() => handleAvailabilityChange("Weekends (morning)")}  />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekends (morning)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox id="terms" onCheckedChange={() => handleAvailabilityChange("Weekends (afternoon)")}  />
            <label
              htmlFor="terms"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              style={{ color: "black" }}
            >
              Weekends (afternoon)
            </label>
          </div>
          <div className="flex items-center space-x-2 py-1">
            <Checkbox  
                  id="terms" onCheckedChange={() => handleAvailabilityChange("Online")} />
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
          <Label>Your Message</Label>
          <Textarea placeholder="Type your message here." onChange={(e) => handleChange("message", e.target.value)} />
        </div>
        <div className="input-container col-span-2 py-2">
          <Switch onChange={(e) => handleChange("terms", e.target.checked)} />
          <Label>I agree to the Terms & Conditions</Label>
        </div>
      </div>
      <div className="flex justify-end py-4">
        <ButtonSecondary text={"Register now"} onClick={() => (console.log(formData))} />
      </div>
    </div>
  );
}
