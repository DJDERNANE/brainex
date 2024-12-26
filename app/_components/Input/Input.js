import "./style.css"
 export default function InputContact({name, type, placeholder, onChange, missed}) {
     return (
        <div className={missed ? "input-container missed" : "input-container"}>
            <label className="py-4" id={name}>{name}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={onChange}/>
        </div>
     )
 }