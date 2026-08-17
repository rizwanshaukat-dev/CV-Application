export default GeneralInfoForm({generalInfo,setGeneralInfo}){
    function handleNameChange(event) {
        setGeneralInfo({
            ...generalInfo,
            name:event.target.value
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
        <input type="text" 
        value={generalInfo.name}
        onChange={handleNameChange}
        />
        <input type="email" 
        value={generalInfo.email}
        onChange={handleEmailChange}
        />
        <input type="tel" 
        value={generalInfo.phone}
        onChange={handlePhoneChange}
        />
        </div>
    )
}