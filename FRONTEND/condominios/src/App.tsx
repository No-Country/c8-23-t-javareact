import './App.css';
import { Request, Home, Expenses, Amenities, Message, Login } from './pages/index';
import { Sidebar, UserInfo } from './components/index'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './reduxHooks/reduxHooks';
import { increment } from './store/slices/counter.slice';
import ExpensesHistory from './pages/expenses/ExpensesHistory';
import AmenitiesInfo from './pages/amenities/AmenitiesInfo';
import MessageHistory from './pages/message/MessageHistory';
import MenuLogin from './pages/login/MenuLogin';
import NewUser from './pages/login/NewUser';



function App() {
  // 450:px-12 sm:px-24
  return (
    <HashRouter>
      {/* px-6 */}
      <div className="font-Poppins px-6 450:px-12 sm:px-[20%] 1048:px-0 1048:grid 1048:grid-cols-5">
        <Sidebar />
        {/* pb-8 */}
        <div className='flex flex-col  pb-8 1048:col-span-4'>
          <UserInfo />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/request' element={<Request />} />
            <Route path='/expenses' element={<ExpensesHistory />} />
            <Route path='/amenities' element={<AmenitiesInfo />} />
            <Route path='/message' element={<MessageHistory />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
