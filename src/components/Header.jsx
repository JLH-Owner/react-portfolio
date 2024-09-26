import { useLocation } from 'react-router-dom';

const person = {
    name: 'Stacy Herbert',
    theme: {
        backgroundImage: "url('src/assets/images/BCH.jpg')",
        color: 'white',
    }
};

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <div className="header align-self-center"style={person.theme}>
           <h1>{person.name}'s Portfolio</h1>
            <img
                className="avatar"
                src="src/assets/images/AVA.png"
                alt="Stacy Herbert"
            />
        </div>
    )
}

export default Header;