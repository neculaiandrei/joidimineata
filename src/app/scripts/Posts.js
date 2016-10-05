import React        from 'react';
import { Podcasts } from './data.js';
import SearchInput  from './SearchInput.js';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.createRow = this.createRow.bind(this);
    }

    handleChange(text) {
        this.setState({
            text: text
        });
    }

    createRow(podcast, index) {
        if (podcast.title.indexOf(this.state.text) == -1) {
            return;
        }

        return (
            <tr>
                <td>{index}</td>
                <td>{podcast.id}</td>
                <td>{podcast.title}</td>
                <td><i className="fa fa-pencil-square-o"></i>&nbsp;&nbsp;&nbsp;<i className="fa fa-trash-o"></i></td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <div className="jd-table">
                    <SearchInput text={this.state.text} onChange={this.handleChange} />
                    <table>
                        <thead>
                            <tr>
                                <th>Nr</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Podcasts.map(this.createRow)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Posts;