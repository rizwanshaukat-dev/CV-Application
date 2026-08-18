import { useState } from "react"
import "../styles/general.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
    const [isEditing, setIsEditing] = useState(true);
    function handleSubmitButton() {
        setIsEditing(false)
    }
    function handleEditButton() {
        setIsEditing(true)
    }
    function handleFirstNameChange(event) {
        setGeneralInfo({
            ...generalInfo,
            firstName: event.target.value
        })
    }
    function handleLastNameChange(event) {
        setGeneralInfo({
            ...generalInfo,
            lastName: event.target.value
        })
    }
    function handleEmailChange(event) {
        setGeneralInfo({
            ...generalInfo,
            email: event.target.value
        })
    }
    function handlePhoneChange(event) {
        setGeneralInfo({
            ...generalInfo,
            phone: event.target.value
        })
    }
    if (isEditing) {
        return (
            <div className="general-edit-component general-component">
                <h2 className="title">General Information</h2>
                <div className="form-field">
                <label htmlFor="first-name">First Name:</label>
                <input type="text"
                    id="first-name"
                    value={generalInfo.firstName}
                    onChange={handleFirstNameChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text"
                    id="last-name"
                    value={generalInfo.lastName}
                    onChange={handleLastNameChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email"
                    value={generalInfo.email}
                    onChange={handleEmailChange}
                />
                </div>
                <div className="form-field">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel"
                    id="phone"
                    value={generalInfo.phone}
                    onChange={handlePhoneChange}
                />
                </div>
                <button className="submit-btn" onClick={handleSubmitButton}>Submit</button>
            </div>
        )
    }
    return (
        <div className="general-display-component general-component">
            <h2 className="title">General Information</h2>
            <h3>Full Name:</h3>
            <h4>{generalInfo.firstName} {generalInfo.lastName}</h4>
            <h3>Email:</h3>
            <h4>{generalInfo.email}</h4>
            <h3>Phone Number:</h3>
            <h4>{generalInfo.phone}</h4>
            <button className="edit-btn" onClick={handleEditButton}>Edit</button>
        </div>
    )
}