import Collapse from '../../components/Collapse';
import '../../sass/main.css';

export default function About() {
    return (
        <div className='About'>

            <div className="About__collapse-container">
                <Collapse
                    title="Formation"
                    content="Titulaire d'une certification professionnelle « Développeur intégrateur web » 
                    reconnue Bac +2 et délivrée par l'organisme OpenClassrooms. Durant un an, j'ai réalisé des projets professionnels axés sur les langages clients HTML et 
                    CSS ainsi que sur l'écosystème Javascript."
                />

                <Collapse
                    title="Carrière antérieure"
                    content="Durant 12 ans, j'ai exercé le métier de charpentier-couvreur.
                    D'abord apprenti puis ouvrier qualifié, j'ai collaboré avec plusieurs entreprises basées en Savoie et en Isère. 
                    Je suis resté plus de 6 ans chez mon dernier employeur.
                    Je suis titulaire d'un Brevet Pro Charpentier bois consécutif au CAP du même nom ainsi que d'un titre de 
                    technicien en performance énergétique du bâtiment.
                    La réalisation de maisons individuelles en ossature bois, la réfection de toiture et l'isolation thermique 
                    à base de matériaux écologiques étaient mon cœur de métier.
                    Les qualités humaines et savoirs-être acquis durant cette période de ma vie sont le travail en équipe, 
                    la rigueur, l'observation et la communication verbale client-collaborateurs."
                />
            </div>

        </div>
    );
}