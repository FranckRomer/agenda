import React, { useState } from 'react'
import ListaTareas from '@/components/ListaTareas'
import FormCreateToDo from '@/components/FormCreateToDo'

const Agenda = () => {

  return (
    <main className='grid m-auto mt-8 gap-12 gap-y-12 '>      

      <section className='flex justify-center'>
        <ListaTareas></ListaTareas>
      </section>

    </main>
  )
}

export default Agenda