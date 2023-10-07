import Input from './Input.jsx'

function EducationItem({experience, onChange, onClickDelete}) {
    return (
        <details className='inputs-box education-item' id={experience.id + "school"}>
            <summary>{experience.school}</summary>
            <Input 
                label = 'School Name'
                type = 'text'
                value = {experience.school}
                id = {experience.school + '-' + experience.id}
                className = 'school-input'
                onChange = {onChange} />
            
            <Input 
                label = 'Degree'
                type = 'text'
                value = {experience.degree}
                id = {experience.degree + '-' + experience.id}
                className = 'degree-input'
                onChange = {onChange} />

            <Input 
                label = 'Location'
                type = 'text'
                value = {experience.location}
                id = {experience.location + '-' + experience.id}
                className = 'location-input'
                onChange = {onChange} />
                
            <Input 
                label = 'Start Date'
                type = 'date'
                value = {experience.startDate}
                id = {experience.startDate + '-' + experience.id}
                className = 'sdate-input'
                onChange = {onChange} />

            <Input 
                label = 'End Date'
                type = 'date'
                value = {experience.endDate}
                id = {experience.endDate + '-' + experience.id}
                className = 'edate-input'
                onChange = {onChange} />

            <button className='delete-button' onClick={onClickDelete}>Delete</button>
        </details>
    )
}

export default EducationItem