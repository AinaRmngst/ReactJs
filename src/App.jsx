import mbdslogo from './assets/Logo.png'
import './App.css'
import MainContent from './components/MainContent'
import data from './data/data.json'

function Header(){
  return(
    <header>
        <a href="https://univ-cotedazur.eu" target="_blank">
          <img src={mbdslogo} className="logo mbds" alt="ITU MBDS" />
        </a>
        <h1>Introduction à React</h1>
        <h3>A la découverte des premières notions de React</h3>
      </header>
  )
}
function Footer(){
  return(
    <footer>
      <p>© 2025 - Heriaina.RAMANGASATA, Tous droits réservés.</p>
    </footer>
  )   
}
function App() {
  const randomNote = data[Math.floor(Math.random()*data.length)];
  return (
    <div className='app-container'>
      <Header />

      <MainContent note={randomNote} />

      <Footer />

    </div>
  )
}

export default App
