import React from 'react';
import './Footer.css';
function Footer(props) {
    const location = window.location;
    return (

        location.pathname !=='/Survey' && location.pathname !== '/Explain' &&
        <div className='footer'>
           <div className='footerOnLogo'><img src="../../../img/title.png"></img><p>INBTI</p></div>
        </div>
    );
}

export default Footer;