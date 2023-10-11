import Input from './Input.jsx'

function PersonalDetailsBox({ personalData, onChange }) {
    return (
        <details className='inputs-box personal-details' key={personalData.id} open>
            <summary className='box-title'>Personal Details</summary>
            <Input 
                label = 'Full Name'
                type = 'text'
                value = {personalData.fullName}
                id = 'fullName'
                onChange={onChange} />
            <Input 
                label = 'Email'
                type = 'email'
                value = {personalData.email}
                id= 'email'
                onChange= {onChange} />
            <Input 
                label = 'Phone'
                type = 'tel'
                value = {personalData.phone}
                id= 'phone'
                onChange= {onChange} />
            <Input 
                label = 'Address'
                type = 'text'
                value = {personalData.address}
                id= 'address'
                onChange= {onChange} />
        </details>
    )
}

export default PersonalDetailsBox