import React from 'react';
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

const Icons = styled.div`
    display: flex;
    color: white;

    font-size: 18px;

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

class SocialIcons extends React.Component {
    render() {
        return (<Icons style={this.props.style}>
            <a href="https://github.com/simensma" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://facebook.com/simensma" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/simensma" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="mailto:simensma@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
        </Icons>);
    }
}

export default SocialIcons;