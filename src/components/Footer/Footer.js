import React from 'react';
import '../Footer/FooterStyle.scss';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    const navigate = useNavigate()


    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-container-logo">
                    <img src="../../images/logo.png" alt="Logo" onClick={() => navigate('/')}/>
                </div>
            </div>
            <div className="footer-container">
                <h1>Redes</h1>
                <ul className="footer-container-social">
                    <li>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faInstagram}/>                    
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </li>
                </ul>
            </div>
            <div className="footer-container">
                <h1>Contacto</h1>
                <ul className='footer-container-contact'>
                    <li>Telefono: 0000-0000</li>
                    <li>Email: @gmail.com</li>
                    <li>Ubicacion</li>
                </ul>
            </div>
        </footer>
    )
}