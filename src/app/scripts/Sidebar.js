import React from 'react';
import IconLink from './IconLink.js';

export default () => (
    <div className="sidebar">
        <IconLink 
            link="https://www.facebook.com/JoiDimineata-1712416545640091/"
            isExternal={true}
            className="fa fa-facebook fa-lg" />
        <IconLink 
            link="https://www.youtube.com/"
            isExternal={true}
            className="fa fa-youtube fa-lg" />
        <IconLink 
            link="https://soundcloud.com/joi-dimineata"
            isExternal={true}
            className="fa fa-soundcloud fa-lg" />
        <IconLink 
            link="https://www.google.com/gmail/"
            isExternal={true}
            className="fa fa-envelope-o fa-lg" />
        <IconLink 
            link="https://github.com"
            isExternal={true}
            className="fa fa-github fa-lg" />
    </div>
);