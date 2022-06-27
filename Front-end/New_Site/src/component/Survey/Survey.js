import React from 'react';
import Page from './Page';
function Survey(props) {
    return (
        <>
            <Page/>
                <div onClick={()=>window.location.replace("/")}><h2>홈으로 </h2></div>
        </>
    );
}

export default Survey;