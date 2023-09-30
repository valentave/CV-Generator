function Input({label, type, value, id, onChange, className = ''}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} defaultValue={value} onChange={onChange} className={className}/>
        </div>
    )
}

export default Input