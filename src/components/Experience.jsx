import { useState } from "react";
import "../styles/component.css";
export default function Experience({experience,setExperience}){
    const [isEditing,setIsEditing]=useState(true);
    function handleSubmitButton() {
        setIsEditing(false)
    }
    function handleEditButton() {
        setIsEditing(true)
    }
    function handleCompanyChange(event) {
        setExperience({
            ...experience,
            company: event.target.value
        })
    }
    function handlePositionChange(event) {
        setExperience({
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
        setExperience({
            ...experience,
            startDate: event.target.value
        })
    }
    function handleEndDateChange(event) {
        setExperience({
            ...experience,
            endDate: event.target.value
        })
    }
    if (isEditing) {
        return (
            <div className="experience-edit-component component">
                <h2 className="title">Experience</h2>
                <div className="form-field">
                <label htmlFor="company">Company Name:</label>
                <input type="text"
                    id="company"
                    value={experience.company}
                    onChange={handleCompanyChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="position">Position</label>
                <input type="text"
                    id="position"
                    value={experience.position}
                    onChange={handlePositionChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="responsibility">Responsibilites:</label>
                <textarea
                    id="responsibility"
                    value={experience.responsibility}
                    onChange={handleResponsiblitiesChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="start-date">Start Date:</label>
                <input type="month"
                    id="start-date"
                    value={experience.startDate}            
                    onChange={handleStartDateChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="end-date">End Date:</label>
                <input type="month"
                    id="end-date"
                    value={experience.endDate}
                    onChange={handleEndDateChange}
                />
                </div>
                <button className="submit-btn" onClick={handleSubmitButton}>Submit</button>
            </div>
        )
    }
    return (
        <div className="experience-display-component display-component">
            <h2 className="title">Experience</h2>
            <h3>Company Name:</h3>
            <h4>{experience.company}</h4>
            <h3>Position:</h3>
            <h4>{experience.position}</h4>
            <h3>Responsibilities:</h3>
            <p>{experience.responsibility}</p>
            <h3>Start Date:</h3>
            <h4>{experience.startDate}</h4>
            <h3>End Date:</h3>
            <h4>{experience.endDate === "" ? "Present" : experience.endDate}</h4>
            <button className="edit-btn" onClick={handleEditButton}>Edit</button>
        </div>
    )
}