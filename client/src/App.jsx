import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Gallery from './pages/Gallery'
import Courses from './pages/Courses'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='courses' element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App
