import EducationItem from './EducationItem.jsx'

function EducationsBox({educations, onChange, onClickAdd, onClickDelete}) {
    return (
        <details className='inputs-box educations'>
            <summary className='box-title'>Educations</summary>
            {educations.map((education) => (
                <EducationItem 
                    key = {education.id}
                    experience = {education}
                    onChange = {onChange} 
                    onClickDelete = {onClickDelete}/>
            ))}
            <div className='button-container'>
                <button 
                className='plus-button'
                onClick = {onClickAdd}>+ Education</button>
            </div>
        </details>
    )
}

export default EducationsBox