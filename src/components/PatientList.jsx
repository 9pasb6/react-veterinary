import React, { createElement, useEffect, useState } from 'react'
import Patient from './Patient'



const PatientList = ({patients, setPatient, deletePatient}) => {
 

  return (

    <div className='w-2/3 w-full   mr-5 overflow-scroll'>

    {patients.length === 0 ?  <h2 className='text-3xl font-bold mb-5'>No hay pacientes</h2> : 
    <h2 className='text-3xl font-bold mb-5'>Listado de pacientes</h2> }
    <p>Administra tus <span className='text-indigo-600'> Pacientes Y Citas</span></p>
      
        

      {patients.map( patients => {
        console.log(patients)
            return <Patient 
            key={patients.id} 
            patients={patients} 
            setPatient={setPatient}
            deletePatient={deletePatient} 
            />
      })}

     
     

     

    </div>
  )
}

export default PatientList
