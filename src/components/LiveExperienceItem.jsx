function LiveExperienceItem({item}) {
    return (
        <div className="experience-item">
            <div className="first-column">
                <p>{item.startDate ? item.startDate : "Present"} - {item.endDate ? item.endDate : "Present"}</p>
                <p>{item.location}</p>
            </div>
            <div className="second-column">
                <p className="live-bold">{item.company}</p>
                <p>{item.position}</p>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default LiveExperienceItem