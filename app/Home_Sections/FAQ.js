import AccordionComponent  from "../components/Accorion/Accordion"
export default function FAQ() {
    const items = [
        {
            title: "Work / life balance",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members  to take ownership of their timeand schedule in a way that keeps them balanced in life andable have the impact they want at work.",
        },
        {
            title: "Team environment",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members  to take ownership of their timeand schedule in a way that keeps them balanced in life andable have the impact they want at work.",
        },
        {
            title: "Career development",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members  to take ownership of their timeand schedule in a way that keeps them balanced in life andable have the impact they want at work.",
        },
        {
            title: "Time offline",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members  to take ownership of their timeand schedule in a way that keeps them balanced in life andable have the impact they want at work.",
        },
        {
            title: "Health & wellness benefits",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members  to take ownership of their timeand schedule in a way that keeps them balanced in life andable have the impact they want at work.",
        },
        {
            title: "The ultimate home office set up",
            content: "Non-linear workdays are encouraged at Brainex. Wesupport our team members"
        }
    ]
    return (

        <div className="why-us-section py-4  container ">
            <p className="text-start text-white py-4 welcome-h1">Your FAQ  </p>
            <p>We’re building a decentralized future with an amazing group
                of people. We can’t wait for you to join us!</p>
            <div className="flex rounded-lg overflow-hidden h-[600px]">
                <div className="faq flex-1">
                    <AccordionComponent items={items}/>
                </div>
                <div className="faq-img flex-1">
                    <img src="./faq.png" alt="brainex" />
                </div>
            </div>
        </div>


    )
}