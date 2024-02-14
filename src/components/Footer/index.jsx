import '../../sass/main.css'
import id_max from '../../data/Id_max.jpg'

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__content">
                <img src={id_max} alt="Maxime en montagne" />
                <p>© 2024 Maxime Chambon</p>
            </div>
        </footer>
    );
}