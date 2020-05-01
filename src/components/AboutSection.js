import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';
import SocialIcons from './SocialIcons';

const Section = styled.div`
    min-height: 250px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const AboutSectionWrapper = styled.div`
    .btn-success {
        background-color: ${Theme().lightest};
        border-color: ${Theme().lightestMed};
    }
`;

const SubSection = styled.div`
    padding: 8px;
    flex-grow: 1;
`;

const PropList = styled.ul`
    list-style: none;
    padding:0;

    li {
        color: ${Theme().neutral};
        text-transform: uppercase;
        padding-top: 8px;
    }
`;

const PropListItem = styled.li``;

class AboutSection extends React.Component {
    render() {
        return (
            <AboutSectionWrapper>
                <Section id="about">
                    <SubSection>
                        <h2 style={{maxWidth: '350px'}}>
                            <span style={{color: Theme().lightest}}>Developer</span>, Coffee, Hiking
                        </h2>
                        <p style={{maxWidth: '500px'}}>
                            With experience from a wide range of projects, I can provide assistance with whatever you can think of.
                        </p>

                        <SocialIcons style={{marginBottom: '16px', marginTop: '32px'}}></SocialIcons>
                        <button className="btn btn-secondary">Hire Me</button>

                    </SubSection>
                    <SubSection>
                        <PropList>
                            <PropListItem>Development</PropListItem>
                            <PropListItem>Python</PropListItem>
                            <PropListItem>Java</PropListItem>
                            <PropListItem>AngularJS</PropListItem>
                            <PropListItem>React</PropListItem>
                            <PropListItem>WordPress</PropListItem>
                        </PropList>
                    </SubSection>
                </Section>
            </AboutSectionWrapper>
        );
    }
}

export default AboutSection;