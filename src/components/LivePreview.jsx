import LiveEducationItem from './LiveEducationItem.jsx';
import LiveExperienceItem from './LiveExperienceItem.jsx';

function LivePreview({font, layoutPosition, textColor, layoutColor, personalData, educations, experiences}) {
    return (
        <section className={"live-preview live-" + layoutPosition} style={{fontFamily: font}}>
            <div className="live-personal-data" style={{backgroundColor: layoutColor}}>
                <h1 className="live-fullname" style={{color: textColor}}>{personalData.fullName}</h1>
                <div className="header-item">
                    <svg  style={{fill: textColor}} className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                    <p className="live-email"  style={{color: textColor}}> {personalData.email}</p>
                </div>
                <div className="header-item">
                    <svg style={{fill: textColor}} className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                    <p className="live-phone" style={{color: textColor}}>{personalData.phone}</p>
                </div>
                <div className="header-item">
                    <svg style={{fill: textColor}} className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                    <p className="live-address" style={{color: textColor}}>{personalData.address}</p>
                </div>
            </div>
            <div className='history-container'>
                <div className="live-educations">
                    <h2 className="live-separator" style={{color: textColor=="#000000" ? "#000000" : "#ffffff", backgroundColor: layoutColor}}>Education</h2>
                    {educations.map((edu) => (
                        <LiveEducationItem key = {edu.id}
                        item = {edu} />
                    ))}
                </div>
                <div className='live-experiences'>
                    <h2 className='live-separator' style={{color: textColor=="#000000" ? "#000000" : "#ffffff", backgroundColor: layoutColor}}>Profesional Experience</h2>
                    {experiences.map((exp) => (
                        <LiveExperienceItem key = {exp.id}
                        item = {exp} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LivePreview