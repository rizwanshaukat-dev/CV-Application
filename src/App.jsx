import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
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
    dateOfStudy: ""
  });
  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
    </>
  )
}

export default App
