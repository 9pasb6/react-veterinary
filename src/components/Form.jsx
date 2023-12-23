import React, { useEffect, useState } from 'react'
import Error from './Error'

const Form = ({patients, setPatients, patient}) => {
 
  const [namePet, setNamePet ] = useState('')
  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')
  const [date, setDate ] = useState('')
  const [description, setDescription ] = useState('')
  const [error, setError ] = useState(false)
  const [confirm, setConfirm ] = useState(false)
  
 


  // to make object
  useEffect(()=>{

   if(Object.keys(patient).length > 0){

  
    setNamePet(patient.namePet)
    setName(patient.name)
    setEmail(patient.email)
    setDate(patient.date)
    setDescription(patient.description)
   

   }

  }, [patient])

  

  

  const handleSumit = (e) =>{
    
    e.preventDefault();

    if([namePet, name, email, date, description].includes('')){
      setError(true)
      
      return;
    }else{

      setError(false)
      setConfirm(true)
      setTimeout(()=>{setConfirm(false)},2000)
      

    }
     
     // patient key

     const generateId = ()=>{

      const random = Math.random().toString(36).substring(2)
      const date = Date.now().toString(36);

      return random + date

     }


      // patient object
      const patientObject = {
        namePet,
        name,
        email,
        date,
        description
      }

      if(patient.id){

        
        patientObject.id = patient.id

        console.log(patientObject)
        console.log(patient)
        const updatePatient = patients.map(patientState => patientState.id ===
        patient.id? patientObject : patientState)
        setPatients(updatePatient)
        

        console.log('editando registro', patient.id)

        
        
        
        

      } else{

    // Array object
       patientObject.id=generateId();
       setPatients([... patients, patientObject]);
       console.log('nuevo registro')
        
   

      }
      
      //restart form
      setNamePet('')
      setName('')
      setEmail('')
      setDate('')
      setDescription('')
      patient.id = null

  }


 


  return (
    <div className='w-1/3 w-full   md:pr-10 max-w-screen-md mr-5'>
      <h2 className='text-3xl  font-bold mb-5'>Formulario Pacientes</h2>
      <p>Añade pacientes y <span className='text-indigo-600'> Administralos</span></p>
      <form onSubmit={handleSumit} action="" className='bg-white shadow-md rounded-md py-5 px-5 mt-5'>
        <div>
          <label htmlFor="mascota" className='text-left block font-bold'>Nombre de la mascota</label>
          <input onChange={ (e)=> {setNamePet(e.target.value)} } id='mascota' value={namePet} className='w-full border-2 rounded-md border-indigo-600 mt-2 placeholder-indigo-200 mb-5' type="text" placeholder=' Nombre mascota'/>
        </div>
        <div>
          <label htmlFor="propietario" className='text-left block font-bold'>Nombre del propietario</label>
          <input onChange={ (e)=> {setName(e.target.value)} } id='propietario' value={name} className='w-full border-2 rounded-md border-indigo-600 mt-2 placeholder-indigo-200 mb-5' type="text" placeholder=' Nombre del propietario'/>
        </div>
        <div>
          <label htmlFor="email" className='text-left block font-bold'>Email</label>
          <input onChange={ (e)=> {setEmail(e.target.value)} } id='email' value={email} className='w-full border-2 rounded-md border-indigo-600 mt-2 placeholder-indigo-200 mb-5' type="email" placeholder=' Correo de contacto'/>
        </div>
        <div>
          <label htmlFor="date" className='text-left block font-bold'>Fecha</label>
          <input onChange={ (e)=> {setDate(e.target.value)} } id='date' value={date} className='w-full border-2 rounded-md border-indigo-600 mt-2 placeholder-indigo-200 mb-5' type="date" />
        </div>
        <div>
          <label htmlFor="detalle" className='text-left block font-bold'>Síntomas</label>
          <textarea onChange={ (e)=> {setDescription(e.target.value)} } name="Descripcion" id="detalle" value={description} className='w-full border-2 rounded-md border-indigo-600 mt-2 placeholder-indigo-200 mb-5' placeholder=' Describe los sintomas de tu mascota' rows="5"></textarea>
        </div>
        <input value={patient.id?'Editar registro' : 'Agregar registro'} type="submit"  className='w-full border-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-all mt-2 mb-5 p-2 text-indigo-200 font-bold'/>

          <Error error={error} confirm={confirm} />
       
      </form>
      
     

      

    </div>
  )
}

export default Form
