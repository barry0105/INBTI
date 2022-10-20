import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header(props) {
    const location = window.location;
    var [setting, visiblesetting] = useState(false);
    var [menubar, visiblemenubar] = useState(false);
    var [helpPopup, visiblehelpPopup] = useState(false);
    var [valuePopup, changePopup] = useState('궁금한 것을 클릭해보세요 ! ');

    const menu = (
        <MenuWrap>
            <ExitMenu onClick={()=>{visiblemenubar(false)}}>X</ExitMenu>
            <MenuList>
                <MenuUnit onClick={()=> {visiblehelpPopup(true)}}>도움말</MenuUnit>
                {/* <MenuUnit onClick={()=> {visiblesetting(true)}}>설정</MenuUnit> */}
                <MenuUnit onClick={()=> window.open('http://intec.icehs.kr/main.do', '_blank')}>학교 홈페이지</MenuUnit>
                <MenuUnit onClick={()=> window.open('https://github.com/barry0105/INBTI','_blank')}>Github</MenuUnit>
                <MenuUnit onClick={()=>window.open('https://season-bacon-1ce.notion.site/8aa9318171f34aca85e80faea98f4001?v=3c78b9af3f6c42e0ac0e6c5c9263a6f5', '_blank')}>Notion</MenuUnit>
                <Copyright>ⓒ 2022 INBTI all rights reserved</Copyright>
            </MenuList>
        </MenuWrap>
    );
    const settingPopup = (
        <BackgroundOfPopup>
            <Popup>
                <h1>설정</h1>
                <hr/>
                <SettingMenuWrap>
                    <li>
                    <SettingToggelWrap>
                        <h4>설정 1</h4>
                        <ToggleRealButton id="toggle1" hidden/>
                        <ToggleSwitch for="toggle1" >
                        <ToggleSwitchButton/>
                        </ToggleSwitch>
                    </SettingToggelWrap>
                    </li>
                    <li>
                    <SettingToggelWrap>
                        <h4>설정 2</h4>
                        <ToggleRealButton id="toggle2" hidden/>
                        <ToggleSwitch for="toggle2">
                        <ToggleSwitchButton/>
                        </ToggleSwitch>
                    </SettingToggelWrap>
                    </li>
                    <ExitToPopup onClick={()=>{visiblesetting(false)}}>나가기</ExitToPopup>
                </SettingMenuWrap>
            </Popup>
        </BackgroundOfPopup>
    )
    const boardHelp = (
        <>
        <br/>
        게시판은 진로에 관한 고민이나 기타 고민사항, 설문 결과에 대한 궁금점 등을 사람들과 이야기 해 볼 수 있게 만든 서비스입니다.
        <br/>
        <br/>
        게시판은 메인화면 상단 게시판 탭을 누른 뒤 사진을 눌러서 접속할 수 있습니다.
        <br/>
        <br/>
        게시판에 자신의 이야기를 올리고 댓글로 사람들과 소통해보세요 !
        </>
    );
    const surveyHelp = (
        <>
        <br/>
        INBTI 성향검사는 학생들에게 간단한 설문 조사를 통해 자신의 직업 성향을 알 수 있게 도와주는 서비스 입니다.
        <br/>
        <br/>
        자신의 직업 성향을 찾음으로서 본인에게 맞는 직무를 선택하고 더 합리적이게 행복한 미래를 결정할 기회를 제공 해줄 수 있습니다.
        <br/>
        <br/>
        성향검사는 메인화면 하단 성향검사 받기 버튼을 눌러 참여하고 결과를 확인할 수 있습니다.</>
    );
    const popupHelp = (
        <BackgroundOfPopup>
            <Popup>
            <h1>도움말</h1>
            <hr></hr>
            <Helpul>
                <HelpTags onClick={()=>{changePopup(boardHelp)}}>게시판</HelpTags>
                <HelpTags onClick={()=>{changePopup(surveyHelp)}}>성향검사</HelpTags>
            </Helpul>
            <hr></hr>
            <HelpValue>{valuePopup}</HelpValue>
            <ExitToPopup onClick={()=>{visiblehelpPopup(false); changePopup('궁금한 것을 클릭해보세요 !');}}>나가기</ExitToPopup>
            </Popup>
            
        </BackgroundOfPopup>
    )
    return (
        
    
        location.pathname !=='/Survey' && location.pathname !== '/Explain' &&
        <>
        {menubar&&menu}
        {helpPopup&&popupHelp}
        {setting&&settingPopup}
            <Navwrap>
                <Navul>
                <StyledLink to="/"><Navli><Navimg src='img/LOGO.png'/></Navli></StyledLink>
                        <StyledLink to="/"><Navli>홈</Navli></StyledLink>
                        <StyledLink to='/ToBoard'><Navli>게시판</Navli></StyledLink>
                        {/* <StyledLink to='/ToSurvey'><Navli>성향검사</Navli></StyledLink> */}
                        <StyledLink to='/Explain' target={"_blank"}><Navli>유형설명</Navli></StyledLink>
                        <StyledLink to='/info'><Navli>정보</Navli></StyledLink>
                        
                        {!menubar&&<MenuButton icon={faBars} onClick={()=>{visiblemenubar(true)}}/>}
                </Navul>
            </Navwrap>
                
            
            
            
            </>
    );
    
}


