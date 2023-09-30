import LiveEducationItem from './LiveEducationItem.jsx';
import LiveExperienceItem from './LiveExperienceItem.jsx';

function LivePreview({personalData, educations, experiences}) {
    return (
        <section className="live-preview">
            <div className="live-personal-data">
                <h1 className="live-fullname">{personalData.fullName}</h1>
                <p className="live-email">{personalData.email}</p>
                <p className="live-phone">{personalData.phone}</p>
                <p className="live-address">{personalData.address}</p>
            </div>
            <div className="live-educations">
                <h2 className="live-separator">Educations</h2>
                {educations.map((edu) => (
                    <LiveEducationItem key = {edu.id}
                    item = {edu} />
                ))}
            </div>
            <div className='live-experiences'>
                <h2 className='live-separator'>Experiences</h2>
                {experiences.map((exp) => (
                    <LiveExperienceItem key = {exp.id}
                    item = {exp} />
                ))}
            </div>
        </section>
    )
}

export default LivePreview