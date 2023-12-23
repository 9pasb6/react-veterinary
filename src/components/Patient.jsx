import React from 'react'

const Patient = ({patients, setPatient, deletePatient}) => {


    const {id, namePet, name, email, date, description} = patients;

const handleDelete = () =>{
    const respuesta = confirm('Deseas eliminar el paciente?')
    if(respuesta){
        deletePatient(id)
    }
}

  return (
    <div className='p-10 bg-white border-2 rounded-md shadow-md mt-5'>
    <p className='font-bold text-left pb-2'>Nombre de la mascota: {''} 
    <span className='font-normal pb-2'>{namePet}</span></p>
    <p className='font-bold text-left pb-2'>Nombre del propietario: {''} 
    <span className='font-normal pb-2'>{name}</span></p>
    <p className='font-bold text-left pb-2'>Email: {''} 
    <span className='font-normal pb-2'>{email}</span></p>
    <p className='font-bold text-left pb-2'>Fecha de alta: {''} 
    <span className='font-normal pb-2'>{date}</span></p>
    <p className='font-bold text-left pb-2'>Síntomas: {''} 
    <span className='font-normal pb-2'>{description}</span></p>
    <div className='text-left'>
        <button onClick={()=>{setPatient(patients)}} className='py-2  px-10 mb-3 bg-indigo-600 shadow-md  hover:bg-indigo-700  rounded-md text-white mr-5' type='button'>Editar</button>
        <button onClick={handleDelete} className='py-2 px-10 bg-red-500 shadow-md  hover:bg-red-600  rounded-md text-white' type='button'>Eliminar</button>
        
    </div>
   </div>
  )
}

export default Patient