// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import List from './components/Project';
import Footer from './components/Footer';

const projects = [
  {
    id: 1,
    title: "HTML SEO Refactor",
    link: '',
    github: ''
  },
  {
    id: 2,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 3,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 4,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 5,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 6,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 7,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 8,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 9,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 10,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 11,
    title: "",
    link: '',
    github: ''
  },
  {
    id: 12,
    title: "",
    link: '',
    github: ''
  },
];

function App() {
  return <List projects={projects} />;
}

export default function App() {
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
        