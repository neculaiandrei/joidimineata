import React    from 'react';
import Header   from './Header.js';

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="admin-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Admin;