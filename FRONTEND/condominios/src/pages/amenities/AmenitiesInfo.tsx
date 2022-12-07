
import { swim, dumbbell, grill, tennis, yoga } from '../../assets/amenitiesIcons/index'
export default function AmenitiesInfo() {
    return (
        <div className='1048:px-36'>

            <div className='bg-white rounded-2xl py-4 px-6'>
                <h2 className='mb-3 font-semibold text-2xl'>Espacios comunes</h2>
                <div className=' flex max-w-screen items-center gap-8 justify-between overflow-x-scroll py-5'>
                    <div className='bg-background-swimming min-w-[6rem] h-28 flex flex-col justify-center items-center rounded-md p-5'>
                        <img className='bg-blue-swimming rounded-md w-10 p-1' src={swim} alt="amenitie icon" />
                        <p className='text-sm'>Piscina</p>
                    </div>
                    <div className='bg-background-dumbbell min-w-[6rem] h-28 flex flex-col justify-center items-center rounded-md p-5'>

                        <img className='bg-background-blue w-10 p-1 rounded-md' src={dumbbell} alt="amenitie icon" />

                        <p className='text-sm'>Gimnasio</p>
                    </div>
                    <div className='bg-background-quincho rounded-xl min-w-[6rem] h-28 flex flex-col justify-center items-center'>

                        <img className='bg-green-quincho w-10 rounded-md p-1' src={grill} alt="amenitie icon" />

                        <p className='text-sm'>Quincho</p>
                    </div>
                    <div className='bg-background-tennis  rounded-xl min-w-[6rem] h-28 flex flex-col justify-center items-center'>
                        <img className='bg-green-tennis p-1 rounded-md w-10' src={tennis} alt="amenitie icon" />
                        <p className='text-sm'>Cancha tennis</p>
                    </div>
                    <div className='bg-background-sauna rounded-xl min-w-[6rem] h-28 flex flex-col justify-center items-center p-5'>

                        <img className='w-10 bg-sauna p-1 rounded-md' src={yoga} alt="amenitie icon" />

                        <p className='text-sm'>Saona</p>
                    </div>
                </div>
                <div>
                    <h2 className='my-3 font-bold text-base'>Reglas de uso</h2>
                    <p className='font-normal text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis earum, totam voluptatibus saepe amet non tenetur consectetur eveniet nesciunt.</p>
                    <p className='mt-3 font-normal text-sm  text-background-blue'>Descargar reglamento</p>
                </div>

            </div>
            <div className='mt-6 bg-white rounded-2xl py-4 px-6'>
                <h2 className='font-semibold text-2xl'>Mis reservas</h2>
            </div>
        </div>


    )
}
