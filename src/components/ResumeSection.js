import Theme from '../theme';
import styled from 'styled-components';
import React from 'react';

const Section = styled.div`
    min-height: 250px;
    display: flex;
    justify-content: space-evenly;

    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const SubSection = styled.div`
    padding: 0 0 16px 0;
    flex-grow: 1;
    background: rgba(0,0,0,0.25);
    max-width: 600px;
    margin-bottom: 16px;

    h3 {
        background: ${Theme().lightest};
        padding: 16px 16px;
        margin-top: 0;
        margin-bottom: 16px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Entry = styled.div`
    border-left: 1px solid ${Theme().lightest};
    padding-left: 32px;
    padding-bottom: 8px;
    position: relative;
    margin: 0 16px;

    h4 {
        margin-top: 0;
    }

    &::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 0.75rem;
        height: 0.75rem;
        background: ${Theme().darkest};
        left: -0.4rem;

        border-radius: 50%;
        border: 2px solid ${Theme().lightest};
    }

    p + p {
        margin-top: 0;
    }
`;

const TimeP = styled.p`
    color: ${Theme().lightest};
`;

const Description = styled.p`
    color: #999;
`;

class ResumeSection extends React.Component {
    render() {
        return (
            <div>
                <Section id="resume">
                    <SubSection style={{display: 'flex', flexDirection: 'column'}}>
                        <h3>Education</h3>

                        <Entry>
                            <h4>MSc in Computer Science</h4>
                            <p>Norwegian University of Science and Technology</p>
                            <TimeP>Aug 2009 - Jun 2014</TimeP>
                            <Description>
                                <ul>
                                    <li>Field: Software Development and Information Systems</li>
                                    <li>Thesis Published at the “1st International Workshop on Social Personalisation“ at ACM Hypertext 2015</li>
                                </ul>
                            </Description>
                        </Entry>

                        <Entry style={{flexGrow: 1}}>
                            <h4>Queensland University of Technology</h4>
                            <p>Study Abroad Diploma in Computer Science</p>
                            <TimeP>Jul 2012 - Jul 2013</TimeP>
                            <Description>
                                <ul>
                                    <li>One year of postgraduate studies as part of my master’s degree</li>
                                </ul>
                            </Description>
                        </Entry>
                    </SubSection>
                    <SubSection>
                        <h3>Experience</h3>

                        <Entry>
                            <h4>Senior Software Developer</h4>
                            <p>SKIO Music</p>
                            <TimeP style={{marginBottom: 0}}>Senior Software Developer: Apr 2018 - Feb 2020</TimeP>
                            <TimeP>Full-Stack Software Developer: Aug 2015 - Apr 2018</TimeP>
                            <Description>
                                <ul>
                                    <li>Co-lead of the tech team of a music collaboration and licensing platform in a period of 100x user base growth</li>
                                    <li>Development of services using Python (Django), Java (Spring Boot), and AngularJS</li>
                                </ul>
                            </Description>
                        </Entry>
                        <Entry>
                            <h4>Software Developer</h4>
                            <p>Visma Consulting</p>
                            <TimeP>Aug 2014 - Aug 2015</TimeP>
                            <Description>
                                <ul>
                                    <li>Map-based iOS app in Swift for locating charging stations and paying for charging of electric cars</li>
                                    <li>Hybrid app (iOS/Android) for booking accommodation with the Norwegian Trekking Association</li>
                                    <li>Developed and tested reusable templates used for automated correspondence with Norwegian tax-payers by the Norwegian Labour and Welfare Administration, using JavaScript and HP Exstream</li>
                                </ul>
                            </Description>
                        </Entry>
                    </SubSection>
                </Section>

                <div style={{textAlign: 'center', marginTop: '32px'}}>
                    <button className="btn btn-secondary">Request Full CV</button>
                </div>
            </div>

        );
    }
}

export default ResumeSection;