function LiveEducationItem({item}) {
    return (
        <div className="education-item">
            <div className="first-column">
                <p>{item.startDate ? item.startDate : "Present"} - {item.endDate ? item.endDate : "Present"}</p>
                <p>{item.location}</p>
            </div>
            <div className="second-column">
                <p className="live-bold">{item.school}</p>
                <p>{item.degree}</p>
            </div>
        </div>
    )
}

export default LiveEducationItem