import React,{useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function Header(props) {
    const location = window.location;
    var [menubar, visiblemenubar] = useState(false);
    const menu = (
        <div className='menu-wrap'>
            <button onClick={()=>{visiblemenubar(false)}}className='exit'>X</button>
            <ul>
                <li>도움말</li>
                <li>설정</li>
                <li>학교 홈페이지</li>
                <li>Github</li>
                <li className='copyright'>ⓒ 2022 INBTI all rights reserved</li>
            </ul>
            </div>
    );
    
    return (
        
    
        location.pathname !=='/Survey' &&
        <>
            <div className='nav'>
            <ul>
            <Link to="/"><li><img src="img/LOGO.png" alt="로고"/></li></Link>
                <div className='nav-middle'>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>홈</li></Link>
                    <Link to='/ToBoard'  style={{textDecoration: 'none', color: 'black'}}><li>게시판</li></Link>
                    <Link to='/ToSurvey'  style={{textDecoration: 'none', color: 'black'} }><li>설문조사</li></Link>
                    <Link to='/info'  style={{textDecoration: 'none', color: 'black'}}><li>정보</li></Link>
                </div>
                
                <li onClick={()=>{visiblemenubar(true)}}><FontAwesomeIcon icon={faBars} className="menuBar" /></li>
            </ul>
            </div>
            {menubar&&menu}
            </>
    );
    
}

export default Header;