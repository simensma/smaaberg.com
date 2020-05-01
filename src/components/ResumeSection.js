import Theme from '../theme';
import styled from 'styled-components';
import { Timeline, Event } from 'react-trivial-timeline';

import React from 'react';

const Section = styled.div`
    min-height: 250px;
    display: flex;
    justify-content: space-evenly;
`;

const SubSection = styled.div`
    padding: 0 0 16px 0;
    flex-grow: 1;
    background: rgba(0,0,0,0.25);
    max-width: 600px;

    h3 {
        background: ${Theme().lightest};
        padding: 16px 16px;
        margin-top: 0;
        margin-bottom: 16px;
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
    color: #666;
`;

class ResumeSection extends React.Component {
    render() {
        return (
            <Section id="resume">
                <SubSection>
                    <h3>Education</h3>

                    <Entry>
                        <h4>MSc Computer Science</h4>
                        <p>Norwegian University of Science and Technology</p>
                        <TimeP>Aug 2009 - Jun 2014</TimeP>
                        <Description>Blah Blah</Description>
                    </Entry>

                    <Entry>
                        <h4>Queensland University of Technology</h4>
                        <p>Study abroad diploma in Computer Science</p>
                        <TimeP>Jul 2012 - Jul 2013</TimeP>
                        <Description>Blah blah</Description>
                    </Entry>
                </SubSection>
                <SubSection>
                    <h3>Experience</h3>

                    <Entry>
                        <h4>Senior Software Developer</h4>
                        <p>SKIO Music</p>
                        <TimeP>Aug 2009 - Jun 2014</TimeP>
                        <Description>Lorem ipsum dolor sit amet</Description>
                    </Entry>
                    <Entry>
                        <h4>Software Developer</h4>
                        <p>SKIO Music</p>
                        <TimeP>Aug 2009 - Jun 2014</TimeP>
                        <Description>Lorem ipsum dolor sit amet</Description>
                    </Entry>
                    <Entry>
                        <h4>Software Developer</h4>
                        <p>Visma Consulting</p>
                        <TimeP>Aug 2009 - Jun 2014</TimeP>
                        <Description>Lorem ipsum dolor sit amet</Description>
                    </Entry>
                </SubSection>
            </Section>
        );
    }
}

export default ResumeSection;