import { useState } from 'react';
import {
  RiBuilding4Line,
  RiDashboardLine,
  RiMessage3Line,
  RiWallet2Line,
  RiCommunityFill,
  RiAlertFill,
  RiLogoutBoxLine,
  RiHome3Line,
  RiHome3Fill
} from 'react-icons/ri';

// box-shadow: 0 0 0 100vmax var(--secondary);
//   clip-path: inset(0 -100vmax);
import { Link, useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    if (!menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }


  return (
    <div className='text-black-navbar '>
      <div className='bg-white shadow-[0_0_0_100vmax_rgba(255,255,255,1)] clip-path 1048:hidden'>
        <div className='w-full flex justify-between flex-row-reverse py-2 '>
          <h2 className="flex flex-row gap-4 text-center uppercase font-bold tracking-[4px] items-center">
            <RiBuilding4Line className='text-[2.5rem]' />
            liveto
          </h2>
          <button onClick={openMenu} className='bg-blue-400 '><RiHome3Line className='text-[2.5rem]' /></button>
        </div>
      </div >
      <nav className={`bg-white w-full flex fixed h-screen flex-col justify-between overflow-auto list-none ${menuIsOpen ? 'right-0 ease-in-out duration-500' : 'right-full  ease-in-out duration-500 '} top-0 1048:relative 1048:right-0 `}>
        <div className='w-full flex justify-between flex-row-reverse px-6 450:px-12 sm:px-[20%] py-2 1048:justify-center'>
          <h2 className="flex flex-row gap-4 text-center uppercase font-bold tracking-[4px] items-center">
            <RiBuilding4Line className='text-[2.5rem]' />
            liveto
          </h2>
          <button onClick={openMenu} className='bg-blue-400 1048:hidden '><RiHome3Line className='text-[2.5rem]' /></button>
        </div>
        <ul className=' h-4/6 flex items-center flex-col gap-8 py-8 px-4 justify-between 1048:items-start'>
          <li>
            <Link className="flex items-center font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl"
              to='/'
              onClick={openMenu}
            >
              <RiDashboardLine className='mx-6 text-[2rem]' />
              <p>Escritorio</p>
            </Link>
          </li>
          <li>
            <Link
              to="/expenses"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiWallet2Line className='mx-6 text-[2rem] ' />
              Gastos y expensas
            </Link>
          </li>
          <li>
            <Link
              to="/amenities"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiCommunityFill className='mx-6 text-[2rem]' />
              Espacios comunes
            </Link>
          </li>
          <li>
            <Link
              to="/message"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiMessage3Line className='mx-6 text-[2rem]' />
              Mensajes
            </Link>
          </li>
          <li>
            <Link
              to="/request"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiAlertFill className='mx-6 text-[2rem]' />
              Reportes
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="flex justify-center items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl px-4 1048:justify-start" onClick={openMenu}
          >
            <RiLogoutBoxLine className='mx-6 text-[2rem]' />
            Salir de cuenta
          </Link>
        </div>
      </nav>
    </div >


  )
}
