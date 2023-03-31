import Button from '@/components/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Login from '@/components/Login'
import axios from 'axios';
// import Image from 'next/image';
import ListaTareas from '@/components/ListaTareas';
// const inter = Inter({ subsets: ['latin'] })

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

      <main className='grid mx-auto my-4 md:grid-cols-2 '>


        <section className='grid text-center gap-y-4 m-auto'>
          <h1 className='font-serif font-semibold text-4xl'>
            Mi Agenda
          </h1>
          <p className='text-xl'>
            Crea y administra tus tareas en esta agenda gratuita.
          </p>
          <Link href={'/agenda'} >
            <Button className='bg-blue-600 text-white px-6 m-auto'>Crear Agenda</Button>
          </Link>
        </section>

        <section className='grid m-auto'>
          {logeo ?
            <ListaTareas></ListaTareas>
            :
            <Login></Login>
          }
        </section>


      </main>
    </>
  )
}
