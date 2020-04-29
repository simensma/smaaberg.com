import React from 'react';
import Theme from '../theme';
import styled from 'styled-components';

const Section = styled.div`
    min-height: 250px;
    display: flex;
`;

const SubSection = styled.div`
    padding: 8px;
`;

class AboutSection extends React.Component {
    render() {
        return (
            <Section>
                <SubSection>
                    <h2><span style={{color: Theme().lightest}}>Developer</span>, Coffee Lover, Hiker</h2>
                    <p>
                        With experience from a wide range of projects, I can provide assistance with whatever you can think of.
                    </p>
                </SubSection>
                <SubSection>
                    <ul>
                        <li>Development</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>AngularJS</li>
                        <li>React</li>
                        <li>WordPress</li>
                    </ul>
                </SubSection>
            </Section>
        );
    }
}

export default AboutSection;