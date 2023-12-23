import { useEffect, useState } from 'react'

import Header from './components/Header'
import PatientList from './components/PatientList'
import Form from './components/Form'



function App() {

  // patients list
  const [patients, setPatients] = useState([])
  // patient object
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const patientsLs = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(patientsLs);
  }, []);
  
  

useEffect(()=>{

  localStorage.setItem('patients', JSON.stringify(patients))

}, [patients] )





const deletePatient = (id) =>{

console.log('Eliminando paciente', id )
const auxPatient = patients.filter(patient => patient.id !== id)
setPatients(auxPatient)

}

  
  return (
    <div className='container  bg-slate-100 mx-auto pt-10'>
    
    
   
    <Header />
    
      
   
   <div className='mt-10 md:grid grid-cols-2  px-5' >
      <div className='grid  pt-8 justify-starts'>
      <Form 
      patients={patients}
      setPatients={setPatients}
      patient={patient}
      />
      </div>

    <div className='grid  pt-8 justify-stretch'>
    <PatientList
      patients={patients}
      setPatient={setPatient}
      deletePatient={deletePatient}
      />
    </div>
   </div>
      
    </div>
  )
}

export default App
