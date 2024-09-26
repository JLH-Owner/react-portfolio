import { useLocation } from 'react-router-dom'; 

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div className="container d-flex justify-content-center">
            <p>My Portfolio &#169; 2024</p>
        </div>
    )
  
}

export default Footer;