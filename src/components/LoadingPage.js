import React from 'react';
import styled from 'styled-components';
import Theme from 'theme';


const LoadingScreen = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme().darkest}
`;

const LoadingIndicator = styled.img`
    animation: breath 0.3s infinite linear;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    vertical-align: middle;
`;

class LoadingPage extends React.Component {
    render() {
        return (<LoadingScreen><LoadingIndicator src="images/loading.svg"></LoadingIndicator></LoadingScreen>)
    }
}

export default LoadingPage;