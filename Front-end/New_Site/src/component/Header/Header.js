import React,{useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function Header(props) {
    const location = window.location;
    var [menubar, visiblemenubar] = useState(false);
    var [helpPopup, visiblehelpPopup] = useState(false);
    var [valuePopup, changePopup] = useState('궁금한 것을 클릭해보세요 ! ');
    const menu = (
        <div className='menu-wrap'>
            <button onClick={()=>{visiblemenubar(false)}}className='exit'>X</button>
            <ul>
                <li onClick={()=> {visiblehelpPopup(true)}}>도움말</li>
                <li>설정</li>
                <li onClick={()=> window.open('http://intec.icehs.kr/main.do', '_blank')}>학교 홈페이지</li>
                <li onClick={()=> window.open('https://github.com/barry0105/INBTI','_blank')}>Github</li>
                <li onClick={()=>window.open('https://season-bacon-1ce.notion.site/8aa9318171f34aca85e80faea98f4001?v=3c78b9af3f6c42e0ac0e6c5c9263a6f5', '_blank')}>Notion</li>
                <li className='copyright'>ⓒ 2022 INBTI all rights reserved</li>
            </ul>
            </div>
    );
    const boardHelp = (
        <p>게시판 도움말이지롱</p>
    );
    const surveyHelp = (
        <p>설문조사 도움말이지롱</p>
    );
    const popupHelp = (
        <div className='help-Popup'>
            <div className='class-Value'>
            <h1>도움말</h1>
            <hr></hr>
            <ul>
                <li onClick={()=>{changePopup(boardHelp)}}>게시판</li>
                <li onClick={()=>{changePopup(surveyHelp)}}>설문조사</li>
            </ul>
            <hr></hr>
            <p>{valuePopup}</p>
            <button onClick={()=>{visiblehelpPopup(false)}}className='exit'>나가기</button>
            </div>
            
        </div>
    )
    return (
        
    
        location.pathname !=='/Survey' &&
        <>
            <div className='nav'>
            <ul>
            <Link to="/"><li><img src="img/LOGO.png" alt="로고"/></li></Link>
                <div className='nav-middle'>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li><span>홈</span></li></Link>
                    <Link to='/ToBoard'  style={{textDecoration: 'none', color: 'black'}}><li><span>게시판</span></li></Link>
                    <Link to='/ToSurvey'  style={{textDecoration: 'none', color: 'black'} }><li><span>설문조사</span></li></Link>
                    <Link to='/info'  style={{textDecoration: 'none', color: 'black'}}><li><span>정보</span></li></Link>
                </div>
                
                <li onClick={()=>{visiblemenubar(true)}}><FontAwesomeIcon icon={faBars} className="menuBar" /></li>
            </ul>
            </div>
            {menubar&&menu}
            {helpPopup&&popupHelp}
            </>
    );
    
}

export default Header;