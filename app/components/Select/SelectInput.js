import "./style.css"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
export default function SelectContact({ name, opitions, placeholder }) {
    return (
        <div className="select-container ">
            <label className="py-4" id={name}>{name}</label>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        opitions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}