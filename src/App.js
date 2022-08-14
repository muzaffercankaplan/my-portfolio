import HomePage from './Pages/HomePage'
import {BrowserRouter, Route,Routes } from "react-router-dom"
import ProjectDetails from './Pages/ProjectDetails'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route  path='/Details/:id' element= {<ProjectDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
