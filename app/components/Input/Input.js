import "./style.css"
 export default function InputContact({name, type, placeholder, onChange}) {
     return (
        <div className="input-container ">
            <label className="py-4" id={name}>{name}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={onChange}/>
        </div>
     )
 }