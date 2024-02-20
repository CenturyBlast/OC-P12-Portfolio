import '../../sass/main.css';
import Card from '../../components/Card';
// import binary from '../../data/binary_font.png';
import cardData from '../../data/projets.json';
import mail_logo from '../../data/mail_grad.png';
import linkedin_logo from '../../data/linkedin_grad.png';
import github_logo from '../../data/github_grad.png';
import aboutImg from '../../data/max_sails_lighter.JPG';

export default function Home() {

  return (
    <div className="Home">

      <div className="Home_presentation">

        <h1>Maxime Chambon - Intégrateur web</h1>

        <div className="Home_presentation_portrait">
          <img src={aboutImg} alt='Maxime sur un bateau' />
        </div>

        <p>
          Bonjour et <strong>bienvenue</strong> sur ma page personnelle.<br />
          <br />

          Je suis <strong>intégrateur web</strong> et <strong>développeur front-end</strong>.<br />
          <br />

          Bientôt titulaire d'une <strong>certification professionnelle</strong> réalisée avec OpenClassrooms,
          je tâche de rester en pointe sur les technologies <strong>web et mobile</strong> afin
          d'offrir aux utilisateurs une <strong>expérience numérique</strong> agréable, intuitive et orientée
          vers la <strong>résolution</strong> de leurs objectifs.
        </p>

        <h2>Compétences techniques</h2>

        <p>
          J'utilise actuellement les <strong>technologies</strong> suivantes :
        </p>

        <h3>Intégration et Dynamisation :</h3><br />


        <p>
          <strong>HTML5</strong> (icône) et <strong>CSS3</strong> (icône) ainsi que le
          préprocesseur <strong>Sass</strong> (icône) pour la <strong>structure et le style</strong>.<br />
          <br />

          <strong>Javascript native</strong> (icône) et sa Bibliothèque <strong>React</strong> (icône)
          pour des interfaces <strong>modernes et adaptables</strong>.<br />
          <br />

          J'utilise également <strong>Redux</strong> pour la gestion de l'<strong>état</strong> des applications.<br />
        </p>



        <h3>Requêtes aux API et back-end :</h3>


        <p>
          <strong>Swagger</strong> pour rédiger la <strong>documentation</strong> des routes.<br />
          <br />

          <strong>MongoDB</strong> (icône) pour les <strong>bases de données</strong>.<br />
          <br />

          <strong>Node.js</strong> (icône) pour exécuter du <strong>Javascript</strong> en dehors du navigateur.<br />
        </p>

        <h3>Utilitaires :</h3>

        <p>
          <strong>VSCode</strong> (icône) comme <strong>éditeur</strong> de code.<br />
          <br />

          <strong>Notion</strong> (icône) comme outil de <strong>veille</strong> et
          pour la rédaction de <strong>Kanban</strong>.<br />
          <br />

          <strong>GitHub</strong> (icône) pour le versionnage ainsi que <strong>Vercel</strong>
          pour le <strong>déploiement</strong> de projets.<br />
        </p>

        <div className="Home_contact">
          <span className="Home_contact_cta"><strong>Contactez-moi :</strong></span>
          <div>
            <a href='mailto:max.chambon@proton.me' aria-label='envelope'>
              <img src={mail_logo} alt='mail' />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/maxime-chambon-aa296a238/' target='blank' rel='noopener' aria-label='linkedin'>
              <img src={linkedin_logo} alt='linkedin' />
            </a>
          </div>
          <div>
            <a href='https://github.com/CenturyBlast' target='blank' rel='noopener' aria-label='github'>
              <img src={github_logo} alt='github' />
            </a>
          </div>
        </div>

        <h2>Découvrez mon travail au travers de différents projets</h2>

      </div>

      <div className="Home_cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}