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
            'Question' : '시험기간이 다가왔다. 공부를 해야 하는데...', /* 질문 입력하는 곳 */
            'image' : '../../../img/survey_img/01.png', /* 질문 상단에 위치할 이미지의 상대 경로를 지정 ( 크기는 830 * 468 )*/
            'Answer' : ['같이 공부하면 집중도 안될것 같아. 혼자 공부한다',
                        '함께 공부하면 서로 모르는 것도 알려주고 더 공부가 잘 될 거야! 친구와 함께 공부한다.'], /* 질문에 대한 응답 입력 왼쪽부터 위 */
            'Values' : ['I','E'] /* 각 대답 별 성향 입력 왼쪽부터 1번 (I, E | S, N | T, F | J, P) */
        },
        { /* 모두 동일 새로 형식만 맞춰서 추가 바람 */
            'id' : 1,  
            'Question' : '당일에 친구가 약속을 파토냈다. 나는?',
            'image' : '.../../../img/survey_img/01.png',
            'Answer' : ['오늘 나갈 준비까지 다 했는데 아무도 안 만나기엔 조금 그런데... 다른 친구를 만난다.',
                        '하하! 정말 아쉬워! 싱글벙글 집에 있는다.'],
            'Values' : ['E','I']
        },
        {
            'id' : 2,
            'Question' : '벌써 새 학기가 찾아왔네, 다들 친구들은 많이 사귀었나?',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['친구 만들기는 타이밍! 내가 먼저 다가간다.',
                        '앉아있으면 누구라도 말을 걸어주지 않을까... 가만히 앉아서 기다린다.'],
            'Values' : ['E','I']
        },
        {
            'id' : 3,
            'Question' : '친구와 길을 걷는데 우연히 친구의 친구를 마주쳤다!',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['친구의 친구는 곧 내 친구! 먼저 인사하고 다가간다.',
                        '새로운 사람은 좀... 친구 뒤에서 아무 말도 하지 않는다.'],
            'Values' : ['E','I']
        },{
            'id' : 4,
            'Question' : '날도 덥고, 밖에서 할 것도 없어서 친구와 함께 카페에 왔다.',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['엄청 재미있는 일이 있었어! 나의 이야기를 마구마구 쏟아낸다.',
                        '하하, 정말? 친구의 말을 귀기울여 듣는다.'],
            'Values' : ['E','I']
        },{
            'id' : 5,
            'Question' : '기다리고 기다리던 쉬는 날이다! 뭘 하지?',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['고단했던 평일이 지나고 쉬는 날인데 편히 쉬고 싶어. 집에서 혼자 여가를 즐기며 쉰다.',
                        '평일의 나를 보상해줄 건 친구들 뿐이지! 친구들을 만나러 간다.'],
            'Values' : ['I','E']
        },{
            'id' : 6,
            'Question' : '우리 과에서 나의 이상형을 발견했다. 마음이 가는데... 어쩌지?',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['가만히 있으면 이어질 연도 없어진댔어! 먼저 다가가 친해지려고 노력한다.',
                        '쟤는 내가 누굴지도 모를텐데... 주위만 맴돌며 기회를 노린다.'],
            'Values' : ['E','I']
        },{
            'id' : 7,
            'Question' : '생일이다. 나의 생일이야!',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['진심으로 축하해줄 사람 몇 명만 있으면 돼. 정말 친한 사람 소수와 함께한다.',
                        '기쁨은 나누면 두 배! 많은 사람들과 함께한다.'],
            'Values' : ['I','E']
        },
        {
            'id' : 8,
            'Question' : '오랜만에 치킨을 먹으려고 배달 앱을 켰다. 어라...? 전화 주문 밖에 안 된다고?',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['전화주문은 좀 그런데... 앱 주문이 가능한 다른 메뉴를 시킨다.',
                        '먹고 싶은 메뉴는 먹어야지! 그냥 전화주문 한다.'],
            'Values' : ['I','E']
        },{
            'id' : 9,
            'Question' : '갑자기 친구가 쌀쌀맞게 군다.',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['내가 뭐 잘못한게 있나... 나한테 화가 난 건가, 왜그러지... 오만가지 생각을 하며 걱정한다.',
                        '기분이 안 좋은가보네? 나중에 이야기 해야지. 별로 신경 안 쓴다.'],
            'Values' : ['F','T']
        },{
            'id' : 10,
            'Question' : '친구가 속상한 일이 있다고 한다. 위로를 해줘야겠는데...',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['그런 일도 이런 일도 있는 거지. 내가 좀 도와줄까? 문제 해결에 도움을 주려 한다.',
                        ' 괜찮아? 많이 속상했겠다...ㅜㅜ 이야기에 공감해주며 위로한다.'],
            'Values' : ['T','F']
        },{
            'id' : 11,
            'Question' : '만나기로 한 시간이 30분 넘게 지나서 도착해버렸다...',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['미안해, 내가 왜 늦었냐면…. 늦은 이유를 설명한다.',
                        '30분이나 늦어버렸네. 진짜진짜 미안해! ㅠㅠ 싹싹 빈다.'],
            'Values' : ['T','F']
        },{
            'id' : 12,
            'Question' : '누가 뒤에서 내 욕을 한다는 소리를 들었다.',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : [' 갑자기 나한테 왜그러지... 크게 걱정하고 신경쓴다.',
                        ' 뭐, 그럴 수도 있지. 근데 왜그랬대?'],
            'Values' : ['F','T']
        },{
            'id' : 13,
            'Question' : '질문 10',
            'image' : '../../../img/survey_img/01.png',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['N','S']
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