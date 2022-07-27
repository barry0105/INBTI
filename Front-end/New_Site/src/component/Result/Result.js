import React, { useEffect, useState } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import { firestore } from "../../firebase.js";
import { doc, updateDoc } from "@firebase/firestore";
function Result(props) {

    var DevAll = props.N + props.T + props.F + props.S + props.J + props.P;
    var NT = props.N + props.T;
    var NF = props.N + props.F;
    var SJ = props.S + props.J;
    var SP = props.S + props.P;
    var NTPer = Math.ceil(100 / DevAll * NT);
    var NFPer = Math.ceil(100 / DevAll * NF);
    var SJPer = Math.ceil(100 / DevAll * SJ);
    var SPPer = Math.ceil(100 / DevAll * SP);
    var outSide = Math.ceil(100 / (props.E+props.I) * props.E);
    var inSide = Math.ceil(100 / (props.E+props.I) * props.I);
    var [RINT, INTSET] = useState(0);
    var [RINF, INFSET] = useState(0);
    var [RISJ, ISJSET] = useState(0);
    var [RISP, ISPSET] = useState(0);
    var [RENT, ENTSET] = useState(0);
    var [RENF, ENFSET] = useState(0);
    var [RESJ, ESJSET] = useState(0);
    var [RESP, ESPSET] = useState(0);
    function reNewData(){
        const coll = firestore.collection("Result-Type");
        coll.doc("z7LIP4EUhYCqKnjRqYV7").get().then((doc) => {
            INTSET(doc.data().INT);
            INFSET(doc.data().INF);
            ISJSET(doc.data().ISJ);
            ISPSET(doc.data().ISP);
            ENTSET(doc.data().ENT);
            ENFSET(doc.data().ENF);
            ESJSET(doc.data().ESJ);
            ESPSET(doc.data().ESP);
        });
    }
    function Cgdata(tp, num){
        const coll = firestore.collection("Result-Type");
        coll.doc('z7LIP4EUhYCqKnjRqYV7').update(tp,num);
        reNewData();
    }
    function EorI(){
        if(outSide > inSide){
            return 'E';
        }
        else{
            return 'I';
        }
    }
    function Return_maxScore(){
        var numbers = { NTPer, NFPer, SJPer, SPPer };
        var max = Math.max.apply(null, Object.values(numbers));
        var [variable_name] = Object.entries(numbers).find(([el, val]) => val === max);
        return variable_name.substring(0,2);
    }
    function calculStr(){
        var innerStr = EorI()+Return_maxScore();
        return innerStr;
    }
    function return_GoodJobs(inner){
        if(inner === 'INT'){
            return ['연구원, ', '시스템 개발 전문가, ', '컴퓨터 보안 전문가, ', '소프트웨어 엔지니어, ', '프로그래머, ', '빅데이터 분석가'];
        }
        if(inner === 'INF'){
            return ['연구원, ', '개발자, ', '마케팅 담당자, ','프로젝트 관리자, ', '프리랜서']
        }
        if(inner === 'ISJ'){
            return ['공무원, ', '군인, ', '교사'];
        }
        if(inner === 'ISP'){
            return ['소프트웨어 개발자, ', '연구원, ', '네트워크 관리자, ', '빅데이터 분석가']
        }
        if(inner === 'ENT'){
            return ['관리자, ', '발명가, ', '사업가'];
        }
        if(inner === 'ENF'){
            return ['사업가, ','정치인, ','기획자'];
        }
        if(inner === 'ESJ'){
            return ['관리자, ', '군인, ', '공무원'];
        }
        if(inner === 'ESP'){
            return ['빅데이터 전문가, ', '기업가, ', '군인, ', '경찰, 소방관']
        }
    }
    function return_NotGoodJobs(inner){
        if(inner === 'INT'){
            return ['교사, ', '서비스 담당자, ', '관리직, ', '마케터']
        }
        if(inner === 'INF'){
            return ['자영업자, ', '정보기술 컨설턴트, ', '사업가']
        }
        if(inner === 'ISJ'){
            return ['영화 제작자, ', '디자이너, ', '코미디언']
        }
        if(inner === 'ISP'){
            return ['마케팅 전문가, ', '정치인, ', '교사, ', '사업가']
        }
        if(inner === 'ENT'){
            return ['공무원, ', '서비스직, ', '디자이너']
        }
        if(inner === 'ENF'){
            return ['데이터 분석가, ','공무원, ', '프로그래머, ', '네트워크 엔지니어, ','기술자']
        }
        if(inner === 'ESJ'){
            return ['디자이너, ', '컴퓨터 컨설턴트, ', '편집자, ', '예체능 교사']
        }
        if(inner === 'ESP'){
            return ['과학자, ', '컴퓨터 프로그래머, ', '웹 개발자']
        }
    }
    function return_explain(inner){
        if(inner === 'NT'){
            return '호기심이 많은 NT형은 지적 호기심도 커서 학업이나 업무에 열의가 있고 적극적입니다. 또 스스로에 대해 엄격한 편이고, 자기 계발에도 관심이 많아 완벽주의자로 보이기도 합니다. 직설적인 어휘를 구사하며 객관적이고 분석적으로 상황을 판단하는 NT유형은 타인을 이끄는 역할이나 전문성을 지닌 직업이 어울립니다.'; 
        }
        if(inner === 'NF'){
            return '이상주의자 NF형은 자아실현이라는 목표를 위해 진실하게 몰두하는 타입입니다. 언어 능력이 뛰어나 유창하게 말하고 쓰는 능력을 갖춘 경우가 많으며, 주위 사람들에게 영감과 영향을 주는 경향이 있습니다. 다른 사람과의 관계 형성에 에너지를 투자하며, 타인의 행동에 대해 깊게 생각하고, 장점을 잘 찾아내는 편입니다.';
        }
        if(inner === 'SJ'){
            return '소속감을 중시하는 SJ형은 남에게 도움을 주거나 돌보는 역할을 맡는 것이 어울립니다. 이들은 조직의 규칙을 따르는 것을 좋아하며, 의무감과 책임감이 강한 편입니다. 이 유형들은 급격한 변화를 싫어하고 과거의 경험이나 원칙을 옹호하며, 혁신보다는 점진적 발전을 선호합니다. 자신이 속한 자리에서 본분을 다하는 충실하고 헌신적인 성격의 사람들입니다. '
        }
        if(inner === 'SP'){
            return '모험을 즐기고 자유를 좋아하는 SP 유형은 경험을 중시하고 모험을 즐기는 경향이 있습니다. 덕분에 갑작스러운 위기상황에 가장 잘 대처하는 유형이기도 합니다. 새로운 것을 선호하고 낙천적이며 쾌활한 성격이 많고, 창조적인 경향을 지닌 사람들도 있습니다. SP형은 평등하고 관용적인 태도로 타인을 대하는 편입니다.'
        }
    }
    function count_num(inner){
        if(inner==='INF'){
            return RINF;
        }
        if(inner==='INT'){
            return RINT;
        }
        if(inner==='ISJ'){
            return RISJ;
        }
        if(inner==='ISP'){
            return RISP;
        }
        if(inner==='ENF'){
            return RENF;
        }
        if(inner==='ENT'){
            return RENT;
        }
        if(inner==='ESJ'){
            return RESJ;
        }
        if(inner==='ESP'){
            return RESP;
        }
    }
    function plusData(){
        Cgdata(calculStr(),count_num(calculStr())+1)
    }
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
            </div>
            <div className='result-job'>
                <img src='../../img/NoPic.png'></img>
                <p className='result-name'>성향 : {Return_maxScore()+'형'}</p>
                <div className='explain-job'>
                    <p>
                    {return_explain(Return_maxScore())}
                    </p>
                </div>
                <div className='jobs-supply'>
                    <div className='good'>
                        <p>추천 직업</p>
                        <span>{return_GoodJobs(calculStr())}</span>
                    </div>
                    <div className='notgood'>
                        <p>비추천 직업</p>
                        <span>{return_NotGoodJobs(calculStr())}</span>
                    </div>
                    

                </div>
            </div>
            <div className='etc'>
                {()=> plusData()}
                <div className='Same'>같은 유형의 사람들이 {count_num(calculStr)}명 있어요 !</div>
                <div onClick={()=>window.location.replace("/") } className='toBT'><h2>홈으로</h2></div>
                <Link to='/Explain' target={"_blank"} style={{textDecoration: 'none'} }><div className='toBT'><h2>전체 유형 보기</h2></div></Link>
                <div onClick={()=>window.location.replace("https://www.jobplanet.co.kr/job") } className='toBT'><h2>잡플래닛 공고 보러가기</h2></div>
                <div onClick={()=>window.location.replace("/board") } className='toBT'><h2>게시판 이동하기 </h2></div>
                <div className='fighting'>결과에 너무 신경쓰지 마세요 ! <br/> 당신의 노력과 열정만 있다면 무엇이든지 해낼수 있어요 !</div>
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