import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import { Route,Routes } from "react-router-dom"


function App() {


  return (
    <section className="main">
      <Navbar></Navbar>
      <section className="content-body">
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
          </Routes>
      </section>
    </section>
  )
}

export default App
