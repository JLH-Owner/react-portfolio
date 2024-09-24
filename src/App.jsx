// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import List from './components/Project';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
    return (
      <>
        <Nav />
        <main className="mx-3">
          <Outlet />
          <Header />
          <List />
          <Footer />        
        </main>
      </>            
    );
}
        