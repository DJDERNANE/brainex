import "./style.css"
 export default function InputContact({name, type, placeholder}) {
     return (
        <div className="input-container ">
            <label className="py-4" id={name}>{name}</label>
            <input type={type} name={name} id={name} placeholder={placeholder}/>
        </div>
     )
 }