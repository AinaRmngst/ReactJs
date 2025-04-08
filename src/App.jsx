import mbdslogo from './assets/Logo.png'
import './App.css'

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
function MainContent(){
  return(
    <content>
      <h3>Ici nous afficherons des information interressante</h3>
    </content>
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
  return (
    <>
    <div className='app-container'>
      <Header />

      <MainContent />

      <Footer />
    </div>
      
    </>
  )
}

export default App
