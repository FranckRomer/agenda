import axios from 'axios'
import MsgError from './MsgError'
import Button from './Button'
import { useState } from 'react'
import Tarjeta from './Tarjeta'

const FormCreateToDo = () => {
    const [confirmacion, setConfirmacion] = useState(false)
    const [error, setError] = useState(false)
    const [erroTitulo, setErrorTitulo] = useState("")
    const [Credencials, setCredencials] = useState({
        Titulo: '',
        fecha: '',
        descripcion: '',
        nombre:'',
    })
    const Formulario = [
        { label: "Nombre: ", name: "nombre", type: "text", placeholder: "Nombre", },
        { label: "Apodo: ", name: "apodo", type: "text", placeholder: "Apodo", },
        { label: "Cumpleaños: ", name: "fecha", type: "date", placeholder: "Fecha", },
        { label: "Descripcion: ", name: "descripcion", type: "text", placeholder: "Descripcion", },
    ]

    const handleChange = (e: any) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // console.log(Credencials)
        if (Credencials.nombre === "") {
            setError(false)
            console.log(error);
            setTimeout(() => {
                // console.log("1 Segundo esperado")
                setErrorTitulo("No puede crear un usuario vacio")
                setError(true)
            }, 150);

        } 
        else{
            try {
                const response = await axios.post('/api/methods/create', Credencials)
                console.log(response)
                setConfirmacion(true)
    
            } catch (error) {
                setError(false)
                console.log(error);
                setTimeout(() => {
                    // console.log("1 Segundo esperado")
                    setErrorTitulo("Ah ocurrido algo inprevisto, vuelva a intentarlo")
                    setError(true)
                }, 150);
            }
        }
    }

    // --------------------------------------------------------------------------------------
    return (
        <>
            {
                error ?
                    <MsgError
                        titulo="Error de Peticion"
                        msg={erroTitulo}
                    ></MsgError>
                    : ""
            }
            {
                confirmacion ?
                    <div className='absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto bg-white/90 dark:bg-black/90 rounded-xl p-12 items-center grid gap-y-4 z-30'>
                        <h1 className='text-3xl text-green-500 font-semibold'>¡ Contacto Creado !</h1>
                        <Button className='border border-black dark:border-white m-4' onClick={()=>setConfirmacion(false)}>Aceptar</Button>
                    </div>
                    :
                    ""
            }

            <form onSubmit={handleSubmit}>
                {Formulario.map((form, index) => (
                    <div key={index} className='flex gap-4 m-4 justify-between'>
                        <p>{form.label}</p>
                        <input
                            name={form.name}
                            type={form.type}
                            placeholder={form.placeholder}
                            onChange={handleChange}
                            required
                            className='bg-transparent border-b border-black dark:border-white'
                        />
                    </div>
                ))}


                <div className='flex justify-center'>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        className='mx-auto my-2 border border-black dark:border-gray-50'
                    >
                        Crear Tarea
                    </Button>
                </div>
            </form>
                    {/* <Button onClick={()=>setConfirmacion(true)}>Aceptar</Button> */}
        </>
    )
}

export default FormCreateToDo