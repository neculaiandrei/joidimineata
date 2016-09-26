import React    from 'react';
import Post     from './Post.js';
import Player   from './Player.js';

class PodcastPost extends React.Component {
    render() {
        return (
            <Post {...this.props}>
                <Player />
            </Post>
        );
    }
}

export default PodcastPost;