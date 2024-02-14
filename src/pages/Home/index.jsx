import '../../sass/main.css';
import Card from '../../components/Card';
import binary from '../../data/binary_font.png';
import cardData from '../../data/logements.json';

export default function Home() {

  return (
    <div className="Home">
      <div className="Home__banner">
        <img src={binary} alt="abstraction binaire" className='Home__banner_img' />
        <span className='Home__banner_text'>Découvrez mes projets...</span>
      </div>
      <div className="Home__cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}