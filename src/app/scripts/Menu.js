import React    from 'react';
import IconLink from './IconLink.js';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul className="menu__desktop">
                    <li className="menu__item menu__item--active">
                        <IconLink link="/podcast" className="fa fa-microphone" />
                    </li>
                    <li className="menu__item">
                        <IconLink link="/ganduri" className="fa fa-pencil" />
                    </li>
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