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
    <div className='text-black-navbar'>
      <div className='bg-white shadow-[0_0_0_100vmax_rgba(255,255,255,1)] clip-path'>
        <div className=' w-full flex justify-between flex-row-reverse py-2'>
          <h2 className="flex flex-row gap-4 text-center uppercase font-bold tracking-[4px] items-center">
            <RiBuilding4Line className='text-[2.5rem]' />
            liveto
          </h2>
          <button onClick={openMenu} className='bg-blue-400'><RiHome3Line className='text-[2.5rem]' /></button>
        </div>
      </div >
      <nav className={`bg-white w-full flex fixed h-[calc(100vh-56px)] flex-col justify-between overflow-auto list-none py-5  ${menuIsOpen ? 'right-0 ease-in-out duration-500' : 'right-full  ease-in-out duration-500'} `}>
        <ul className=' h-4/6 w-full flex flex-col items-center gap-y-8 pt-8'>
          <li>
            <Link
              to='/'
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl " onClick={openMenu}
            >
              <RiDashboardLine className='text-[2rem]' />
              Escritorio
            </Link>
          </li>
          <li>
            <Link
              to="/expenses"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiWallet2Line className='text-[2rem]' />
              Gastos y expensas
            </Link>
          </li>
          <li>
            <Link
              to="/amenities"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiCommunityFill className='text-[2rem]' />
              Espacios comunes
            </Link>
          </li>
          <li>
            <Link
              to="/message"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiMessage3Line className='text-[2rem]' />
              Mensajes
            </Link>
          </li>
          <li>
            <Link
              to="/request"
              className="flex items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
            >
              <RiAlertFill className='text-[2rem]' />
              Reportes
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="flex justify-center items-center gap-4 font-semibold hover:bg-background-blue hover:font-bold rounded-lg transition-colors text-2xl" onClick={openMenu}
          >
            <RiLogoutBoxLine className='text-[2rem]' />
            Salir de cuenta
          </Link>
        </div>
      </nav>
    </div >


  )
}
