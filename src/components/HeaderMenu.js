import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';

const Menu = styled.div`
    display: flex;

    div + div {
        margin-left: 16px;
    }
`;

const MenuItem = styled.div`
    border-bottom: 2px solid ${Theme().lightest};
    padding-bottom: 4px;
    padding-left: 2px;
    min-width: 70px;
    text-align: left;
`;

class HeaderMenu extends React.Component {
    render() {
        return <Menu>
            <MenuItem>
                About Me
            </MenuItem>
            <MenuItem>
                Resume
            </MenuItem>
            <MenuItem>
                Hire
            </MenuItem>
        </Menu>;
    }
}

export default HeaderMenu;