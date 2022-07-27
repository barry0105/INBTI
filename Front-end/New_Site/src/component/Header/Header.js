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
        <p>
        친구는 세월의 도둑이다.
        봄부터 흐르는 물은 겨울이 되어도 얼지 않듯이
        불행했을 때 만난 친구는 가장 소중히 여겨야 한다.
        행복했을 때 함께 기쁨을 누리는 친구보다
        힘들 떄 슬픔을 덜어지는 친구를 더 많이 신뢰할 수 있다.
        부유했을 때는 친구를 사귀기 쉽지만,
        어려울 때는 눈을 씻고 찾아봐도 친구를 찾기 어렵다.
        누군가 진정한 우정을 나누고 있다 할지라도 그 우정을 지키려면 오랜 시간이 걸린다.
        그들은 진정한 친구가 아니기 때문이다.
        친구란 말하자면 또 하나의 자신이다.
        친구를 보면 그 사람을 알 수 있다.
        현명한 사람과 어리석은 사람은 서로 어울리지 않는다.
        친구는 나를 동정하는 자가 아니라 나를 돕는 자다.
        </p>
    );
    const surveyHelp = (
        <p>
        용서는 곧 사랑이다.
        고결하고 아름다운 사랑의 형태이다.
        사랑이 없는 사람은 쉽게 용서하지 못한다.
        용서는 평화와 행복을 그 보답으로 준다.
        그대, 용서함으로써 행복 하라!
        용감한 자만이 용서할 줄 알고
        비겁한 자는 용서하지 않는다.
        용서는 남에게는 자주 베풀지만
        자신에게는 베풀지 마라.      
        누군가가 당신에게 피해를 입혔다면
        인내심을 가지고 그들을 대하라.</p>
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
            <button onClick={()=>{visiblehelpPopup(false); changePopup('궁금한 것을 클릭해보세요 !');}}className='exit'>나가기</button>
            </div>
            
        </div>
    )
    return (
        
    
        location.pathname !=='/Survey' && location.pathname !== '/Explain' &&
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