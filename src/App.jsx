import { useState } from 'react'
import MainContent from './components/mainContent.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContent texto="Contenido 1"/>
    </>
  )
}

export default App
