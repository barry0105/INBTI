import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firestore } from "../firebase.js";
function Home(props) {
    useEffect(()=>{
        getTime();
        /*개발중 주석 해제 금지 countUsers(CurrentHours,CurrentMin);*/
    },[]);
    var [CurrentHours, SetTime] = useState(0);
    var [CurrentMin, SetMinTime] = useState(0);
    var [TotalUsers, SetTotalUser] = useState(0);
    var [TodayUsers, SetTodayUser] = useState(0);
    function getTime(){
        let today = new Date();   
        let hours = today.getHours();
        let min = today.getMinutes();
        SetTime(hours);
        SetMinTime(min);
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
            SetTotalUser(doc.data()['Total']);
            SetTodayUser(doc.data()['Today']);
        });
    }
    return (
        <MiddleSection>
            <MidText>첫 취업 제대로 알고 하자 ! <br/>인마고 취업 도우미 !</MidText>
            <Scrollimg/>
            <ConnectedPeople>현재까지 {TotalUsers}명의 사람들이 사이트를 이용했어요 ! <br/> Today : {TodayUsers}</ConnectedPeople>
        </MiddleSection>
    );
}
const MiddleSection = styled.section`
    width: 100%;
    height: 130%;
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
export default Home;