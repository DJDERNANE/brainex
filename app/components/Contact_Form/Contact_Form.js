"use client";
import InputContact from "../Input/Input";
import "./style.css";
import { Switch } from "@/components/ui/switch";
import { ButtonSecondary } from "../Button/Button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState } from "react";
import { MainApi } from "../../utils/MainApi";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function Contact_Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    family_name: "",
    phone: "",
    contry: "",
    city: "",
    age_group: "",
    status: "",
    // course: "",
    level: "",
    message: "",
    // terms: false,
    availability: [],

  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };


  const onValueChange = (value) => {
    console.log(value);
  }
  console.log(formData);

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
      const payload = {
        ...formData,
        availability: JSON.stringify(formData.availability), // Convert array to string
      };

      const response = await axios.post(`${MainApi}/inscriptions`, payload);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to submit form");
    }
  };
  const options = ["Algeria", "France", "Germany", "Italy", "Spain", "other"]
  const ages = ["Under 18", "18-24", "25-34", "35-44", "45+"]
  const status = ["Student", "Employed", "Unemployed", "self-employed", "Free-lancer", "Other"]
  const levels = ["Beginner", "Intermediate", "Advanced", "I don't know"]
  const availabilities = ["weekends (morning)", "weekends (afternoon)", "weekdays (morning)", "weekdays (afternoon)"]
  const courses = ["Python for Data Science", "AI and Deep Learning", "Machine Learning", "English", "FullStack"]
  return (
    <div>
      <div className="contact-container-form grid grid-cols-2 gap-[16px]">
        <InputContact name={"Full Name"} type={"text"} placeholder={"Enter your name"} onChange={(e) => handleChange("name", e.target.value)} />
        <InputContact name={"Adress e-mail"} type={"text"} placeholder={"Enter your e-mail address"} onChange={(e) => handleChange("email", e.target.value)} />
        <InputContact name={"Contact number (WhatsApp Number ) "} type={"text"} placeholder={"+213 000 000 000"} onChange={(e) => handleChange("phone", e.target.value)} />
       
        <div className="input-container ">
          <label className="py-4">Age group  </label>
          <Select onValueChange={(value) => handleChange("age_group", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={'select your age group'} />
            </SelectTrigger>
            <SelectContent>
              {ages.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> 
        <div className="input-container ">
          <label className="py-4">Contry  </label>
          <Select onValueChange={(value) => handleChange("contry", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={'select your country'} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

       

        <InputContact name={"City of Residence"} type={"text"} placeholder={"Enter your city"} onChange={(e) => handleChange("city", e.target.value)} />

        <div className="input-container ">
          <label className="py-4">Status  </label>
          <Select onValueChange={(value) => handleChange("status", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={'select your status'} />
            </SelectTrigger>
            <SelectContent>
              {status.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="input-container ">
          <label className="py-4">Current Level of Experience  </label>
          <Select onValueChange={(value) => handleChange("level", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={'select your level'} />
            </SelectTrigger>
            <SelectContent>
              {levels.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>


        <div className="input-container col-span-2 ">
          <label className="py-4">Course  </label>
          <Select onValueChange={(value) => handleChange("level", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={courses[0]} />
            </SelectTrigger>
            <SelectContent>
              {courses.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="input-container col-span-2 ">
          <label className="py-4">Availability for Live Sessions  </label>
          <Select onValueChange={(value) => handleChange("level", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={'select your level'} />
            </SelectTrigger>
            <SelectContent>
              {availabilities.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      
        <div className="col-span-2 p-2 input-container">
        <label className="py-4">Additional Comments   </label>
          <Textarea placeholder="Type your message here." onChange={(e) => handleChange("message", e.target.value)} />
        </div>
        <div className="input-container switch-container col-span-2 py-2 flex items-center">
          <Switch  />
          <label className="py-4 ml-2">"I accept the general terms and conditions as well as the privacy policy of the site. I agree that my personal data will be collected and processed in accordance with this policy."  </label>
        </div>
        <div className="flex justify-end py-4 col-span-2 ">
        <ButtonSecondary text={"Register now"} onClick={() => handleSubmit()} />
      </div>
      </div>
      
    </div>
  );
}
