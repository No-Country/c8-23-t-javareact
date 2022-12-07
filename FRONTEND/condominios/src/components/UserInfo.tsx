import { RiNotification3Fill } from 'react-icons/ri'

export default function UserInfo() {
    return (
        <div className="font-Poppins w-full flex justify-between items-center py-4 1048:px-32">
            <h1 className='text-black-gretting-name  text-3xl'><span className='text-black-gretting text-xl'>Buen dia,</span> Emiliano</h1>
            <div className="flex justify-between items-center p-2">
                <RiNotification3Fill className='text-xl mx-2' />
                <select className='rounded-lg' name="house">
                    <option value="house1">House 1</option>
                    <option value="house2">House 2</option>
                </select>
            </div>
        </div>
    )
}
