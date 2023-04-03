import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Button from './Button'

const IniciarSessionPrueba = () => {
    const router = useRouter()
    const handleSubmit = async () => {
        // e.preventDefault()
        console.log("SE OPRIMIO");
        
        const datos = {
            email: '',
            password: ''
        }
        try {
            const response = await axios.post('/api/auth/login', datos)
            console.log(response)
            if (response.status === 200) {
                // router.reload()
                router.push('/agenda')
            }
        } catch (error) {
            console.log(error);            
        }
    }
    return (
        <Button className='bg-blue-600 text-white px-6 m-auto' onClick={()=>handleSubmit()} >
            Iniciar Sesion de Prueba
        </Button>
    )
}

export default IniciarSessionPrueba