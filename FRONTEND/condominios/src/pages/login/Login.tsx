import { RiBuilding4Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { liveto } from '../../assets/iconslogin/index'
export default function Login() {
    const navigate = useNavigate()
    const login = () => {
        navigate('/home')
    }
    return (
        <div className='1048:px-24 1048:flex 1048:justify-center 1048:h-3/4'>
            <div className='hidden 1048:block'>
                <img className='h-full' src={liveto} alt="" />
            </div>
            <div className='bg-white rounded-r-2xl p-8'>
                <h2 className="flex justify-center items-center gap-4  uppercase font-bold tracking-[4px]">
                    <RiBuilding4Line className='text-[2.5rem]' />
                    liveto
                </h2>
                <h3 className="mb-4">Log in</h3>
                <h3 className="mb-4">Ingresa a tu cuenta</h3>
                <form>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email">Correo electronico</label>
                        <input className="bg-medium-gray rounded-md" type="email" placeholder="enter your email" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password">Cotraseña</label>
                        <input className="bg-medium-gray rounded-md" type="password" placeholder="********" />
                    </div>
                    <button onClick={login} className="text-center bg-blue-swimming w-full p-2 rounded-md" type="submit">Ingresar</button>
                </form>
            </div>

        </div>
    )
}
