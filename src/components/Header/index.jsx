import '../../sass/main.css'
import { Link } from 'react-router-dom'
import icon_large from '../../data/portfolio_icon_large.png'

export default function Header() {
    return (
        <header className="Header">
            <div className="Header__content">
                <Link to="/">
                    <img src={icon_large} alt="pochette de documents" />
                </Link>
                <nav>
                    <Link to="/" className="Home-link">Expérience</Link>
                    <Link to="/about" className="Bio-link">Biographie</Link>
                </nav>
            </div>
        </header>
    );
}