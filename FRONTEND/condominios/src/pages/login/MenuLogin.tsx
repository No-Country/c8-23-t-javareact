import { login, newAccount } from '../../assets/iconslogin/index'
export default function MenuLogin() {
    return (
        <div className='bg-white rounded-2xl px-6 py-4'>
            <h2 className='text-center mb-8'>LIVETO</h2>
            <h3>Te damos la bienvenida!</h3>
            <p className='mt-4 mb-8'>Como empezamos?</p>
            <div className='grid grid-cols-2 gap-x-8'>
                <div className=' flex  flex-col items-center p-6 text-center rounded-2xl border border-blue cursor-pointer'>
                    <img className='w-16 mb-4' src={newAccount} alt="login icon" />
                    <p>Registrarme por primera vez</p>
                </div>
                <div className=' flex flex-col items-center p-6 text-center rounded-2xl border border-blue cursor-pointer'>
                    <img className='w-16 mb-4' src={login} alt='login icon' />
                    <p>Ingresar a mi cuenta</p>
                </div>
            </div>
        </div>
    )
}
