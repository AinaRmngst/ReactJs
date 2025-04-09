import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Menu from './components/Menu'
import Notes from './components/items/Notes'
import Students from './components/items/Students'
import Subjects from './components/items/Subjects'
import About from './components/items/About'


function App() {
  const menuItems = ["Notes", "Etudants", "Matières", "A Propos"];
  const [activeItem, setActiveItem] = useState("Notes");

  const renderContent = () => {
    switch(activeItem){
      case "Notes": return <Notes />
      case "Etudiants": return <Students />
      case "Matières": return <Subjects />
      case "A Propos": return <About />
      default: return null;
    }
  }
    return (
    <div className='app-container'>
      <Menu 
        items={["Notes", "Etudiants", "Matières", "A Propos"]}
        activeItem={activeItem}
        onItemClick={setActiveItem}
      />
      {renderContent()}
      
      <Header />


      <Footer />

    </div>
  )
}

export default App