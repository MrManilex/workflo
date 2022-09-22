import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Admin from '../Admin/Admin'
import Landing from '../Landing/Landing'
import Tickets from '../Tickets/Tickets'

function App() {
  return (
    <>
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* correct path for viewing ticket... /:project/:ticketId */}
        <Route path='/tickets' element={<Tickets />} />

        {/* admin routes  */}
        <Route path='/admin/login-signup' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
