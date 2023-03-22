import axios from 'axios'
import MsgError from './MsgError'
import Button from './Button'
import { useState } from 'react'
import { useRouter } from 'next/router'

const FormLogin = () => {
    const [Credencials, setCredencials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)
    const Formulario = [
        { label: "Correo: ", name: "email", type: "email", placeholder: "Correo electronico", },
        { label: "Contraseña: ", name: "password", type: "password", placeholder: "Contraseña", },
    ]


    const router = useRouter()

    const handleChange = (e: any) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(Credencials)
        try {
            const response = await axios.post('/api/auth/login', Credencials)
            console.log(response)
            if (response.status === 200) {
                // router.reload()
                router.push('/agenda')
            }
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);
        }
    }
    //
    return (
        <>
            {error ?
                <MsgError
                    titulo="Error de Inicio"
                    msg="El usuario o contraseña no son correctos"
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
                        Iniciar
                    </Button>
                </div>
            </form>
        </>
    )
}

export default FormLogin