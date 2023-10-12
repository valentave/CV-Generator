function LiveExperienceItem({item}) {
    let startYear;
    let startMonth;
    let endYear;
    let endMonth;

    if (item.startDate) {
        startYear = item.startDate.slice(0,4);
        startMonth = item.startDate.slice(5,7);
    }
    if (item.endDate) {
        endYear = item.endDate.slice(0,4);
        endMonth = item.endDate.slice(5,7);
    }

    return (
        <div className="live-experience-item">
            <div className="first-column">
            <p>{item.startDate ? startMonth + "/" + startYear : "Present"} - {item.endDate ? endMonth + "/" + endYear : "Present"}</p>
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