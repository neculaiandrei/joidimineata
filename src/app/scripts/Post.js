import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <div className="post__date">
                    <span>{this.props.date}</span>
                </div>
                <div className="post__content">
                    <h2 className="post__title">{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Post;