import EducationItem from './ExperienceItem.jsx'

function ExperiencesBox({experiences, onChange, onClick}) {
    return (
        <details className='inputs-box experiences'>
            <summary className='box-title'>Experiences</summary>
            {experiences.map((experiences) => (
                <EducationItem 
                    key = {experiences.id}
                    experience = {experiences}
                    onChange = {onChange} />
            ))}
            <button
            className='plus-button'
            onClick={onClick}>+ Experience</button>
        </details>
    )
}

export default ExperiencesBox