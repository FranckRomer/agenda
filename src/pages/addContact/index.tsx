import React from 'react'
import FormCreateToDo from '@/components/FormCreateToDo'
import Tarjeta from '@/components/Tarjeta'

const AgregarContacto = () => {
  return (
    <div>
        {/* <Tarjeta className='h-fit w-fit p-12 mx-auto  bg-white/30 dark:bg-black/40 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'> */}
        <Tarjeta>
        <h1 className='text-3xl font-semibold text-center m-4'>
          Crear nuevo Contacto 📘
        </h1>
        <FormCreateToDo></FormCreateToDo>

        </Tarjeta>
      {/* </Tarjeta> */}
    </div>
  )
}

export default AgregarContacto