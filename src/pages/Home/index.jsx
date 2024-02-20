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
        <h1 className="Home_presentation_name">Maxime Chambon - Intégrateur web</h1>
        <div className="Home_presentation_portrait">
          <img src={aboutImg} alt='Maxime sur un bateau' />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2>Compétences techniques</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="Home_contact">
        <span className="Home_contact_cta">Contactez-moi :</span>
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
      <div className="Home_cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}