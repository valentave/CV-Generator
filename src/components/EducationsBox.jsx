import EducationItem from './EducationItem.jsx'

function EducationsBox({educations, onChange, onClick}) {
    return (
        <details className='inputs-box educations'>
            <summary className='box-title'>Educations</summary>
            {educations.map((education) => (
                <EducationItem 
                    key = {education.id}
                    experience = {education}
                    onChange = {onChange} />
            ))}
            <button 
            className='plus-button'
            onClick = {onClick}>+ Education</button>
        </details>
    )
}

export default EducationsBox