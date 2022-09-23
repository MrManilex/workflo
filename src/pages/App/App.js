import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Admin from '../Admin/Admin'
import Landing from '../Landing/Landing'
import Tickets from '../Tickets/Tickets'

import supabase from '../../config/supabaseClient'

function App() {
  return (
    <>
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path='/' element={<Landing supabase={supabase}/>} />
        {/* correct path for viewing ticket... /:project/:ticketId */}
        <Route path='/tickets' element={<Tickets />} />

        {/* admin routes  */}
        <Route path='/admin/login-signup' element={<Admin supabase={supabase}/>} />
      </Routes>
    </>
  )
}

export default App
