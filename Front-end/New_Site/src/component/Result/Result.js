import { faCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Result.css';
function Result(props) {
    var allScore = props.I + props.N + props.E + props.S;
    var Dev = props.I + props.N;
    var UnDev = props.E + props.S;
    var DevPer = 100 / allScore *Dev;
    var UnDevPer = 100 / allScore * UnDev;
    const CreateChart = (range, color)=>{
        'outcircle'.style.background = "conic-gradient("+color+"0%"+range+"%, beige "+range+"100%)";
    }
    
    const DevScore = (
        <div className='survey-result'>
            전체 특성 갯수 = {props.I + props.N + props.E + props.S}
            <div className='outcircle'>
                <div className='incircle'>
                    개발자 특성
                </div>
            </div>
            개발자 퍼센트 = {DevPer}%
            비개발 퍼센트 = {UnDevPer}%
            {CreateChart(DevPer, 'purple    ')}
        </div>
    );
    
    return (
        <>
            {DevScore}
        </>
    );
}

export default Result;