import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import './App.css'
import supabase from '../../config/supabaseClient'

function App() {

  console.log(supabase)

  return (
    <>
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
