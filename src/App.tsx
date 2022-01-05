import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Alumno } from './components/Alumno'
import { Fieldset } from './components/Fieldset'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InfoPage } from './components/InfoPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Alumno />
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="evaluacion/:profesorId" element={<Fieldset />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
