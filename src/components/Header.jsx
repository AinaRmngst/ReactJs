import mbdslogo from '../assets/Logo.png'

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

  export default Header;