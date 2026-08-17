export default function GeneralInfoForm({generalInfo,setGeneralInfo}){
    function handleFirstNameChange(event) {
        setGeneralInfo({
            ...generalInfo,
            firstName:event.target.value
        })
    }
    function handleLastNameChange(event) {
        setGeneralInfo({
            ...generalInfo,
            lastName:event.target.value
        })
    }
    function handleEmailChange(event) {
        setGeneralInfo({
            ...generalInfo,
            email:event.target.value
        })
    }
    function handlePhoneChange(event) {
        setGeneralInfo({
            ...generalInfo,
            phone:event.target.value
        })
    }
    return(
        <div className="general-component">
            <h2 className="title">General Information</h2>
            <label htmlFor="first-name">First Name:</label>
        <input type="text" 
        id="first-name"
        value={generalInfo.firstName}
        onChange={handleFirstNameChange}
        />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" 
        id="last-name"
        value={generalInfo.lastName}
        onChange={handleLastNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input type="email" 
        id="email"
        value={generalInfo.email}
        onChange={handleEmailChange}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" 
        id="phone"
        value={generalInfo.phone}
        onChange={handlePhoneChange}
        />
        </div>
    )
}