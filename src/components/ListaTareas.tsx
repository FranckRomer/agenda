import React, { useEffect, useState } from 'react'
import Button from './Button'
// import Link from 'next/link'
import axios from 'axios';
import Tarjeta from './Tarjeta';

const ListaTareas = () => {
    const [datos, setDatos] = useState([
        { titulo: "", fecha: "", _id: "" }
    ])
    const [error, setError] = useState(false)
    const [eliminarDato, setEliminarDato] = useState({
        identificador: "",
    })

    useEffect(() => {
        // getProfile()
        ObtenerDatos()
    })

    const ObtenerDatos = async () => {
        try {
            const tareas = await axios.get("/api/methods/find");
            setDatos(tareas.data)
            // console.log(tareas.data);
        } catch (error) {
            setError(false)
            setTimeout(() => {
                setError(true)
                const datosPerdidos = [{ titulo: "", fecha: "", _id: "" }]
                setDatos(datosPerdidos)
            }, 100);
        }
    }
    const EliminarDato = async (tarea: object) => {
        // tarea.preventDefault()

        try {
            await axios.post('/api/methods/delete', tarea);
            // setDatos(tareas.data)
            // console.log(tareas.data);
            ObtenerDatos()
        } catch (error) {
            setError(false)
            setTimeout(() => {
                setError(true)
            }, 100);
        }
    }
    //
    return (
        <Tarjeta>

            {/* <section className='max-h-75vh overflow-y-auto grid  w-fit p-12  bg-white/30 dark:bg-black/40 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'> */}
            <h1 className='text-3xl font-semibold text-center m-4'>
                Tareas 📅
            </h1>

            {datos[0].titulo == "" ?
                <h1 className='text-center text-xl'>
                    No hay Tareas por completar 🤟
                </h1>
                :
                <>
                    {datos.map((dato, index) => (
                        <div className='grid grid-60-40 m-auto w-fit p-12 my-4 bg-white/30 dark:bg-black/40 border border-black dark:border-white/20  rounded-xl' key={index}>
                            <div>
                                <h1 className='text-2xl font-semibold'>
                                    {dato.titulo}
                                </h1>
                                <p>Fecha: <span className='text-red-500 dark:text-blue-500'>{dato.fecha}</span></p>
                            </div>

                            <div className='grid ml-auto gap-y-4 ' >
                                <div className='flex gap-4'>
                                    <Button className='border-4 w-4 h-4 bg-green-500 border-green-500'> </Button>
                                    <Button
                                        className='border-4 w-4 h-4 bg-red-500 border-red-500'
                                        onClick={() => EliminarDato(dato)}
                                    > </Button>
                                </div>
                                {/* <div className='flex justify-center'>
                                    <Link href={"/"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </>
            }

            {/* </section> */}
        </Tarjeta>
    )
}

export default ListaTareas