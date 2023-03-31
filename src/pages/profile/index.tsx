import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import MsgError from '@/components/MsgError';
import Button from '@/components/Button';
import Link from 'next/link';

const Profile = () => {
    const [user, setUser] = useState({
        email: "",
        username: "",
    });
    const [error, setError] = useState(false)

    const router = useRouter();

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const profile = await axios.get("/api/profile");
            setUser(profile.data);
            console.log(profile.data);

        } catch (error) {
            setError(false)
            setTimeout(() => {
                setError(true)
            }, 100);
        }
    };

    const logout = async () => {
        try {
            await axios.get("/api/auth/logout");
        } catch (error) {
            setError(false)
            setTimeout(() => {
                setError(true)
            }, 100);
        }
        // router.reload()
        router.push("/login");
    };

    return (
        <div className='grid m-auto w-fit p-12 gap-y-12 mt-12 bg-white/70 dark:bg-black/70 border dark:border-white/20 dark:text-white shadow-lg shadow-black dark:shadow-white/20 rounded-xl'>
            {error ?
                <div className='grid gap-y-4 text-center  p-4 m-4 rounded-xl'>
                    <MsgError
                        titulo="Error de Perfil"
                        msg="No has iniciado sesion"
                    ></MsgError>
                    <Link href={"/login"} className='text-blue-500 text-2xl font-semibold  hover:scale-110'>
                        Iniciar Sesion
                    </Link>
                    <Link href={"/register"} className='text-green-500 hover:scale-110'>
                        Crear Usuario
                    </Link>
                </div>
                :
                <div className='grid gap-y-8 mt-12'>
                    <h1 className='text-center text-4xl font-semibold'>
                        Pagina de perfil
                    </h1>
                    <div>
                        <h2 className='text-center text-xl font-semibold'>
                            Bienvenido <span className='text-blue-500'>
                                {user.username}
                            </span>
                        </h2>
                        <div className='flex justify-around my-12'>
                            {/* <Button onClick={() => getProfile()}>profile</Button> */}
                            <Button onClick={() => logout()} className='border'>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile