import React from 'react';
import {Writings as WritingsData}      from './data.js';
import WritingSummary  from './WritingSummary.js';

class Writings extends React.Component {
    render() {
        var posts = WritingsData.map((post) => (
            <WritingSummary key={post.id}  
                        date={post.date}
                        title={post.title}
                        link={'/ganduri/' + post.id} />
        ));
        
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Writings;