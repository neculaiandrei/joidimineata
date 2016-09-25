import React from 'react';
import {Writings}      from './data.js';
import WritingPost  from './WritingPost.js';

class WritingsPage extends React.Component {
    render() {
        var posts = Writings.map((post) => (
            <WritingPost date={post.date}
                        title={post.title} />
        ));
        
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default WritingsPage;