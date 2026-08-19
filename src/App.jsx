import { useState } from 'react'
import "./styles/app.css"
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVpreview';
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
  const [experience,setExperience]=useState({
    company:"",
    position:"",
    responsibility:"",
    startDate:"",
    endDate:""
  });
  return (
    <div className="app-content">
    <div className="cv-form-container no-print">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience}/>
    </div>
    <div className="cv-preview">
      <CVPreview generalInfo={generalInfo} education={education} experience={experience}/>
    </div>
  </div>
  )
}

export default App
