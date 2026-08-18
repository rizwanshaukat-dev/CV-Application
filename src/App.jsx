import { useState } from 'react'
import "./styles/app.css"
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
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
    <div className='cv-form-container'>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience}/>
    </div>
  )
}

export default App
