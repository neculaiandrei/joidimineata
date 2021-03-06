import React    from 'react';
import {Link}   from 'react-router';
import Menu     from './Menu.js';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__brandname">
                    <Link to="/"><em>Joi</em> Dimineata</Link>
                </div>
                <div className="header__meta">Nu te ia nimeni in serios atunci cand vorbesti de boala ta.</div>
                <div className="header__menu">
                    <Menu />
                    <i className="fa fa-search fa-lg"></i>
                </div>
            </div>
        );
    }
}

export default Header;