import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import './App.css'

function App() {
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
