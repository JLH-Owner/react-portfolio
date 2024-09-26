// Bringing in the required import from 'react-router-dom'
import './App.css'
import './_variables.scss'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

  
function App() {
    return (
      <>
        <Nav />
        <Header />
        <main className="mx-3">
          <Outlet />
        </main>
        <Footer />
      </>            
  )
}

export default App
        