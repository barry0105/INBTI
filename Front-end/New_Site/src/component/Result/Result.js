import React from 'react';
import './Result.css';
function Result(props) {
    var DevAll = props.N + props.T + props.F + props.S + props.J + props.P;
    var NT = props.N + props.T;
    var NF = props.N + props.F;
    var SJ = props.S + props.J;
    var SP = props.S + props.P;
    var NTPer = 100 / DevAll * NT;
    var NFPer = 100 / DevAll * NF;
    var SJPer = 100 / DevAll * SJ;
    var SPPer = 100 / DevAll * SP;
    var outSide = 100 / (props.E+props.I) * props.E;
    var inSide = 100 / (props.E+props.I) * props.I;
    const DevScore = (
        <div className='survey-result'>
            <div className='status'>
                <div className='out-Box'>
                    <p>NT 특성</p>
                    <p>{NTPer}%</p>
                    <div className='graph' style={{background: 'linear-gradient(to right, skyblue 0 '+NTPer+'%, beige '+NTPer+'% 100%)'}}>
                    </div>
                </div>
                <div className='out-Box'>
                    <p>NF 특성</p>
                    <p>{NFPer}%</p>
                    <div className='graph' style={{background: 'linear-gradient(to right, lightgreen 0 '+NFPer+'%, beige '+NFPer+'% 100%)'}}>
                    </div>
                </div>
                <div className='out-Box'>
                    <p>SJ 특성</p>
                    <p>{SJPer}%</p>
                    <div className='graph' style={{background: 'linear-gradient(to right, pink 0 '+SJPer+'%, beige '+SJPer+'% 100%)'}}>
                    </div>
                </div>
                <div className='out-Box'>
                    <p>SP 특성</p>
                    <p>{SPPer}%</p>
                    <div className='graph' style={{background: 'linear-gradient(to right, purple 0 '+SPPer+'%, beige '+SPPer+'% 100%)'}}>
                    </div>
                </div>
                Hidden 특성<br/>
                외향성 : {outSide}<br/>
                내향성 : {inSide}
            </div>
            <div className='result-job'>
                <img src='../../img/NoPic.png'></img>
                <p className='result-name'>유형 이름</p>
                <div className='explain-job'>
                    <p>블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    </p>
                </div>
                <div className='jobs-supply'>
                    <div className='good'>
                        <p>추천 직업</p>
                        <span>프로그래머</span>
                    </div>
                    <div className='notgood'>
                        <p>비추천 직업</p>
                        <span>영업</span>
                    </div>
                    
                </div>
            </div>
            <div className='etc'>
                기타 기능
                <div onClick={()=>window.location.replace("/")}><h2>홈으로 </h2></div>
            </div>
        </div>
    );
    
    return (
        <>
            {DevScore}
        </>
    );
}

export default Result;