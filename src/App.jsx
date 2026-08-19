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
    role:"",
    email: "",
    phone: ""
  });
  const [education, setEducation] = useState([{
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: ""
  }]);
  const [experience, setExperience] = useState([{
    company: "",
    position: "",
    responsibility: "",
    startDate: "",
    endDate: ""
  }]);
  function printButtonHandle() {
    window.print();

  }
  function addEducationHandle() {
    setEducation([
      ...education,
      {
        schoolName: "",
        titleOfStudy: "",
        startDate: "",
        endDate: ""
      }])
  }
  function updateEducation(index, updatedEducation) {
    setEducation(
        education.map((item, i) =>
            i === index ? updatedEducation : item
        )
    );
}
  function addExperienceHandle() {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        responsibility: "",
        startDate: "",
        endDate: ""
      }
    ])
  }
function updateExperience(index, updatedExperience) {
    setExperience(
        experience.map((item, i) =>
            i === index ? updatedExperience : item
        )
    );
}
  return (
    <div className="app-content">
      <div className="cv-form-container no-print">
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        {education.map((educationItem, index) => (
          <Education
            key={index}
            education={educationItem}
            updateEducation={updateEducation}
            index={index}
          />
        ))}
        <button className="add-education" onClick={addEducationHandle}>Add</button>
        {experience.map((experienceItem, index) => (
          <Experience
            key={index}
            experience={experienceItem}
            updateExperience={updateExperience}
            index={index}
          />
        ))}
        <button className="add-experience" onClick={addExperienceHandle}>Add</button>
      </div>
      <div className="cv-preview">
        <button className='print-btn' onClick={printButtonHandle}>Print or Downlaod Pdf</button>
        <CVPreview generalInfo={generalInfo} education={education} experience={experience} />
      </div>
    </div>
  )
}
export default App
