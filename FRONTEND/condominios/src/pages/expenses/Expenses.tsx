
export default function Expenses() {
    return (
        <div>
            <div className="bg-white py-4 px-6 flex flex-col gap-y-4 rounded-2xl border-none md:h-[100%]">
                <div>
                    <h3 className='font-semibold text-2xl'>Estado de la cuenta
                    </h3>
                    <span className='font-medium text-base'>saldo</span>
                    <h2 className='font-semibold text-5xl'>-$5.840</h2>
                </div>
                <div className=" flex justify-between">
                    <div className="bg-light-blue p-3 rounded-md">
                        <p className='font-medium text-lg'>Expensas totales</p>
                        <p className="text-medium-blue font-semibold text-3xl">$25.360</p>
                    </div>
                    <p className='font-bold bg-participacion-gray h-min p-1 text-xs rounded-md'>Participacion:14%</p>
                </div>
                <div className=" flex justify-between px-3 font-normal text-sm bg-light-blue text-vencimiento-gray">
                    <p>Vencimiento</p>
                    <p>10/01/2022</p>
                </div>
                <p className="text-center font-normal text-sm text-medium2-blue">Ver expensas</p>
            </div>

        </div>

    )
}
