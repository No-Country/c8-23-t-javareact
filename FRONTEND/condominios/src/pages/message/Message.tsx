export default function Message() {
    return (
        <div className='bg-white py-4 px-6 flex flex-col gap-y-4 rounded-2xl border-none'>
            <h2 className="mb-4 font-semibold text-2xl">Mensajes</h2>
            <div className=' flex flex-col gap-y-5'>
                <div className='border-2 rounded-2xl border-solid border-gray p-2 pl-4'>
                    <h3 className="mb-1 font-normal text-sm">Administracion</h3>
                    <p className="font-normal text-sm">Lprimer mensaje de la Administracion, siguiente junta favor de confirmar asistencia</p>
                </div>
                <div className='border-2 rounded-2xl border-solid border-gray p-2 pl-4'>
                    <h3 className="mb-1 font-normal text-sm">Administracion</h3>
                    <p className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatem?</p>
                </div>
            </div>
            <span className="mt-4 block text-center font-normal text-medium2-blue text-sm">Ver todo</span>
        </div>

    )
}
