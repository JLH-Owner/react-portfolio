import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div className="row">
      <div className="navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "About"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Porfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
