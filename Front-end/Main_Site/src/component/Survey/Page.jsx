import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Result from '../Result/Result';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
function Page1(props) {
    var [result,AppendingResult] = useState('');
    function ResultAppend(Append){
        AppendingResult(result+=Append);
        PageSlide();
    }
    function Countresult(e){
        let Count = result.split(e).length - 1;
        return Count;
    }

    /*질문 응답*/
    const Question = [
        {
            'id' : 0, /* 문제 고유 번호 ※중복 금지  */
            'Question' : '질문 1', /* 질문 입력하는 곳 */
            'image' : '../../../img/survey_img/01.png', /* 질문 상단에 위치할 이미지의 상대 경로를 지정 ( 크기는 830 * 468 )*/
            'Answer' : ['대답 1','대답 2'], /* 질문에 대한 응답 입력 왼쪽부터 위 */
            'Values' : ['I','E'] /* 각 대답 별 성향 입력 왼쪽부터 1번 (I, E | S, N | T, F | J, P) */
        },
        { /* 모두 동일 새로 형식만 맞춰서 추가 바람 */
            'id' : 1,
            'Question' : '질문 2',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['E','I']
        },
        {
            'id' : 2,
            'Question' : '질문 3',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['T','F']
        },
        {
            'id' : 3,
            'Question' : '질문 4',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['J','P']
        },{
            'id' : 4,
            'Question' : '질문 5',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['N','S']
        },{
            'id' : 5,
            'Question' : '질문 6',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['F','S','J', 'P']
        },{
            'id' : 6,
            'Question' : '질문 7',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','T','F', 'S']
        },{
            'id' : 7,
            'Question' : '질문 8',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','T','J', 'P']
        },
        {
            'id' : 8,
            'Question' : '질문 9',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['F','T','F', 'T']
        },{
            'id' : 9,
            'Question' : '질문 10',
            'image' : '../../../img/NoPic.png',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','S','N', 'S']
        },];

        
    const createQuestion = 
            Question.map((li,idx)=>
                    (
                    <SurveyWrap> 
                        <img src={li.image}></img>
                        <h2>{li.Question}</h2>
                        <QuestionWrap>
                            <QuestionUnit>
                                <input type='radio' name={li.id} id={li.id}/>
                                <label for={li.id} onClick={()=>{ResultAppend(li.Values[0])}}>
                                <span></span>
                                <p >{li.Answer[0]}</p>
                            </label>
                            </QuestionUnit>
                            <QuestionUnit>
                                <input type='radio' name={li.id} id={li.id}/>
                                <label for={li.id} onClick={()=>{ResultAppend(li.Values[1])}}>
                                <span></span>
                                <p >{li.Answer[1]}</p>
                                </label>
                            </QuestionUnit>
                        {
                            li.Values[2] && (<QuestionUnit>
                                <input type='radio' name={li.id} id={li.id}/>
                                <label for={li.id} onClick={()=>{ResultAppend(li.Values[2])}}>
                                <span></span>
                                <p >{li.Answer[2]}</p>
                                </label>
                            </QuestionUnit>)
                        }
                        {
                            li.Values[3] && (<QuestionUnit>
                                <input type='radio' name={li.id} id={li.id}/>
                                <label for={li.id} onClick={()=>{ResultAppend(li.Values[3])}}>
                                <span></span>
                                <p >{li.Answer[3]}</p>
                                </label>
                            </QuestionUnit>)
                        }
                        </QuestionWrap>
                </SurveyWrap>
                )
            );

    let [Page,PageChange] = useState(0);  
    var [ShowPage,VisiblePage] = useState(true);
    var [ShowResult, VisibleResult] = useState(false);
    const PageSlide = (() =>{
            if(Page < Question.length-1){
                PageChange(Page+1);
            }
            else{
                VisiblePage(false);
                VisibleResult(true);
                
            }
            
        });
    return (
        <>
            {ShowPage && createQuestion[Page]}
            {!ShowResult && <HomeButton onClick={()=>window.confirm("정말로 이동하시겠습니까?\n진행내역이 저장되지 않습니다.")?window.location.replace('/'):console.log('')}><FontAwesomeIcon icon={faHouseChimney} /></HomeButton>}
            {ShowResult && <Result I={Countresult('I')} E={Countresult('E')} N={Countresult('N')} S={Countresult('S')} F={Countresult('F')} T={Countresult('T')} P={Countresult('P')} J={Countresult('J')}/>}
        </>
        
    );
}

const SurveyWrap = styled.div`
    text-align: center;       
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 15vh;
    @media all and (min-width: 769px){
        
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        height: 85%;
        width: 38%;
        h2{
            display: block;
            position: fixed;
        }
        img{
            position: fixed;
            top: 1%;
            width: 85%;
        }
    }
    @media all and (max-width: 768px){
        position: absolute;
        height: 85%;
        align-self: flex-end;
        justify-content:flex-start;
        img{
            width: 90%;
        }
        h2{
            margin-top: 5%;
        }
    }
`;
const QuestionWrap = styled.div`
    width: fit-content;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (min-width: 769px){
        &{
            position: fixed;
            top: 57%;
        }
    }
    @media all and (max-width: 768px){
        margin-top: 5%;
    }
`;
const QuestionUnit = styled.div`
    border-radius: 10px 10px 10px 10px;
    float: left;
    width: 20vw;
    margin: 5px;
    border: 2px solid green;
    cursor: url('../../../public/img/cursor_click.png') 0 2, auto;
    font-size: 20px;
    background-color: beige;

    input[type='radio']{
        display: none;
    }
    p:hover{
        background-color: burlywood;
        cursor: pointer;
    }
    p{
        padding: 10px;
        border-radius: 7px 7px 7px 7px;
    }
    @media all and (max-width: 768px){
        width: 50vw;
        margin: 5vw;
        font-size: 200%;
    }
`;
const HomeButton = styled.h1`
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 7vh;
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    color: black;
    path:hover{
        color: blue;
        cursor: pointer;
    }
    @media all and (max-width: 768px){
        position: relative;
        align-self: flex-end;
        right: 40%;
        font-size: 7vh;
        width: fit-content;
        height: fit-content;
    }
`;
export default Page1;