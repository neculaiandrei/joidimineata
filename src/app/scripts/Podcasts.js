import React                            from 'react';
import {Podcasts as PodcastData}        from './data.js';
import PodcastSummary                   from './PodcastSummary.js';

class Podcasts extends React.Component {
    render() {
        var posts = PodcastData.map((post) => (
            <PodcastSummary key={post.id} 
                        date={post.date}
                        title={post.title}
                        link={'/podcast/' + post.id} />
        ));

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Podcasts;