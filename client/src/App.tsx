import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import AboutPage from "./pages/aboutPage/AboutPage"
import ProjectsPage from "./pages/projectsPage/ProjectsPage"
import SkillsPage from "./pages/skillsPage/SkillsPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
