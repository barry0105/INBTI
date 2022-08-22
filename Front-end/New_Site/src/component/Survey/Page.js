import React, { useReducer, useState } from 'react';
import './page.css';
import Result from '../Result/Result';

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
            'Question' : '질문', /* 질문 입력하는 곳 */
            'Answer' : ['대답 1','대답 2'], /* 질문에 대한 응답 입력 왼쪽부터 위 */
            'Values' : ['I','E'] /* 각 대답 별 성향 입력 왼쪽부터 1번 (I, E | S, N | T, F | J, P) */
        },
        { /* 모두 동일 새로 형식만 맞춰서 추가 바람 */
            'id' : 1,
            'Question' : '질문 2',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['E','I']
        },
        {
            'id' : 2,
            'Question' : '질문 3',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['T','F']
        },
        {
            'id' : 3,
            'Question' : '질문 4',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['J','P']
        },{
            'id' : 4,
            'Question' : '질문 5',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['N','S']
        },{
            'id' : 5,
            'Question' : '질문 6',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['F','S','J', 'P']
        },{
            'id' : 6,
            'Question' : '질문 7',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','T','F', 'S']
        },{
            'id' : 7,
            'Question' : '질문 8',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','T','J', 'P']
        },
        {
            'id' : 8,
            'Question' : '질문 9',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['F','T','F', 'T']
        },{
            'id' : 9,
            'Question' : '질문 10',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['N','S','N', 'S']
        },];

        
    const createQuestion = 
            Question.map((li,idx)=>
                (<div className='Question'> 
                    <img src='img/NoPic.png'></img>
                    <h2>{li.Question}</h2>
                    <div className='survey-wrap'>
                    <div className='survey-unit'>
                    <input type='radio' name={li.id} id={li.id}/>
                    <label for={li.id} onClick={()=>{ResultAppend(li.Values[0])}}>
                    <span></span>
                    <p >{li.Answer[0]}</p>
                    </label>
                    </div>
                    <div className='survey-unit'>
                    <input type='radio' name={li.id} id={li.id}/>
                    <label for={li.id} onClick={()=>{ResultAppend(li.Values[1])}}>
                    <span></span>
                    <p >{li.Answer[1]}</p>
                    </label>
                    </div>
                    {
                        li.Values[2] && (<div className='survey-unit'>
                        <input type='radio' name={li.id} id={li.id}/>
                        <label for={li.id} onClick={()=>{ResultAppend(li.Values[2])}}>
                        <span></span>
                        <p >{li.Answer[2]}</p>
                        </label>
                        </div>)
                    }
                    {
                        li.Values[3] && (<div className='survey-unit'>
                        <input type='radio' name={li.id} id={li.id}/>
                        <label for={li.id} onClick={()=>{ResultAppend(li.Values[3])}}>
                        <span></span>
                        <p >{li.Answer[3]}</p>
                        </label>
                        </div>)
                    }
                </div>
                </div>
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
        <div className='Background'>
            {ShowPage && createQuestion[Page]}
            {ShowResult && <Result I={Countresult('I')} E={Countresult('E')} N={Countresult('N')} S={Countresult('S')} F={Countresult('F')} T={Countresult('T')} P={Countresult('P')} J={Countresult('J')}/>}
        </div>
        
    );
}

export default Page1;