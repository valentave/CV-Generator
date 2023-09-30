import EducationItem from './EducationItem.jsx'

function EducationsBox({educations, onChange}) {
    return (
        <details className='inputs-box educations'>
            <summary className='box-title'>Educations</summary>
            {educations.map((education) => (
                <EducationItem 
                    key = {education.id}
                    experience = {education}
                    onChange = {onChange} />
            ))}
        </details>
    )
}

export default EducationsBox