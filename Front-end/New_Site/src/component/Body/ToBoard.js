import React from 'react';
import './To.css';
function ToBoard(props) {
    return (
        <div className='middle-board'>
            <img src="img/board.png" alt="게시판 이동"></img>
            <h2 className='Text'>고민들을 사람들과 함께 나누어봐요<br/>INBTI 게시판 !</h2>
        </div>
    );
}

export default ToBoard;