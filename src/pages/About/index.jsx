import Collapse from '../../components/Collapse'
import aboutImg from '../../data/max_sails_lighter.JPG'
import '../../sass/main.css'

export default function About() {
    return (
        <div className='About'>
            
            <div className="About__banner">
                <img src={aboutImg} alt='Maxime sur un bateau' className='About__banner_img' />
            </div>

            <div className="About__collapse-container">
                <Collapse
                    title="Projet professionnel"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat."
                />
                <Collapse
                    title="Formation"
                    content="Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum."
                />
            </div>

        </div>
    );
}