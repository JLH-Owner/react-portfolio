import { useLocation } from 'react-router-dom'; 

function Header() {
    const currentPage = useLocation().pathname;
  
return currentPage (
    <header>
    <p>Stacy Herbert</p>
    </header>
)}

export default Header;