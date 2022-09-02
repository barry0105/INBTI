import React from 'react';
import styled from 'styled-components';

function info(props) {
    return (
        <InfoUs>
            <ul>
                <li>프로젝트명 : INBTI</li>
                <li>설명 : INBTI는 학생들의 진로 고민을 해결해주기 위해 고안한 진로 도우미 입니다.</li>
                <li>사용 기술 : REACT, JAVASCRIPT, SPRING, FIREBASE, MARIADB 등</li>
                <li>팀원 : 김규진, 김채은, 방주현, 전해린</li>
                <li>
                    <table>
                        <tbody>
                        <tr>
                            <td>학번</td>
                            <td>이름</td>
                            <td>역할</td>
                        </tr>
                        <tr>
                            <td>3학년 통신 1반 1번</td>
                            <td>김규진</td>
                            <td>조장, 성향검사, 프론트 엔드 개발</td>
                        </tr>
                        <tr>
                            <td>3학년 통신 1반 4번</td>
                            <td>김채은</td>
                            <td>디자인, 메인화면, 프론트 엔드 개발</td>
                        </tr>
                        <tr>
                            <td>3학년 통신 1반 12번</td>
                            <td>방주현</td>
                            <td>FIREBASE 서버, DB 구축 및 백엔드 개발</td>
                        </tr>
                        <tr>
                            <td>3학년 통신 1반 15번</td>
                            <td>전해린</td>
                            <td>서기, 게시판 프론트 및 백엔드 개발</td>
                        </tr>
                        </tbody>
                        
                    </table>    
                </li>
            </ul>
            
        </InfoUs>
    );
}
const InfoUs = styled.div`
    display: flex;
    flex: 1;
    background-color:rgb(187,223,219);
    justify-content: center;
    align-items: flex-start;
    height: 80vh;
    max-height: 70vh;
    overflow-y: auto;
    ul{
        padding: 0;
        display:flex;
        align-items: center;
        flex-direction: column;
    }
    li{
        width: fit-content;
        list-style: none;
        line-height: 300%;
        table{
            width: 50vw;
            border: 1px solid black;
            line-height: 200%;
            border-collapse: collapse;
            text-align: center;
            th, td {
                border: 1px solid black;
              }
        }
    }
    @media all and (max-width: 768px){
        height: 100vh;
        max-height: 100vh;
    }
`;
export default info;