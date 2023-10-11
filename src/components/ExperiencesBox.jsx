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
            <div className='button-container'>
                <button
                className='plus-button'
                onClick={onClickAdd}>+ Experience</button>
            </div>
        </details>
    )
}

export default ExperiencesBox