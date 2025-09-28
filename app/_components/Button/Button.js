import { Button } from "@/components/ui/button"
import "./style.css"
export function ButtonSecondary({ text, addClassName, onClick, link, disabled=false, loading=false }) {
  return <a href={link} className="flex justify-center md:justify-start">
    {
      loading ? <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle fill='#F6FFFC' stroke='#F6FFFC' stroke-width='15' r='15' cx='40' cy='65'><animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'></animate></circle><circle fill='#F6FFFC' stroke='#F6FFFC' stroke-width='15' r='15' cx='100' cy='65'><animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2'></animate></circle><circle fill='#F6FFFC' stroke='#F6FFFC' stroke-width='15' r='15' cx='160' cy='65'><animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate></circle></svg> : 
      <Button disabled={disabled} onClick={onClick} className={`text-white register-btn ${addClassName}`}>{text} <span className="arrow-right"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.00066 8.99934H16.0267M16.0267 8.99934L8.51367 16.5123M16.0267 8.99934L8.51367 1.48633" stroke="white" strokeWidth="1.59375" stroke-linecap="round" stroke-linejoin="round" />
    </svg></span></Button>
    }
 
  </a> 
}