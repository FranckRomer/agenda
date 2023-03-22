import axios from 'axios'
import MsgError from './MsgError'
import Button from './Button'
import { useState } from 'react'


const FormCreateToDo = () => {
    const [Credencials, setCredencials] = useState({
        Titulo: '',
        fecha: '',
        descripcion:'',
    })
    const [error, setError] = useState(false)
    const Formulario = [
        { label: "Tarea: ", name: "titulo", type: "text", placeholder: "Titulo", },
        { label: "Fecha: ", name: "fecha", type: "date", placeholder: "Fecha", },
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
        try {
            const response = await axios.post('/api/methods/create', Credencials)
            console.log(response)            
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);
        }
    }

    // --------------------------------------------------------------------------------------
    return (
        <>
            {error ?
                <MsgError
                    titulo="Error de Peticion"
                    msg="Ah ocurrido algo inprevisto"
                ></MsgError>
                : ""
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
        </>
    )
}

export default FormCreateToDo