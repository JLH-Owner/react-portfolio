import { useLocation } from 'react-router-dom';

const person = {
    name: 'Stacy Herbert',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Portfolio</h1>
            <img
                className="avatar"
                src="src/assets/images/blonde-avatar.jpg"
                alt="Stacy Herbert"
            />
        </div>
    )
}

export default Header;