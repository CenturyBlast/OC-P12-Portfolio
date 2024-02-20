import '../../sass/main.css';
import Card from '../../components/Card';
// import binary from '../../data/binary_font.png';
import cardData from '../../data/projets.json';
import mail_logo from '../../data/mail_grad.png';
import linkedin_logo from '../../data/linkedin_grad.png';
import github_logo from '../../data/github_grad.png';
import aboutImg from '../../data/max_sails_lighter.JPG';
import vscode_logo from '../../data/vscode_grad.png';
import html_logo from '../../data/html_grad.png';
import css_logo from '../../data/css_grad.png';
import javascript_logo from '../../data/javascript_grad.png';
import react_logo from '../../data/react_grad.png';
import notion_logo from '../../data/notion_grad.png';
import node_logo from '../../data/node_js_grad.png';
import mongo_logo from '../../data/mongo_db_grad.png';
import figma_logo from '../../data/figma_grad.png';
import sass_logo from '../../data/sass_grad.png';

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
          J'utilise actuellement les <strong>technologies</strong> suivantes :<br />
        </p>

        <h3>Intégration et Dynamisation :</h3><br />

        <div className='Home_presentation_icon'>
          <img src={html_logo} alt='html5' />
          <img src={css_logo} alt='css3' />
          <img src={sass_logo} alt='sass' />
          <img src={javascript_logo} alt='javascript' />
          <img src={react_logo} alt='react' />
        </div>

        <p>
          <strong>HTML5</strong>  et <strong>CSS3</strong>  ainsi que le
          préprocesseur <strong>Sass</strong>  pour la <strong>structure et le style</strong>.<br />
          <br />

          <strong>Javascript native</strong>  et sa Bibliothèque <strong>React </strong>
          pour des interfaces <strong>modernes et adaptables</strong>.<br />
          <br />

          J'utilise également <strong>Redux</strong> pour la gestion de l'<strong>état</strong> des applications.<br />
          <br />
        </p>



        <h3>Requêtes aux API et back-end :</h3>

        <div className='Home_presentation_icon'>
          <img src={mongo_logo} alt='mongodb' />
          <img src={node_logo} alt='nodejs' />
        </div>

        <p>
          <strong>Swagger</strong> pour rédiger la <strong>documentation</strong> des routes.<br />
          <br />

          <strong>MongoDB</strong>  pour les <strong>bases de données</strong>.<br />
          <br />

          <strong>Node.js</strong>  pour exécuter du <strong>Javascript</strong> en dehors du navigateur.<br />
          <br />
        </p>

        <h3>Utilitaires :</h3>

        <div className='Home_presentation_icon'>
          <img src={vscode_logo} alt='vscode' />
          <img src={notion_logo} alt='notion' />
          <img src={figma_logo} alt='figma' />
          <img src={github_logo} alt='github' />
        </div>

        <p>
          <strong>VSCode</strong>  comme <strong>éditeur</strong> de code.<br />
          <br />

          <strong>Notion</strong>  comme outil de <strong>veille</strong> et
          pour la rédaction de <strong>Kanban</strong>.<br />
          <br />

          <strong>Figma</strong>  pour étudier les <strong>maquettes</strong> issues du design.<br />
          <br />

          <strong>GitHub</strong>  pour le versionnage ainsi que <strong>Vercel</strong> pour le <strong>déploiement</strong> de projets.<br />
          <br />
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

        <h2>Découvrez mon travail au travers de différents projets :</h2>

      </div>

      <div className="Home_cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}