import "./style.css"
import { Contact_Form } from "@/app/_components/Contact_Form/Contact_Form";

export default function Contact_Section() {
    return (
        <div className="py-[100px] mx-auto container">
            <div className="h-screen">
                <img src="/contact.png" alt="contact brainex" className="mx-auto h-full" />
            </div>
            <p className="text-white text-center subtitle">Subscribe now</p>
            <h1 className="text-center training-h1 w-[60%] mx-auto">Fill out this form and one of our advisers will contact you shortly.</h1>

            <div className="py-[100px]">

                <Contact_Form />
            </div>
        </div>
    )

}