import Input from './Input.jsx'

function PersonalDetailsBox({ personalData, onChange }) {
    return (
        <details className='inputs-box personal-details' key={personalData.id}>
            <summary className='box-title'>Personal Details</summary>
            <Input 
                label = 'Full Name'
                type = 'text'
                value = {personalData.fullName}
                id = 'fullName'
                onChange={onChange} />
            <Input 
                label = 'email'
                type = 'email'
                value = {personalData.email}
                id= 'email'
                onChange= {onChange} />
            <Input 
                label = 'phone'
                type = 'tel'
                value = {personalData.phone}
                id= 'phone'
                onChange= {onChange} />
            <Input 
                label = 'address'
                type = 'text'
                value = {personalData.address}
                id= 'address'
                onChange= {onChange} />
        </details>
    )
}

export default PersonalDetailsBox