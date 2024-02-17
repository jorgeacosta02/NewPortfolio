import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import AboutPage from "./pages/aboutPage/AboutPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  )
}

export default App
