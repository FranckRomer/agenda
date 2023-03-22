import React, { useState } from 'react'
import ListaTareas from '@/components/ListaTareas'
import FormCreateToDo from '@/components/FormCreateToDo'

const Agenda = () => {

  return (
    <main className='grid md:grid-cols-2 justify-between mt-8 gap-12 gap-y-12 '>

      <section className='h-fit w-fit p-12 mx-auto  bg-white/30 dark:bg-black/40 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'>
        <h1 className='text-3xl font-semibold text-center m-4'>
          Crear nueva Tarea 📘
        </h1>
        <FormCreateToDo></FormCreateToDo>
      </section>

      <section className='flex justify-center'>
        <ListaTareas></ListaTareas>
      </section>

    </main>
  )
}

export default Agenda