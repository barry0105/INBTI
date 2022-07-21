import React, { useReducer, useState } from 'react';
import './page.css';
import Result from '../Result/Result';
import INFP from '../Result/INFP.js';
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
    const Question = [
        {
            'id' : 0,
            'Question' : '너는 어떤 사람이라고 생각해?',
            'Answer' : ['정적인 사람','활발한 사람'],
            'Values' : ['I','E']
        },
        {
            'id' : 1,
            'Question' : '질문 2',
            'Answer' : ['대답 1','대답 2','대답 3'],
            'Values' : ['E','I','J']
        },
        {
            'id' : 2,
            'Question' : '질문 3',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['E','I']
        },
        {
            'id' : 3,
            'Question' : '질문 4',
            'Answer' : ['대답 1','대답 2','대답 3'],
            'Values' : ['S','N','F']
        },{
            'id' : 4,
            'Question' : '질문 5',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['N','S']
        },{
            'id' : 5,
            'Question' : '질문 6',
            'Answer' : ['대답 1','대답 2','대답 3','대답 4'],
            'Values' : ['T','F','J', 'P']
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