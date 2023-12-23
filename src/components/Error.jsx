import React from 'react'

const Error = ({error, confirm}) => {






  return (
    <div>
        {error ? <div className='bg-red-500 shadow-md text-center rounded-md text-white p-2'><p> Todos los campos deben estar llenos </p></div> : confirm?  <div className='bg-green-500 shadow-md rounded-md text-center text-white p-2'><p> Formulario enviado con exito </p></div> : <> </>}
       
    </div>
  )
}

export default Error