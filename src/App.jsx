import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [education, setEducation] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: ""
  });
  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
    </>
  )
}

export default App
