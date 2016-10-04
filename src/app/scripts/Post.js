import React    from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <div className="post__date">
                    <span>{this.props.date}</span>
                </div>
                <h2 className="post__title">
                    <Link to={this.props.link}>{this.props.title}</Link> 
                </h2>
                {this.props.children}
            </div>
        );
    }
}

export default Post;