import { useState } from 'react'
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
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience}/>
    </>
  )
}

export default App
