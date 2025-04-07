import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mbdslogo from './assets/Logo.png'
import './App.css'

function Header(){
  return(
    <div>
        <a href="https://univ-cotedazur.eu" target="_blank">
          <img src={mbdslogo} className="logo mbds" alt="ITU MBDS" />
        </a>
        <h1>Introduction à React</h1>
        <h3>A la découverte des premières notions de React</h3>
      </div>
  )
}
function MainContent(){
  return(
    <div>
      <h3>Ici nous afficherons des information interressante</h3>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />

      <MainContent />
    </>
  )
}

export default App
