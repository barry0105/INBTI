import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';
function Footer(props) {
    const location = window.location;
    return (

        location.pathname !=='/Survey' && location.pathname !== '/Explain' &&
        <FooterWrap>
           <LogoOnFooter><img src="/img/title.png"/>
                <div className='footer-Banner'>
                <h2>INBTI - 인생에 도움을 주는 명언들</h2>
                {<Slide/>}
                </div>
           </LogoOnFooter>
           
        </FooterWrap>
    );
}
const FooterWrap = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    flex: 0.27;
    text-align: left;
    background-color: RGB(249,169,120);

    @media all and (max-width: 768px){
        visibility: hidden;
    }
`;
const LogoOnFooter = styled.div`
    display: flex;  
    width: fit-content;
    text-align: left;
    font-size: 1vw;
    img{
        width: auto;
        height: auto;
    }
    h2{
        margin-left: 5px;
    }
`;
const FooterBanner = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export default Footer;