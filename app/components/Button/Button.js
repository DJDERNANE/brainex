import { Button } from "@/components/ui/button"
import "./style.css"
export function ButtonSecondary({ text }) {
  return <Button className="text-white register-btn">{text} <span className="arrow-right"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00066 8.99934H16.0267M16.0267 8.99934L8.51367 16.5123M16.0267 8.99934L8.51367 1.48633" stroke="white" strokeWidth="1.59375" stroke-linecap="round" stroke-linejoin="round" />
  </svg></span></Button>
}