import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
function App() {
  const [generalInfo,setGeneralInfo]=useState({
    name:"",
    email:"",
    phone:""
  });
  return (
    <>
    <GeneralInfo />
    </>
  )
}

export default App
