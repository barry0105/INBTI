import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firestore } from "../firebase.js";
import { Link } from 'react-router-dom';
function Home(props) {
    useEffect(()=>{
        getTime();
        
    },[]);
    var [TotalUsers, SetTotalUser] = useState(0);
    var [TodayUsers, SetTodayUser] = useState(0);
    function getTime(){
        let today = new Date();   
        let hours = today.getHours();
        let min = today.getMinutes();
        countUsers(hours, min);
    }
    function updateUsers(name, num){
        const coll = firestore.collection("Howmany");
        coll.doc("LnAhENSX6OoTqloqOA1z").update(name,num);
    }
    function countUsers(hours,min){
        const coll = firestore.collection("Howmany");   
        coll.doc("LnAhENSX6OoTqloqOA1z").get().then((doc) => {
            updateUsers('Total',doc.data()['Total']+1);
            if(hours===0 && min===0){
                updateUsers('Today',0);
            }
            else{
                updateUsers('Today',doc.data()['Today']+1);
            }
            SetTodayUser(doc.data()['Today']);
            SetTotalUser(doc.data()['Total']);
            
        });
    }
    return (
        <MiddleSection>
            <MidText>첫 취업 제대로 알고 하자 ! <br/>인마고 취업 도우미 !</MidText>
            <Scrollimg/>
            <ConnectedPeople>현재까지 {TotalUsers}명의 사람들이 INBTI를 이용했어요 ! <br/> Today : {TodayUsers}</ConnectedPeople>
            <ToSurveyButton onClick={()=>{window.location.replace("/Survey")}}>성향검사 받기</ToSurveyButton>
        </MiddleSection>
    );
}
const MiddleSection = styled.section`
    width: 100%;
    height: 140%;
    background-image: url('/img/bg.jpg');
    background-repeat: no-repeat;
    background-size:240vh;
    background-color: #ff3300;
    @media all and (max-width: 768px){
        background-size: 200vh;
    }
`;
const MidText = styled.div`
    color: gray;
    font-size: 3vw;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
`;
const Scrollimg = styled.img.attrs({
    src:'img/scroll.png',
})`
position:absolute;
top: 87%;
left: 50%;
transform: translate(-50%,-50%);
`;
const ConnectedPeople = styled.div`
position:absolute;
top: 105%;
left: 50%;
transform: translate(-50%,-50%);
color: white;
font-size: 2vw;
text-align: center;
line-height: 200%;
@media all and (max-width: 768px){
   font-size: 5vw;
   width: 80%;
   top: 110%;
}
`;
const ToSurveyButton = styled.button`
    position: absolute;
    border: 0;
    font-size: 2vw;
    padding: 15px 20px 15px 20px;
    border-radius: 30px 30px 30px 30px;
    top: 123%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 15vw;
    background-color: blue;
    color:white;
    &:hover{
        cursor: pointer;
        background-color: darkblue;
    }
    @media all and (max-width: 768px){
        width: 50%;
        height 15%;
        top: 130%;
        font-size: 5vw;
    }
`;
export default Home;