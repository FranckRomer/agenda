import React, { useEffect, useState } from 'react'
import Button from './Button'
import Link from 'next/link'
import axios from 'axios';
import Tarjeta from './Tarjeta';

const ListaTareas = () => {
    const [datos, setDatos] = useState([
        { nombre: "", apodo: "", _id: "", fecha: "" }
    ])
    const [error, setError] = useState(false)
    const [eliminarDato, setEliminarDato] = useState({
        identificador: "",
    })

    useEffect(() => {
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
                const datosPerdidos = [{ nombre: "", apodo: "", _id: "" , fecha:""}]
                setDatos(datosPerdidos)
            }, 100);
        }
    }
    const EliminarDato = async (tarea: object) => {
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
            <h1 className='text-3xl font-semibold text-center m-4'>
                Contactos 📅
            </h1>

            {datos[0].nombre == "" ?
                <Tarjeta className='text-center'>
                    <h1 className=' text-2xl'>
                        Aun no tienes contactos
                    </h1>
                    <p className='text-xl'>Crea tu primer contacto 🤟</p>
                    <Link href={'/addContact'} className='text-blue-500 m-4 text-lg '>Nuevo contacto</Link>
                </Tarjeta>
                :
                <div className='gallery'>
                    {datos.map((dato, index) => (
                        <Tarjeta key={index} className="grid p-4 ">
                            <h1 className='text-2xl font-semibold '>
                                {dato.nombre}
                            </h1>
                            <p>Apodo: <span className='text-red-500 dark:text-blue-500'>{dato.apodo}</span></p>
                            <p>Cumpleaños: <span className='text-red-500 dark:text-blue-500'>{dato.fecha}</span></p>                            
                            <div className='flex justify-between mt-4 items-center'>
                                <Button onClick={() => EliminarDato(dato)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                    </svg>
                                </Button>
                                {/* <Link href={"/"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </Link> */}
                            </div>
                        </Tarjeta>
                    ))}
                    <div></div>
                </div>
            }        
        </Tarjeta>
    )
}

export default ListaTareas