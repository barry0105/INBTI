import React from 'react';
import './Footer.css';
import Slide from './Slide';
function Footer(props) {
    const location = window.location;
    return (

        location.pathname !=='/Survey' && location.pathname !== '/Explain' &&
        <div className='footer'>
           <div className='footerOnLogo'><img src="../../../img/title.png"></img>
                <div className='footer-Banner'>
                INBTI
                {<Slide/>}
                </div>
           </div>
           
        </div>
    );
}

export default Footer;