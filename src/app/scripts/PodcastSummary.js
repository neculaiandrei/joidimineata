import React    from 'react';
import Post     from './Post.js';
import Player   from './Player.js';

class PodcastSummary extends React.Component {
    render() {
        return (
            <Post date={this.props.date}
                title={this.props.title}
                link={this.props.link}>
                <Player />
            </Post>
        );
    }
}

export default PodcastSummary;