import React from 'react';
import styled from 'styled-components';
function NotFound(props) {
    return (
        <NotFoundWrap>
            <NotFoundText>잘못된 페이지 주소 입니다.</NotFoundText>
        </NotFoundWrap>
    );
}
const NotFoundWrap = styled.div`
    justify-content: center;
    display: flex;
    flex: 1;
`;
const NotFoundText = styled.h1`
    position: absolute;
    top: 35%;
    text-align: center;
    color: red;
    font-size: 4rem;
`;
export default NotFound;