import React                    from 'react';
import { Router, withRouter }   from 'react-router';
import Post                     from './Post.js';
import ExtendedPlayer           from './ExtendedPlayer.js';
import { Podcasts }             from './data.js';

class Podcast extends React.Component {
    constructor(props) {
        super();
        this.podcast = Podcasts.find((p) => {return p.id == props.params.id;});
    }

    render() {
        return (
            <Post date={this.podcast.date}
                title={this.podcast.title}>
                {this.podcast.id}
                <ExtendedPlayer />
            </Post>
        );
    }
}

export default withRouter(Podcast);