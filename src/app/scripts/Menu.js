import React    from 'react';
import IconLink from './IconLink.js';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul className="menu__desktop">
                        <IconLink link="/podcast" className="menu__item fa fa-microphone" activeClassName="menu__item--active"/>
                        <IconLink link="/ganduri" className="menu__item fa fa-pencil" activeClassName="menu__item--active"/>
                </ul>
                <div className="menu__mobile">
                    <div className="sliding-menu">
                        <i className="sliding-menu__toogle fa fa-bars fa-lg"></i>
                        <ul className="sliding-menu__nav">
                            <li className="sliding-menu__item">
                                <i className="fa fa-microphone"></i><span>Podcast</span>
                            </li>
                            <li className="sliding-menu__item">
                                <i className="fa fa-pencil"></i><span>Blog</span>
                            </li>
                            <li className="sliding-menu__item sliding-menu__item--active">
                                <i className="fa fa-gears"></i><span>Setari</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;