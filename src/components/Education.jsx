import { useState } from "react";
import "../styles/component.css";
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
            <div className="education-edit-component  component">
                <h2 className="title">Education</h2>
                <div className="form-field">
                <label htmlFor="school-name">Institution Name:</label>
                <input type="text"
                    id="school-name"
                    value={education.schoolName}
                    onChange={handleSchoolChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="program">Program/Degree:</label>
                <input type="text"
                    id="program"
                    value={education.titleOfStudy}
                    onChange={handleProgramChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="start-date-education">Start Date:</label>
                <input type="month"
                    id="start-date-education"
                    value={education.startDate}
                    onChange={handleStartDateChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="end-date-education">End Date:</label>
                <input type="month"
                    id="end-date-education"
                    value={education.endDate}
                    onChange={handleEndDateChange}
                />
                </div>
                <button className="submit-btn" onClick={handleSubmitButton}>Submit</button>
            </div>
        )
    }
    return (
        <div className="education-display-component display-component">
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