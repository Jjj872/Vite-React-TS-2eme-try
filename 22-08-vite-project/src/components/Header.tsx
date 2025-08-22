import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header> 
        <div className="header_wrapper">
            <a href="#" className="playfair headername">Jolan Wellem</a>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;