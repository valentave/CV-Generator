import EducationItem from './ExperienceItem.jsx'

function ExperiencesBox({experiences, onChange}) {
    return (
        <details className='inputs-box experiences'>
            <summary className='box-title'>Experiences</summary>
            {experiences.map((experiences) => (
                <EducationItem 
                    key = {experiences.id}
                    experience = {experiences}
                    onChange = {onChange} />
            ))}
        </details>
    )
}

export default ExperiencesBox