import React        from 'react';
import Post         from './Post.js';
import { Writings } from './data.js';

class Writing extends React.Component {
    constructor(props) {
        super();
        this.writing = Writings.find((w) => {return w.id == props.params.id;});
    }

    render() {
        return (
            <Post date={this.writing.date}
                title={this.writing.title}>
                {this.writing.id}
            </Post>
        );
    }
}

export default Writing;