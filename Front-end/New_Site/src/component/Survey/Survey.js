import React from 'react';
import Page from './Page';
function Survey(props) {
    return (
        <>
        {/*<iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/f875cb25-092b-4adb-be83-5337b83c2f89"></iframe>*/}
            <Page/>
                <div onClick={()=>window.location.replace("/")}><h2>홈으로 </h2></div>
        </>
    );
}

export default Survey;