import React from 'react';
import { Link } from 'react-router-dom';
import './To.css';
function Tosurvey(props) {
    return (
        <div className='middle-board'>
            <img src="img/survey.png" alt="설문 이동" className='survey' onClick={()=>{window.location.replace("/Survey")}}></img>
            <h2 className='Text'>나는 어느 직업이 맞는지 알아보자 !<br/> INBTI !</h2>
        </div>
    );
}

export default Tosurvey;