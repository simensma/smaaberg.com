import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';
import SocialIcons from './SocialIcons';
import ScrollTo from '../services/ScrollTo';

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
    margin-right: 16px;

    li {
        color: ${Theme().neutral};
        text-transform: uppercase;
        padding-top: 8px;
    }
`;

const PropListItem = styled.li`
    @media(max-width: 768px) {
        padding-right: 8px;
    }
`;

class AboutSection extends React.Component {
    render() {
        return (
            <AboutSectionWrapper>
                <Section id="about">
                    <SubSection>
                        <h1 style={{maxWidth: '550px'}}>
                            <span style={{color: Theme().lightest}}>Hi.</span>
                        </h1>
                        <p style={{maxWidth: '550px'}}>
                            I'm a full-stack Software Developer based in Victoria, BC, with experience in a wide range of technologies.
                        </p>
                        <h2 style={{maxWidth: '550px', marginTop: '32px'}}>
                            <span style={{color: Theme().lightest}}>I can help.</span>
                        </h2>
                        <h5>Currently available for freelancing and full-time work</h5>
                        <p style={{maxWidth: '550px'}}>
                            If you have have a project you want to get started, need help with something, or just want to chat, then get in touch!
                        </p>

                        <SocialIcons style={{marginBottom: '16px', marginTop: '32px'}}></SocialIcons>
                        <button onClick={() => ScrollTo('#hire')} className="btn btn-secondary">Get in Touch</button>

                    </SubSection>
                    <div style={{display: 'flex'}}>
                        <SubSection>
                            <PropList>
                                <PropListItem style={{fontWeight: 600}}>Services</PropListItem>
                                <PropListItem>Full Time Work</PropListItem>
                                <PropListItem>Contracting</PropListItem>
                                <PropListItem>Freelancing</PropListItem>
                                <PropListItem>Web</PropListItem>
                                <PropListItem>Mobile</PropListItem>
                                <PropListItem>Frontend</PropListItem>
                                <PropListItem>Backend</PropListItem>
                                <PropListItem>Devops</PropListItem>
                                <PropListItem>Full-Stack</PropListItem>
                            </PropList>
                        </SubSection>
                        <SubSection>
                            <PropList>
                                <PropListItem style={{fontWeight: 600}}>Languages</PropListItem>
                                <PropListItem>Python</PropListItem>
                                <PropListItem>Java</PropListItem>
                                <PropListItem>JavaScript</PropListItem>
                                <PropListItem>Swift</PropListItem>
                                <PropListItem>PHP</PropListItem>
                                <PropListItem>C++</PropListItem>
                            </PropList>
                        </SubSection>
                        <SubSection>
                            <PropList>
                                <PropListItem style={{fontWeight: 600}}>Other</PropListItem>
                                <PropListItem>AngularJS</PropListItem>
                                <PropListItem>Django</PropListItem>
                                <PropListItem>Spring Boot</PropListItem>
                                <PropListItem>HTML, CSS + SASS</PropListItem>
                                <PropListItem>AWS Services</PropListItem>
                                <PropListItem>React</PropListItem>
                                <PropListItem>SQL</PropListItem>
                                <PropListItem>JQuery</PropListItem>
                                <PropListItem>WordPress</PropListItem>
                            </PropList>
                        </SubSection>
                    </div>
                </Section>
            </AboutSectionWrapper>
        );
    }
}

export default AboutSection;