import Link from 'next/link'
import { useEffect, useState } from 'react'
import ModoOscuro from '@/components/ModoOscuro'
import Button from '@/components/Button'
import Image from 'next/image'
// import axios from 'axios';

const Header = () => {
    const [menu, setMenu] = useState(false)

    const navigations = [
        // { label: 'Inicio', path: '/', svg:"svgs/home.svg"},
        { label: 'Agenda', path: '/agenda', svg: "svgs/agenda.svg" },
        { label: 'Agregar Contacto', path: '/addContact', svg: "svgs/add_user.svg" },
        { label: 'Usuario', path: '/profile', svg: "svgs/user.svg" },
    ]


    return (
        <header className=' px-4 h-12 flex item-center justify-between mt-4 '>

            <Link href={"/"} className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>

                    <h3 className='font-semibold text-xl'>
                        Contactos
                    </h3>
                </div>

                {/* <div className='hidden md:block '>|</div> */}

            </Link>

            <div className='flex gap-8 items-center'>
                <div className=' gap-8 items-center hidden md:flex'>

                    <ul className='flex gap-8 items-center' >
                        {navigations.map((nav, index) => (
                            <Link
                                href={nav.path}
                                key={index}
                                className='flex gap-1 items-center font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'
                            >
                                {/* <Image
                                    className='dark:invert'
                                    src={nav.svg}
                                    alt="Home"
                                    width={25}
                                    height={25}
                                /> */}
                                <h3 className='hidden md:block '>
                                    {nav.label}
                                </h3>
                            </Link>
                        ))}
                    </ul>
                </div>
                {/* <Link href="/profile" className=' hidden md:flex gap-1 items-center font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'>
                    <Image
                        className='dark:invert'
                        src="/svgs/user.svg"
                        alt="Home"
                        width={25}
                        height={25}
                    />
                    <h3 className='hidden md:block'>Usuario</h3>
                </Link> */}

                <ModoOscuro></ModoOscuro>

                <Button className='bg-gray-200 dark:bg-gray-600  md:hidden' onClick={() => setMenu(!menu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </Button>
            </div>

            {menu ?
                <>
                    <div className='absolute top-0 left-0 w-screen h-screen bg-white/10 dark:bg-black/10' onClick={() => setMenu(false)}></div>
                    <div className='absolute top-2 right-0 mx-12 mt-16 w-6 h-6 bg-white dark:bg-black border border-neutral-800 dark:border-neutral-300 rounded-sm rotate-45 '></div>
                    <div className='absolute top-0 right-0 mx-10 mt-20 p-6 bg-white dark:bg-black rounded-md z-20 border border-neutral-800 dark:border-neutral-300'>
                        <ul className='grid gap-8 items-center' >
                            {navigations.map((nav, index) => (
                                <Link
                                    href={nav.path}
                                    key={index}
                                    className='flex gap-4 items-center font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'
                                >
                                    <Image
                                        className='dark:invert'
                                        src={nav.svg}
                                        alt="Home"
                                        width={25}
                                        height={25}
                                    />
                                    <h3 >
                                        {nav.label}
                                    </h3>
                                </Link>
                            ))}

                            <hr />

                            <Link href="/profile" className=' flex gap-4 items-center font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-500'>
                                {/* <div className='  items-center hidden md:flex'> */}
                                <Image
                                    className='dark:invert'
                                    src="/svgs/user.svg"
                                    alt="Home"
                                    width={25}
                                    height={25}
                                />
                                <h3 className=''>Usuario</h3>
                                {/* </div> */}

                            </Link>
                        </ul>
                    </div>
                </>
                :
                ""
            }


            {/* <Image src="/svgs/home.svg" alt="Home" height={30} width={30} /> */}


        </header>
    )
}

export default Header
