import React from 'react'
import FromRegister from '@/components/FromRegister'

const Register = () => {

  return (
    <div className='grid m-auto w-fit p-12  bg-white/30 dark:bg-black/40 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'>
      <h1 className='text-center text-4xl font-semibold my-12'>
        Bienvenido a tu <span className='text-blue-500'>{'"Agenda"'}</span>
      </h1>
      <h2 className='text-2xl text-center font-sans '>
        {'"Crea tu usuario"'}
      </h2>

      <FromRegister></FromRegister>

    </div>
  )
}

export default Register