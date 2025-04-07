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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
