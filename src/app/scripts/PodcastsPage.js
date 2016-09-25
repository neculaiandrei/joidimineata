import React        from 'react';
import {Podcasts}      from './data.js';
import PodcastPost  from './PodcastPost.js';

class PodcastsPage extends React.Component {
    render() {
        var posts = Podcasts.map((post) => (
            <PodcastPost date={post.date}
                        title={post.title} />
        ));

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default PodcastsPage;