import React from 'react';

function Footer(props) {
    const location = window.location;
    return (

        location.pathname !=='/Survey' &&
        <div className='footer'>
           <div className='Text'>Footer 내용 생각중</div>
        </div>
    );
}

export default Footer;