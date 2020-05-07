import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';
import ScrollTo from '../services/ScrollTo';

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
    cursor: pointer;
`;

class HeaderMenu extends React.Component {
    constructor() {
        super();
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(e, selector) {
        e.preventDefault();
        ScrollTo(selector);
    }

    render() {
        return (       
        <Menu>
            <MenuItem onClick={e => this.scrollTo(e, '#about')}>
                About
            </MenuItem>
            <MenuItem onClick={e => this.scrollTo(e, '#resume')}>
                Resume
            </MenuItem>
            <MenuItem onClick={e => this.scrollTo(e, '#hire')}>
                Hire
            </MenuItem>
        </Menu>);
    }
}

export default HeaderMenu;