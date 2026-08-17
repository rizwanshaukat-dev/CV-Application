export default function Education({ education, setEducation }) {
    const [isEditing, setIsEditing] = useState(true);
    function handleSubmitButton() {
        setIsEditing(false)
    }
    function handleEditButton() {
        setIsEditing(true)
    }
    function handleSchoolChange(event) {
        setEducation({
            ...education,
            schoolName: event.target.value
        })
    }
    function handleProgramChange(event) {
        setEducation({
            ...education,
            titleOfStudy: event.target.value
        })
    }
    function handleStartDateChange(event) {
        setEducation({
            ...education,
            startDate: event.target.value
        })
    }
    function handleEndDateChange(event) {
        setEducation({
            ...education,
            endDate: event.target.value
        })
    }
    if (isEditing) {
        return (
            <div className="education-edit-component">
                <label htmlFor="school-name">Institution Name:</label>
                <input type="text"
                    id="school-name"
                    value={education.schoolName}
                    onChange={handleSchoolChange}
                />
                <label htmlFor="program">Program/Degree:</label>
                <input type="text"
                    id="program"
                    value={education.titleOfStudy}
                    onChange={handleProgramChange}
                />
                <label htmlFor="start-date">Start Date:</label>
                <input type="month"
                    id="start-date"
                    value={education.startDate}
                    onChange={handleStartDateChange}
                />
                <label htmlFor="end-date">End Date:</label>
                <input type="month"
                    id="end-date"
                    value={education.endDate}
                    onChange={handleEndDateChange}
                />
                <button className="submit-btn" onClick={handleSubmitButton}>Submit</button>
            </div>
        )
    }
    return (
        <div className="education-display-component">
            <h2 className="title">Education</h2>
            <h3>Institute Name:</h3>
            <h4>{education.schoolName}</h4>
            <h3>Program/Degree:</h3>
            <h4>{education.titleOfStudy}</h4>
            <h3>Start Date:</h3>
            <h4>{education.startDate}</h4>
            <h3>End Date:</h3>
            <h4>{education.endDate === "" ? "Present" : education.endDate}</h4>
            <button className="edit-btn" onClick={handleEditButton}>Edit</button>
        </div>
    )
}