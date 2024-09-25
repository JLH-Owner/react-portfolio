// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';



  
export default function App() {
    return (
      <>
        <Navigation />
        <Header />
        <main className="mx-3">
          <Outlet />
            
                       
        </main>
        <Footer />
      </>            
  );
}
        