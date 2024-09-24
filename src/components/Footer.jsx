import { useLocation } from 'react-router-dom'; 

function Footer() {
    const currentPage = useLocation().pathname;
  
return (
    <footer>
    <p> My Portfolio &#169; 2024</p>
    </footer>
)}

export default Footer;