import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import data from './data/data.json'
import Menu from './components/Menu'

function App() {
  const randomNote = data[Math.floor(Math.random()*data.length)];
  return (
    <div className='app-container'>
      <Menu />
      
      <Header />

      <MainContent note={randomNote} />

      <Footer />

    </div>
  )
}

export default App