/* Header Styled */
const Navimg = styled.img`
    height: 5vw;
    @media all and (max-width: 768px){
        position: absolute;
        top: 0;
        left:50%;
        transform: translate(-50%, 0);
        width: 20%;
        height: 5%;
    }
`;
const Navul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    align-items: center;
    @media all and (max-width: 768px){
        height: 50%;
        justify-content: center;
        margin-left: -20px;
    }
`;
const Navli = styled.li`
    list-style: none;
    margin: 1vw;
    font-size: 1.2vw;
    &:hover{
        color: blue;
        cursor: pointer;
    }
    @media all and (max-width: 768px){
        font-size: 4vw;
        padding: 10px;
        margin-bottom: 20px;
    }
`;
const Navwrap = styled.nav`
    background-color: RGB(252,249,234);
    & *{
        z-index: 1;
    }
    @media all and (max-width: 768px){
        height: 15%;
        display:flex;
        align-items:flex-end;
        justify-content: center;
        width:100%;
    }
`;
const MenuButton = styled(FontAwesomeIcon)`
    position: absolute;
    right: 1%;
    font-size: 2vw;
    &:hover{
        cursor:pointer;
    }
    @media all and (max-width: 768px){
        font-size: 5vw;
        right: 4%;
        top:9%;
    }
`;
/* Header Styled */


/* MenuWrap Styled */
const MenuWrap = styled.div`
    z-index: 5;
    position: fixed;
    right: 0px;
    width: 150px;
    height: 100%;
    background-color: RGB(187,223,219);
`;
const MenuList = styled.ul`
    line-height: 3vw;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    margin: 20px -10px;
`;
const MenuUnit = styled.li`
    font-size: 1vw;
    text-align: left;
    &:hover{
        color: blue;
        cursor: pointer;
    }
    @media all and (max-width: 768px){
        font-size: 4vw;
        margin: 10px 0 10px 0;
    }
`;
const ExitMenu = styled.button`
color: black;
   background-color: #eee;
   border: 0;
   position: fixed;
   right: 5px;
   top: 5px;
   width: 30px;
   height: 30px;
   &:hover{
    background-color: #ddd;
    cursor: pointer;
    }
`;
/* MenuWrap Styled */


/* Help-Popup Styled */
const Helpul = styled.ul`
    padding: 0; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const HelpTags = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &:hover{
        cursor: pointer;
        color: blue;
    }
`;
const HelpValue = styled.p`
    height: 80%;
    display: flex;
    flex: 1;
    text-align: left;
    width: 100%;
    overflow-y: auto;
`;
/* Help-Popup Styled */


/* Setting menu Styled*/
const SettingMenuWrap = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;
const SettingToggelWrap = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    & label, span:hover{
        pointer: cursor;
    }
`;
const ToggleSwitch = styled.label`
    
    width: 3rem;
    height: 1.5rem;
    display: block;
    position: relative;
    border-radius: 2rem;
    background-color: gray;
    transition: all 0.2s ease-in;
`;
const ToggleSwitchButton = styled.span`
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 50%;
    left: .1rem;
    transform: translateY(-50%);
    border-radius: 50%;
    background: wheat;
    transition: all 0.2s ease-in;
`;
const ToggleRealButton = styled.input.attrs({
    type: 'checkbox',
})`
    &:checked ~ ${ToggleSwitch}{
        background: blue;
    }   
    &:checked ~ ${ToggleSwitch} ${ToggleSwitchButton}{
        left: calc(100% - 1.4rem);
        background: #fff;
    }   
    
`;
/* Setting menu Styled*/


/* etc */
const StyledLink = styled(Link)`
    height: fit-content;
    width: fit-content;
    text-Decoration: none; 
    color: black;
`;
const Copyright = styled.li`
    margin: -10px;
    padding: 10px;
    width: 130px;
    background-color: rgb(137, 189, 184);
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 0.5vw;
    line-height: 100%;
`;
const BackgroundOfPopup = styled.div`
    background-color: rgba(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
    align-self: center;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Popup = styled.div`
    width: 30%;
    background-color: azure;
    border-radius: 5px 5px 5px 5px;
    height: 70%;
    text-align: center;
    padding: 10px;
    line-height: 200%;
    @media all and (max-width: 768px){
        width: 70%;
    }
`;
const ExitToPopup = styled.button`
    width: 30%;
    font-size: larger;
    border: 0;
    background-color:rgb(161, 161, 161);
    &:hover{
        cursor: pointer;
        background-color: rgb(140, 140, 140);
    }
`;
/* etc */


export default Header;