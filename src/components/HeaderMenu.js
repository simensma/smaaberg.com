import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';
import $ from 'jquery'; 

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
        $('html, body').delay(0).animate({scrollTop: $(selector).offset().top }, 1000);
    }

    render() {
        return (       
        <Menu>
            <MenuItem onClick={e => this.scrollTo(e, '#about')}>
                About Me
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