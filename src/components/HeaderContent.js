import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Theme from 'theme';
import HeaderMenu from './HeaderMenu';
import SocialIcons from './SocialIcons';

const CT = styled.div`
    color: white;
`;

const Hello = styled.span`
    color: ${Theme().lightest}
`;

const ImText = styled.div`
    word-break: break-word;
    
    @media(min-width: 768px) {
        display: flex;
    }
    
`;

const Im = styled.span`
    @media(max-width:768px) {
        display: block;
    }
`;

class HeaderContent extends React.Component {
    render() {
        return (
            <CT>
                <h1 style={{marginTop: 0}}><Hello>Hello</Hello>,<br/><ImText><Im>I'm&nbsp;</Im><Typewriter
                    options={{
                        strings: ["Simen", "a developer", "a coffee lover"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 500,
                        delay: 75
                    }}>
                    </Typewriter></ImText>
                </h1>

                <SocialIcons style={{marginBottom: '16px', marginTop: '48px'}}>
                </SocialIcons>

                <HeaderMenu></HeaderMenu>
            </CT>
            );
    }
}

export default HeaderContent;