"use client";
import InputContact from "../Input/Input";
import "./style.css";
import { Switch } from "@/components/ui/switch";
import { ButtonSecondary } from "../Button/Button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useState, useEffect } from "react";
import { MainApi } from "../../utils/MainApi";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function Contact_Form() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [statusUser, setStatus] = useState("");
  const [level, setLevel] = useState("");
  const [availability, setAvailability] = useState("");
  const [city, setCity] = useState("");
  const [cours_id, setCours_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [missedName, setMissedName] = useState(false);
  const [missedEmail, setMissedEmail] = useState(false);
  const [missedPhone, setMissedPhone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare data to send to the backend
    const data = {
        email,
        name,
        phone,
        message,
        cours_id,
        city,
        age,
        statusUser,
        level,
        availability
    };

    try {
      const response = await axios.post(`${MainApi}/inscriptions`, data);
      if (response.status === 201) {
          alert("Inscription successfully!");
      } else {
          console.error('Unexpected response:', response);
          alert('An unexpected error occurred.');
      }
      setLoading(false);
  } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
          alert(`Submission failed: ${error.response.data.message || 'Server error'}`);
      } else {
          alert('Submission failed: Unable to connect to the server.');
      }
      setLoading(false);
  }
  
};

  const getCourses = () => {
    axios.get(`${MainApi}/cours`)
      .then((response) => {
        console.log(response.data.data); // Log the full response to inspect the structure
        setCourses(response.data.data); // Assuming `data` contains the courses
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };
  useEffect(() => {
    getCourses()
  }, [])
  const ages = ["under_18", "18-24", "25-34", "35-44", "45+"]
  const status = ["Student", "Employed", "Unemployed", "self-employed", "Free-lancer", "Other"]
  const levels = ["Beginner", "Intermediate", "Advanced", "i don't know"]
  const availabilities = ["weekdays_morning", "weekdays_afternoon", "weekends_morning", "weekends_afternoon"]


  return (
    <div>
      <div className="contact-container-form grid grid-cols-2 gap-[16px]" id="contact">
        <InputContact missed={missedName} name={"Full Name"} type={"text"} placeholder={"Enter your name"} onChange={(e) => {e.target.value === "" ? setMissedName(true) : setMissedName(false); setName(e.target.value)}} />
        <InputContact missed={missedEmail} name={"Adress e-mail"} type={"text"} placeholder={"Enter your e-mail address"} onChange={(e) => {e.target.value === "" ? setMissedEmail(true) : setMissedEmail(false); setEmail(e.target.value)}} />
        <InputContact missed={missedPhone} name={"Contact number (WhatsApp Number ) "} type={"text"} placeholder={"+213 000 000 000"} onChange={(e) => {e.target.value === "" ? setMissedPhone(true) : setMissedPhone(false); setPhone(e.target.value)}} />
        <InputContact name={"City of Residence"} type={"text"} placeholder={"Enter your city"} onChange={(e) => setCity(e.target.value)} />
        <div className="input-container ">
          <label className="py-4">Age group  </label>
          <Select onValueChange={(value) => setAge(value)}>
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
          <label className="py-4">Status  </label>
          <Select onValueChange={(value) => setStatus(value)}>
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
        <div className="input-container  ">
          <label className="py-4">Course  </label>
          <Select onValueChange={(value) => setCours_id(value)} >
            <SelectTrigger className="w-full">
              <SelectValue value={""} placeholder={'select your course'} />
            </SelectTrigger>
            <SelectContent>
              {courses?.map((option, index) => (
                <SelectItem key={index} value={option.id}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="input-container ">
          <label className="py-4">Current Level of Experience  </label>
          <Select onValueChange={(value) => setLevel(value)}>
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
          <label className="py-4">Availability for Live Sessions  </label>
          <Select selectMultiple={true} onValueChange={(value) => setAvailability(value)}>
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
          <Textarea placeholder="Type your message here." onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="input-container switch-container col-span-2 py-2 ">
          <Switch checked={agreed}
                      onCheckedChange={()=>setAgreed(!agreed)} />
          <label className="py-4 ml-2">"I accept the general terms and conditions as well as the privacy policy of the site. I agree that my personal data will be collected and processed in accordance with this policy."  </label>
        </div>
        <div className="flex justify-end py-4 col-span-2 ">
        <ButtonSecondary loading={loading} disabled={!agreed || loading} text={"Register now"} onClick={handleSubmit} />
      </div>
      </div>
      
    </div>
  );
}
