import Input from './Input.jsx'

function EducationItem({experience, onChange, onClickDelete}) {
    return (
        <details className='inputs-box experience-item' id={experience.id + "job"}>
            <summary>{experience.company}</summary>
            <Input 
                label = 'Company Name'
                type = 'text'
                value = {experience.company}
                id = {experience.company + '-' + experience.id}
                className = 'company-input'
                onChange = {onChange} />
            
            <Input 
                label = 'Position'
                type = 'text'
                value = {experience.position}
                id = {experience.position + '-' + experience.id}
                className = 'position-input'
                onChange = {onChange} />

            <Input 
                label = 'Location'
                type = 'text'
                value = {experience.location}
                id = {experience.location + '-' + experience.id}
                className = 'location-input'
                onChange = {onChange} />

            <Input 
                label = 'Description'
                type = 'text'
                value = {experience.description}
                id = {experience.description + '-' + experience.id}
                className = 'description-input'
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
            
            <div className='button-container'>
                <button className='delete-button' onClick={onClickDelete}>Delete</button>
            </div>
        </details>
    )
}

export default EducationItem