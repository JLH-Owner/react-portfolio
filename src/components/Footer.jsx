import { useLocation } from 'react-router-dom'; 

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        'My Portfolio &#169 2024'
    )
  
}

export default Footer;