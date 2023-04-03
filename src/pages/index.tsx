// import Button from '@/components/Button'
// import Link from 'next/link'
import { useEffect, useState } from 'react'
import Login from '@/components/Login'
import axios from 'axios';
import Tarjeta from '@/components/Tarjeta';
import IniciarSessionPrueba from '@/components/IniciarSessionPrueba';

export default function Home() {
  const [logeo, setLogeo] = useState(false)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      await axios.get("/api/profile");
      setLogeo(true)
    } catch (error) {
      setLogeo(false)
    }
  };


  return (
    <>

      <main className='grid my-8'>

        <section className='text-center'>
          <h1 className='text-4xl'>
            Guarda y administra tus contactos con
          </h1>
          <h1 className='text-5xl text-sky-500 font-bold m-4'>
            Mi Agenda
          </h1 >
          <p className='text-xl max-w-md mx-auto my-8 text-neutral-700 dark:text-neutral-400'>Este es un reto de desarrollo de <span className='text-indigo-500 font-semibold'>Agenda con login,</span> en donde puedes crear un usuario y administar tus contactos o puedes iniciar con un usuario de prueba </p>
        </section>

        {/* <hr /> */}

        <Tarjeta className='grid lg:grid-cols-2 my-12 '>

          <Tarjeta className='grid h-fit text-center gap-y-4 m-auto my-12'>
            <h1 className='font-serif font-semibold text-4xl text-blue-500 '>
              Usuario de prueba
            </h1>
            <p className='text-xl max-w-md m-4'>
              Con esta cuenta de prueba podras ver toda la pagina sin necesidad de crear un usuario. Por otra parte te invitamos a crear un usuario y experimentar la experiencia.
            </p>
            <IniciarSessionPrueba></IniciarSessionPrueba>
          </Tarjeta>

          <Login></Login>
          {/* <div className='grid m-auto'>
          </div> */}

        </Tarjeta>



      </main>
    </>
  )
}
