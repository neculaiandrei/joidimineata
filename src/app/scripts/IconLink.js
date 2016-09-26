import React from 'react';
import { Link }  from 'react-router';

class IconLink extends React.Component {
    render() {
        var icon = (
            <i className={this.props.className}>
                {this.props.children}
            </i>
        );

        if (this.props.link === 'undefined') {
            return icon;
        }
        
        if (this.props.isExternal) {
            return (
                <a href={this.props.link} target="_blank">
                    {icon}
                </a>
            );
        }

        return (
            <Link to={this.props.link} activeClassName={this.props.activeClassName}>
                {icon}
            </Link>
        );
    }
}

IconLink.defaultProps = {
    isExternal: false
};

export default IconLink;