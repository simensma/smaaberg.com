import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Theme from 'theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import HeaderMenu from './HeaderMenu';

const CT = styled.div`
    color: white;
`;

const Hello = styled.span`
    color: ${Theme().lightest}
`;

const ImText = styled.div`
    display: flex;
`;

const SocialIcons = styled.div`
    display: flex;
    color: white;

    font-size: 18px;
    margin-bottom: 48px;

    a + a {
        margin-left: 16px;
    }
    
    a {
        color: white;

        &:hover {
            color: #eee;
        }
    }
`;

class HeaderContent extends React.Component {
    render() {
        return (
            <CT>
                <h1 style={{marginTop: 0}}><Hello>Hello</Hello>,<br/><ImText>I'm&nbsp;<Typewriter
                    options={{
                        strings: ["Simen", "a developer", "a coffee lover"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 500,
                        delay: 75
                    }}>
                    </Typewriter></ImText>
                </h1>

                <SocialIcons>
                    <a href="https://github.com/simensma" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    <a href="https://facebook.com/simensma" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/simensma" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href="mailto:simensma@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                </SocialIcons>

                <HeaderMenu></HeaderMenu>
            </CT>
            );
    }
}

export default HeaderContent;