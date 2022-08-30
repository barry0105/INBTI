import React from 'react';
import './ExplainPage.css';
import { Link, Router,  useNavigate} from 'react-router-dom';
function ExplainPage(props) {
    const navigate = useNavigate();
    return (
        <div className='allMBTI-background'>
            <h1>INBTI 전체 유형 설명 페이지</h1>
            <div className='Big-explain'>
                <div className='explain-NT'>
                        NT 유형
                        <div className='explain'>
                        호기심이 많은 NT형은 지적 호기심도 커서 학업이나 업무에 열의가 있고 적극적입니다. 또 스스로에 대해 엄격한 편이고, 자기 계발에도 관심이 많아 완벽주의자로 보이기도 합니다. 직설적인 어휘를 구사하며 객관적이고 분석적으로 상황을 판단하는 NT유형은 타인을 이끄는 역할이나 전문성을 지닌 직업이 어울립니다.
                        </div>
                    </div>
                    <div className='explain-NF'>
                        NF 유형
                        <div className='explain'>
                        이상주의자 NF형은 자아실현이라는 목표를 위해 진실하게 몰두하는 타입입니다. 언어 능력이 뛰어나 유창하게 말하고 쓰는 능력을 갖춘 경우가 많으며, 주위 사람들에게 영감과 영향을 주는 경향이 있습니다. 다른 사람과의 관계 형성에 에너지를 투자하며, 타인의 행동에 대해 깊게 생각하고, 장점을 잘 찾아내는 편입니다.
                        </div>
                    </div>
                    <div className='explain-SJ'>
                        SJ 유형
                        <div className='explain'>
                        소속감을 중시하는 SJ형은 남에게 도움을 주거나 돌보는 역할을 맡는 것이 어울립니다. 이들은 조직의 규칙을 따르는 것을 좋아하며, 의무감과 책임감이 강한 편입니다. 이 유형들은 급격한 변화를 싫어하고 과거의 경험이나 원칙을 옹호하며, 혁신보다는 점진적 발전을 선호합니다. 자신이 속한 자리에서 본분을 다하는 충실하고 헌신적인 성격의 사람들입니다.
                        </div>
                    </div>
                    <div className='explain-SP'>
                        SP 유형
                        <div className='explain'>
                        모험을 즐기고 자유를 좋아하는 SP 유형은 경험을 중시하고 모험을 즐기는 경향이 있습니다. 덕분에 갑작스러운 위기상황에 가장 잘 대처하는 유형이기도 합니다. 새로운 것을 선호하고 낙천적이며 쾌활한 성격이 많고, 창조적인 경향을 지닌 사람들도 있습니다. SP형은 평등하고 관용적인 태도로 타인을 대하는 편입니다.
                        </div>
                    </div>
            
            <h2>추천 직업</h2>
            <hr/>
            <div className='I-explain'>
                <div className='explain-I'>
                    I 유형
                    <div className='explain'>
                        I 유형은 뚜렷한 자기 의지가 있습니다.
                        타인에게 적극적으로 이야기하는 것과는 별개로, 자신만의 가치관이 뚜렷한 편입니다.<br/>
                        주요 특징으로는 깊이있는 대인관계 유지, 조용하고 신중, 이해한 다음 경험 등이 있습니다.
                    </div>
                </div>
                <div className='explain-INT'>
                    INT 유형
                    <img src='../../img/result_img/int.png'></img>
                    <div className='explain'>
                        <p>추천 직업</p>
                        <span className='good-jobs'>연구원, 시스템 개발 전문가, 컴퓨터 보안 전문가, 소프트웨어 엔지니어, 프로그래머, 빅데이터 분석가</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>교사, 서비스 담당자, 관리직, 마케터</span>
                    </div>
                </div>
                <div className='explain-INF'>
                    INF 유형
                    <img src='../../img/result_img/inf.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>연구원, 개발자, 마케팅 담당자, 프로젝트 관리자, 프리랜서</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>자영업자, 정보기술 컨설턴트, 사업가</span>
                    </div>
                </div>
                <div className='explain-ISJ'>
                    ISJ 유형
                    <img src='../../img/result_img/isj.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>공무원, 군인, 교사</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>영화 제작자, 디자이너, 코미디언</span>
                    </div>
                </div>
                <div className='explain-ISP'>
                    ISP 유형
                    <img src='../../img/result_img/isp.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>소프트웨어 개발자, 연구원, 네트워크 관리자, 빅데이터 분석가</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>마케팅 전문가, 정치인, 교사, 사업가</span>
                    </div>
                </div>
            </div>
            <div className='E-explain'>
            <div className='explain-E'>
                    E 유형
                    <div className='explain'>
                        E 유형은 유행에 상대적으로 민감하고, 생각이나 도덕성 등의 기준도 다수의 것을 따라가는 경향이 있습니다.<br/>
                        주요 특징은 폭넓은 대인관계 유지, 사교적, 정열적, 활동적 등이 있습니다.
                    </div>
                </div>
                <div className='explain-ENT'>
                    ENT 유형
                    <img src='../../img/result_img/ent.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>관리자, 발명가, 사업가</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>공무원, 서비스직, 디자이너</span>
                    </div>
                </div>
                <div className='explain-ENF'>
                    ENF 유형
                    <img src='../../img/result_img/enf.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>사업가, 정치인, 기획자</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>데이터 분석가, 공무원, 프로그래머, 네트워크 엔지니어, 기술자</span>
                    </div>
                </div>
                <div className='explain-ESJ'>
                    ESJ 유형
                    <img src='../../img/result_img/esj.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>관리자, 군인, 공무원</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>디자이너, 컴퓨터 컨설턴트, 편집자, 예체능 교사</span>
                    </div>
                </div>
                <div className='explain-ESP'>
                    ESP 유형
                    <img src='../../img/result_img/esp.png'></img>
                    <div className='explain'>
                    <p>추천 직업</p>
                        <span className='good-jobs'>빅데이터 전문가, 기업가, 군인, 경찰, 소방관</span>
                        <p>비추천 직업</p>
                        <span className='notgood-jobs'>과학자, 컴퓨터 프로그래머, 웹 개발자</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ExplainPage;