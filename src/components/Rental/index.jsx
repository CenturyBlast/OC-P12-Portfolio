import '../../sass/main.css';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import rentalData from '../../data/projets.json';
import github_logo from '../../data/github_grad.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Rental() {

    const idRental = useParams('id').id;
    const [imgCarousel, setImgCarousel] = useState([]);
    const dataRental = rentalData.find(data => data.id === idRental);
    const navigate = useNavigate();

    useEffect(() => {
        if (!dataRental) {
            navigate('*');
        } else {
            setImgCarousel(dataRental.pictures);
        }
    }, [dataRental, navigate]);

    if (!dataRental) {
        return null;
    }

    return (
        <div className="Rental">
            <Carousel imgCarousel={imgCarousel} />
            <div className="Rental__container">
                <div className="Rental__infos">
                    <h1 className='Rental__infos_title'>{dataRental.title}</h1>
                    <div className='Rental__infos_location'>
                        <img src={github_logo} alt="github" />
                        <a href={dataRental.location}>Voir ce projet sur GitHub</a>
                    </div>
                </div>
            </div>
            <div className="Rental__collapses">
                <Collapse title={'Description'} className='Rental__collapses_item' content={dataRental.description} />
                <Collapse title={'Compétences développées'} className='Rental__collapses_item' content={dataRental.skills.map((skills, index) => (
                    <div key={index} className='Rental__collapses_skills'>{skills}</div>
                ))} />
            </div>
        </div>
    );
}