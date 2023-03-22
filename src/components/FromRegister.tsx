import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import MsgError from './MsgError'
import Button from './Button'

const FromRegister = () => {
    const [Credencials, setCredencials] = React.useState({
        email: '',
        password: '',
        re_password: '',
        username: '',
    })
    const [error, setError] = useState(false)
    const Formulario = [
        { label: "Correo: ", name: "email", type: "email", placeholder: "Correo electronico", },
        { label: "Contraseña: ", name: "password", type: "password", placeholder: "Contraseña", },
        { label: "Repetir contraseña: ", name: "re_password", type: "password", placeholder: "Repetir contraseña", },
        { label: "Nombre de usuario: ", name: "username", type: "text", placeholder: "Nombre de Usuario", },
        // {label: "Empresa " , name:"company", type:"text", placeholder:"Correo electronico", },
    ]

    const router = useRouter()

    const handleChange = (e: any) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
        setError(false)
    }
    const handleSubmit = async (e: any) => {
        setError(false)
        e.preventDefault()
        console.log(Credencials)
        if (Credencials.password === Credencials.re_password) {
            try {
                const response = await axios.post('/api/auth/register', Credencials)
                console.log(response)

                if (response.status === 201) {
                    router.push('/login')
                }
            } catch (error) {
                console.log(error);
                setError(false)
                setTimeout(() => {
                    setError(true)
                }, 100);
            }
        }
        else {
            setError(false)
            setTimeout(() => {
                setError(true)
            }, 100);
        }
    }


    // ?-----------------------------------------------------------------------
    return (
        <>
            {error ?
                <MsgError
                    titulo="Error de Registro"
                    msg="El usuario ya esta creado "
                ></MsgError>
                : ""
            }

            <form onSubmit={handleSubmit} className="mx-auto my-4 ">
                {Formulario.map((form, index) => (
                    <div key={index} className="flex gap-4 m-4 justify-between ">
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
                        className='mx-auto my-8 border border-black dark:border-gray-50'
                    >
                        Crear Usuario
                    </Button>
                </div>
            </form>
        </>
    )
}

export default FromRegister