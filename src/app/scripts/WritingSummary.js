import React    from 'react';
import Post     from './Post.js';

class Writing extends React.Component {
    render() {
        return (
            <Post date={this.props.date}
                title={this.props.title}
                link={this.props.link} >
                <i className="fa fa-file-pdf-o fa-lg"></i>
                <i className="fa fa-download fa-lg"></i>
            </Post>
        );
    }
}

export default Writing;