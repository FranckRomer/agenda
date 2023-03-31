import Link from 'next/link'
import { useEffect, useState } from 'react'
import ModoOscuro from '@/components/ModoOscuro'
import Button from '@/components/Button'
// import Image from 'next/image'
// import axios from 'axios';

const Header = () => {
    const [logeo, setLogeo] = useState(false)

    const navigations = [
        { label: 'Inicio', path: '/', },
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
        <header className=' px-12 h-12 flex item-center justify-between mt-4  z-10 '>

            <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                </svg>

                <h3 className='font-semibold text-xl'>
                    Contactos
                </h3>
            </div>

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
                                {/* {nav.label} */}
                                <Button className='bg-gray-200 dark:bg-gray-700'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                    </svg>
                                </Button>
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
