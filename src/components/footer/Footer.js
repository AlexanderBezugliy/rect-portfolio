import instagram from '../../img/icons/instagram.svg';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';
import tg from '../../img/icons/tg.svg';

import './style.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={tg} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

