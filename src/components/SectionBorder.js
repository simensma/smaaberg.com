import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
`;

const TopArrowContainer = styled(ArrowContainer)`
    bottom: auto;
    top: 0;
`;

const arrowColor = Theme().darkest;

const Arrow = styled.div`
    color: ${arrowColor};
    width: 0;
    height: 0;
`;

const LeftArrowContent = styled(Arrow)`
    border-bottom: 100px solid ${arrowColor};
    border-left: 0px solid transparent;
    border-right: 70vw solid transparent;
`;

const RightArrowContent = styled(Arrow)`
    border-bottom: 120px solid ${arrowColor};
    border-left: 30vw solid transparent;
    border-right: 0 solid transparent;
    position: absolute;
    right: 0;
    bottom: 0;
`;

const TopLeftArrowContent = styled(Arrow)`
    border-top: 100px solid ${arrowColor};
    border-left: 0px solid transparent;
    border-right: 30vw solid transparent;
    top: 0;
`;
const TopRightArrowContent = styled(Arrow)`
    border-top: 120px solid ${arrowColor};
    border-left: 70vw solid transparent;
    border-right: 0 solid transparent;
    position: absolute;
    right: 0;
    top: 0;
`;

const Container = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
`;

const TopContainer = styled(Container)`
    top: 0;
`;

const BottomContainer = styled(Container)`
    bottom: 0;
`;

class SectionBorder extends React.Component {
    render() {
        const CurrentContainer = this.props.position === 'top'? TopContainer: BottomContainer;
        if(this.props.position === 'top') {
            return (
                <div>
                    <CurrentContainer>
                        <TopArrowContainer><TopLeftArrowContent></TopLeftArrowContent></TopArrowContainer>
                        <TopArrowContainer><TopRightArrowContent></TopRightArrowContent></TopArrowContainer>
                    </CurrentContainer>
                </div>
            );
    
        } else {
            return (
                <div>
                    <CurrentContainer>
                        <ArrowContainer><LeftArrowContent></LeftArrowContent></ArrowContainer>
                        <ArrowContainer><RightArrowContent></RightArrowContent></ArrowContainer>
                    </CurrentContainer>
                </div>
            );    
        }
    }
}

export default SectionBorder;