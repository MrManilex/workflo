import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Admin from '../Admin/Admin'
import Account from '../../components/Account/Account'
import Landing from '../Landing/Landing'
import Tickets from '../Tickets/Tickets'

import { supabase } from '../../config/supabaseClient'
import { useEffect, useState } from 'react'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <Navbar session={session} supabase={supabase} />
      {/* routes */}
      <Routes>

        <Route path='/' element={!session ? <Landing supabase={supabase} /> : <Account supabase={supabase} session={session} />} />

        {/* correct path for viewing ticket... /:project/:ticketId */}
        <Route path='/tickets' element={<Tickets supabase={supabase} />} />
        <Route path='/projects' element={session ? <Admin supabase={supabase} /> : <Landing supabase={supabase} />} />

        {/* admin routes  */}
        <Route path='/admin/projects' element={session ? <Admin supabase={supabase} /> : <Landing supabase={supabase} />} />
      </Routes>
    </>
  )
}

export default App
