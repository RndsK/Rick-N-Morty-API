import { Link } from '@tanstack/react-router';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <h1 className="headline">Rick and Morty Characters</h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;