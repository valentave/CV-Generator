import EducationItem from './ExperienceItem.jsx'

function ExperiencesBox({experiences, onChange, onClickAdd, onClickDelete}) {
    return (
        <details className='inputs-box experiences'>
            <summary className='box-title'>Experiences</summary>
            {experiences.map((experiences) => (
                <EducationItem 
                    key = {experiences.id}
                    experience = {experiences}
                    onChange = {onChange} 
                    onClickDelete = {onClickDelete}/>
            ))}
            <button
            className='plus-button'
            onClick={onClickAdd}>+ Experience</button>
        </details>
    )
}

export default ExperiencesBox