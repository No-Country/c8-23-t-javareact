import './App.css';
import { Request, Home, Expenses, Amenities, Message, Login } from './pages/index';
import { Sidebar, UserInfo } from './components/index'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './reduxHooks/reduxHooks';
import { increment } from './store/slices/counter.slice';
import ExpensesHistory from './pages/expenses/ExpensesHistory';
import AmenitiesInfo from './pages/amenities/AmenitiesInfo';



function App() {

  return (
    <HashRouter>
      <div className="px-6 font-Poppins">
        <Sidebar />
        <div className='flex flex-col pb-8'>
          <UserInfo />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/request' element={<Request />} />
            <Route path='/expenses' element={<ExpensesHistory />} />
            <Route path='/amenities' element={<AmenitiesInfo />} />
            <Route path='/message' element={<Message />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
