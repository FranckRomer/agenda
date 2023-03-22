import Link from 'next/link'
import { useEffect, useState } from 'react'
import ModoOscuro from '@/components/ModoOscuro'
// import axios from 'axios';

const Header = () => {
    const [logeo, setLogeo] = useState(false)

    const navigations = [
        { label: 'Inicio', path: '/' },
        { label: 'Agenda', path: '/agenda' },
    ]
    
    const login = [
        // { label: "Iniciar", path: "/login" },
        // { label: "Crear cuenta", path: "/register" },
        { label: 'Usuario', path: '/profile' },
    ]

    const getProfile = async () => {
        try {
            // const profile = await axios.get("/api/profile");
            // setUser(profile.data);
            // console.log(profile.data);

        } catch (error) {
            
        }
    };

    return (
        <header className=' px-12 h-12 flex item-center justify-between mt-4  z-10'>
            <div className='flex gap-8 items-center'>

                <ul className='flex gap-8 items-center' >
                    {navigations.map((nav, index) => (
                        <Link
                            href={nav.path}
                            key={index}
                            className='font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'
                        >
                            {nav.label}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flex gap-8 items-center'>
                {logeo ?
                    <Link
                        href="/profile"
                        className='font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'
                    >
                        Usuario
                    </Link>
                    :
                    <ul className='flex gap-8 ' >
                        {login.map((nav, index) => (
                            <Link
                                href={nav.path}
                                key={index}
                                className='font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </ul>

                }

                <ModoOscuro></ModoOscuro>
            </div>
        </header>
    )
}

export default Header
