import React from 'react'
import FormLogin from './FormLogin'
import Link from 'next/link'
import Tarjeta from './Tarjeta'

const Login = () => {
    return (
        <Tarjeta>
            {/* <div className='grid m-auto w-fit p-12  bg-white/30 dark:bg-black/40 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'> */}
                <h1 className='text-center text-4xl font-semibold my-12'>
                    Bienvenido a tu <span className='text-blue-500'>{'"Agenda"'}</span>
                </h1>
                <h2 className='text-2xl text-center font-sans '>
                    {'"Inicia Sesion"'}
                </h2>

                {/* AQUI VA EL LOGIN */}
                <FormLogin></FormLogin>

                <div className='flex gap-4 justify-center m-4 text-xl'>
                    <h3>
                        No tienes cuenta?
                    </h3>
                    <Link href={"/register"} className='text-blue-500 border-b border-blue-500'>
                        Crear cuenta
                    </Link>
                </div>
            {/* </div> */}
        </Tarjeta>
    )
}

export default Login