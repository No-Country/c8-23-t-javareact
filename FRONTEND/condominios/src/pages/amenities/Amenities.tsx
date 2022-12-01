import { swim, dumbbell, grill, tennis, yoga } from '../../assets/amenitiesIcons/index'
export default function Amenities() {
    return (
        <div className="rounded-2xl border-none bg-white py-4 px-6">
            <h2 className='mb-4 font-semibold text-2xl'>Espacios comunes</h2>
            <div className=' grid justify-items-center grid-auto-fit-[6rem] gap-4 py-4'>
                <div className='bg-background-swimming w-24 h-28 flex flex-col justify-center items-center rounded-md p-5'>
                    <img className='bg-blue-swimming rounded-md w-10 p-1' src={swim} alt="amenitie icon" />
                    <p className='text-sm'>Piscina</p>
                </div>
                <div className='bg-background-dumbbell w-24 h-28 flex flex-col justify-center items-center rounded-md p-5'>

                    <img className='bg-background-blue w-10 p-1 rounded-md' src={dumbbell} alt="amenitie icon" />

                    <p className='text-sm'>Gimnasio</p>
                </div>
                <div className='bg-background-quincho rounded-xl w-24 h-28 flex flex-col justify-center items-center'>

                    <img className='bg-green-quincho w-10 rounded-md p-1' src={grill} alt="amenitie icon" />

                    <p className='text-sm'>Quincho</p>
                </div>
                <div className='bg-background-tennis  rounded-xl w-24 h-28 flex flex-col justify-center items-center'>
                    <img className='bg-green-tennis p-1 rounded-md w-10' src={tennis} alt="amenitie icon" />
                    <p className='text-sm'>Cancha tennis</p>
                </div>
                <div className='bg-background-sauna rounded-xl w-24 h-28 flex flex-col justify-center items-center p-5'>

                    <img className='w-10 bg-sauna p-1 rounded-md' src={yoga} alt="amenitie icon" />

                    <p className='text-sm'>Saona</p>
                </div>
            </div>
        </div>
    )
}
