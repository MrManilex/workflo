import { Route, Routes } from 'react-router-dom'
import Landing from '../Landing/Landing'
import './App.css'

function App() {
  return (
    <>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
