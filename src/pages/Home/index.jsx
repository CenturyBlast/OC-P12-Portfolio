import '../../sass/main.css';
import Card from '../../components/Card';
// import binary from '../../data/binary_font.png';
import cardData from '../../data/projets.json';

export default function Home() {

  return (
    <div className="Home">
      {/* <h1>Maxime Chambon, Intégrateur Web</h1> */}
      {/* <div>Bienvenue Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> */}
      {/* <div className="Home__banner">
        <img src={binary} alt="abstraction binaire" className='Home__banner_img' />
        <span className='Home__banner_text'>Bienvenue Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
      </div> */}
      <div className="Home__cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}