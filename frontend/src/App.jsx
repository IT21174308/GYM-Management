import { AuthProvider } from './pages/common/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import NotFound from './pages/common/NotFound'
import Dashboard from './pages/common/Dashboard';

import Home from './pages/admin/Home';
import ManagerScheduleView from './pages/admin/ManagerScheduleView';
import BookingRequest from './pages/admin/BookingRequest';


import ScheduleView from './pages/customer/scheduleView';
import MakeBooking from './pages/customer/MakeBooking'; 
import BookingDetails from './pages/customer/Bookings'; 


export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} />
      <AuthProvider>

        <Routes>

          {/*Common Routes */}
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />


          {/* Inside dashboard layout */}
          <Route path='/' element={<Dashboard />}>
            {/* <Route path='' element={<Guest />} /> */}

            {/*Manager Routes */}
            <Route path='home' element={<Home />} />
            <Route path='manager' element={<Home />} />

            <Route path='managerSchedule' element={<ManagerScheduleView />} />
            <Route path='bookingRequest' element={<BookingRequest />} />


            {/* Customer Routes */}
            {
              <>
              <Route path='/scheduleView' element={<ScheduleView />} />
              <Route path='/MakeBooking' element={<MakeBooking />} /> {/* Corrected path */}
              <Route path='/bookings' element={<BookingDetails />} /> 
              </>

              }

          </Route>
        </Routes>
        {/* <StickyFooter /> */}
      </AuthProvider>
    </BrowserRouter>
  )
}