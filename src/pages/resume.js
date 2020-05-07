import React from 'react';
import Theme from '../theme';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faFacebook,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
    faGlobe,
    faPhone,
    faMapPin
} from '@fortawesome/free-solid-svg-icons'

const HorPadding = '48px';

const Header = styled.div`
    background: ${Theme().darkest};
    -webkit-print-color-adjust: exact;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    padding-left: ${HorPadding};
    padding-right: ${HorPadding};
`;

const SocialIcon = styled.p`
    margin-bottom: 4px;
    
    svg {
        margin-right: 4px;
    }
`;

const P = styled.p`
    margin-bottom: 4px;
`;

const ContactInfo = styled.div`
    display: flex;
`;

const Page = styled.div`
    display: flex;
`;

const RightColumn = styled.div`
    background: ${Theme().lightest};
    min-width: 300px;
    max-width: 300px;
    -webkit-print-color-adjust: exact;
`;

const Content = styled.div`
    flex-grow: 1;
    padding: 16px;
    padding-left: ${HorPadding};
    padding-right: ${HorPadding};
    color: #333;

    h1,h2,h3,h4,h5,h6, p {
        color: #333;
    }
`;

const SkillsSection = styled.div`
    padding: 16px;
`;

const WorkBlock = styled.div`
    margin-bottom: 32px;
`;

const SkillsList = styled.div`
    display: flex;
    color: #666;
    font-size: 10px;
`;

const JobName = styled.h5`
    color: ${Theme().lightest} !important;
    display: flex;
    justify-content: space-between;
`;

class Resume extends React.Component {
    render() {
        return (
        <div>
            <Header>
                <div>
                    <h2 style={{margin: 0}}>Simen Fivelstad Smaaberg</h2>
                    <div>
                        <P>Software Developer</P>
    
                        <ContactInfo style={{display: 'flex'}}>
                            <P style={{marginRight: '16px'}}>
                                <SocialIcon>
                                    <FontAwesomeIcon icon={faMapPin}/> Victoria, BC
                                </SocialIcon>
                            </P>
                            <P style={{marginRight: '16px'}}>
                                <SocialIcon>
                                    <FontAwesomeIcon icon={faPhone}/> (604) 441-6263
                                </SocialIcon>
                            </P>
                            <P>
                            <SocialIcon>
                                <FontAwesomeIcon icon={faEnvelope}/> simen@smaaberg.com
                            </SocialIcon>
                            </P>
                        </ContactInfo>
                    </div>
                </div>
    
                <div>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin}/> linkedin.com/simensma
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faGithub}/> github.com/simensma
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook}/> facebook.com/simensma
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faGlobe}/> smaaberg.com
                    </SocialIcon>
                </div>
            </Header>
            <Page>
                <Content>
                    <h3 style={{marginBottom: '16px'}}>Work Experience</h3>

                    <WorkBlock>
                        <h4>SKIO Music</h4>
                        <JobName>Senior Software Developer <span>Apr 2018 - Feb 2020</span></JobName>
                        <JobName>Software Developer <span>Aug 2015 - Apr 2020</span></JobName>
                        <p>Worked as a developer building a music collaboration and licensing platform. This work involved designing, building, extending and maintaining features related to everything from audio processing, music licensing, and user handling to analytics and payments.</p>
                        <ul>
                            <li>Co-lead of tech team in a period of 100x user base growth (now 300,000+ users)</li>
                            <li>Planning, implementation, operation, and maintenance of new functionality and services</li>
                            <li>Overall system architecture, design, planning and requirements gathering</li>
                            <li>Setup, maintenance, and automation of services running in AWS</li>
                        </ul>
                        <SkillsList>
                            Python * Django * Java * Spring Boot * AWS * JavaScript * AngularJS * PostgreSQL * DynamoDB * S3 * ElasticTranscoder * SQS * SNS * ElasticBeanstalk * CloudFront * Stripe * Braintree
                        </SkillsList>
                    </WorkBlock>
                    <WorkBlock>
                        <h4>Visma Consulting</h4>
                        <JobName>Software Developer <span>Aug 2014 - Aug 2015</span></JobName>
                        <p>
                            Worked as a developer on two mobile apps and as a consultant for the Norwegian Labour and Welfare Administration's document handling system supporting over 15000 admins and sending 10's of million documents yearly.
                        </p>
                        <ul>
                            <li>Architecture, and testing of an iOS app for locating charging stations and paying for charging of electrical cars.</li>
                            <li>Architecture, and implementation of a hybrid app for booking accommodation with the Norwegian Trekking Association.</li>
                            <li>Development and testing of resuable templates used for automated correspondence with Norwegian tax-payers by the Norwegian Labour and Welfare Administration</li>
                        </ul>

                        <SkillsList>
                            Mobile * Android * iOS * Java * Swift * C# * JavaScript * HTML * CSS * Cordova * OAuth * HP Exstream
                        </SkillsList>
                    </WorkBlock>
                    <WorkBlock>
                        <h4>Norwegian University of Science and Technology</h4>
                        <JobName>Teaching Assistant - Algorithms and Data Structures <span>Aug 2013 - Dec 2013</span></JobName>
                        <ul>
                            <li>Responsible for maintaining and upgrading the automatic assignment system written in PHP</li>
                            <li>Assisted students with administrative course registration</li>
                        </ul>
                        <SkillsList>Algorithms * Data Structures * PHP * Python</SkillsList>
                    </WorkBlock>
                    <WorkBlock>
                        <h4>Norwegian University of Science and Technology</h4>
                        <JobName>Student Assistant - Objet Oriented Programming <span>Jan 2012 - Jun 2012</span></JobName>
                        <ul>
                            <li>Grading and proving feedback on weekly assignments</li>
                            <li>Assist students explaining material from lectures in more detail, giving feedback on code written, and answering questions about course related material</li>
                        </ul>
                        <SkillsList>Java * Object Oriented Programming</SkillsList>
                    </WorkBlock>
                </Content>
                <RightColumn style={{paddingRight: '48px'}}>
                    <SkillsSection>
                        <h3>Skills</h3>
                        <h5>Languages/Major Frameworks</h5>
                        Python * Django * Java * Spring-Boot * JavaScript * AngularJS 
                    </SkillsSection>
                    <SkillsSection>
                        <h5>AWS</h5>
                        DynamoDB * S3  * SQS * SNS * CloudSearch * RDS * ElasticBeanstalk * CloudFront * ElasticTranscoder
                    </SkillsSection>

                    <SkillsSection>
                        <h5>Other</h5>
                        Git * HTML * CSS + SASS * SQL (PostgreSQL), 
                    </SkillsSection>

                    <SkillsSection>
                        <h3>Education</h3>

                        <h5>MSc in Computer Science (2009 - 2014)</h5>
                        <p><b>Norwegian University of Science and Technology</b></p>
                        <p>
                            Focus on Software Development. Thesis Published at the “1st International Workshop on Social Personalisation at ACM Hypertext 2015“
                        </p>

                        <h5>Study Abroad Diploma, Computer Science (2012 - 2013)</h5>
                        <p><b>Queensland University of Technology</b></p>
                        <p>
                            One year of postgraduate studies as part of my master’s degree
                        </p>
                    </SkillsSection>
                </RightColumn>
            </Page>
        </div>
        );
    }
}
export default Resume;