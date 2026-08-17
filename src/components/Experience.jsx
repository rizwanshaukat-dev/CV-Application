import { useState } from "react";

export default function Experience({experience,setExperience}){
    const [isEditing,setIsEditing]=useState(true);
    function handleSubmitButton() {
        setIsEditing(false)
    }
    function handleEditButton() {
        setIsEditing(true)
    }
    function handleCompanyChange(event) {
        setEducation({
            ...experience,
            company: event.target.value
        })
    }
    function handlePositionChange(event) {
        setEducation({
            ...experience,
            position: event.target.value
        })
    }
    function handleResponsiblitiesChange(event){
        setExperience({
            ...experience,
            responsibility: event.target.value
        })
    }
    function handleStartDateChange(event) {
        setEducation({
            ...experience,
            startDate: event.target.value
        })
    }
    function handleEndDateChange(event) {
        setEducation({
            ...experience,
            endDate: event.target.value
        })
    }
    if (isEditing) {
        return (
            <div className="experience-edit-component">
                <h2 className="title">Experience</h2>
                <label htmlFor="company">Company Name:</label>
                <input type="text"
                    id="company"
                    value={experience.company}
                    onChange={handleCompanyChange}
                />
                <label htmlFor="position">Postion</label>
                <input type="text"
                    id="position"
                    value={experience.positon}
                    onChange={handlePositionChange}
                />
                <label htmlFor="responsibility">Responsibilites:</label>
                <textarea
                    id="responsibilithy"
                    value={experience.responsibility}
                    onChange={handleResponsiblitiesChange}
                />
                <label htmlFor="start-date">Start Date:</label>
                <input type="month"
                    id="start-date"
                    value={experience.startDate}
                    onChange={handleStartDateChange}
                />
                <label htmlFor="end-date">End Date:</label>
                <input type="month"
                    id="end-date"
                    value={experience.endDate}
                    onChange={handleEndDateChange}
                />
                <button className="submit-btn" onClick={handleSubmitButton}>Submit</button>
            </div>
        )
    }
    return (
        <div className="education-display-component">
            <h2 className="title">Experience</h2>
            <h3>Company Name:</h3>
            <h4>{experience.company}</h4>
            <h3>Position:</h3>
            <h4>{experience.position}</h4>
            <h3>Responsibilities:</h3>
            <h4>{experience.responsibility}</h4>
            <h3>Start Date:</h3>
            <h4>{education.startDate}</h4>
            <h3>End Date:</h3>
            <h4>{education.endDate === "" ? "Present" : education.endDate}</h4>
            <button className="edit-btn" onClick={handleEditButton}>Edit</button>
        </div>
    )
}