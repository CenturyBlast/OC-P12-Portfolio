import '../../sass/main.css'
import { Link } from 'react-router-dom'
import icon_large from '../../data/portfolio_icon_large.png'

export default function Header() {
    return (
        <header className="Header">
            <div className="Header__content">
                <img src={icon_large} alt="pochette de documents" />
                <nav className='Header__nav'>
                    <h1>Maxime Chambon, Intégrateur Web, vous salue !</h1>
                    <Link to="/" className="Home-link">Expérience</Link>
                    <Link to="/about" className="About">Biographie</Link>
                </nav>
            </div>
        </header>
    );
}