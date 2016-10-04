import React                                            from 'react';
import Header                                           from './Header.js';
import Sidebar                                          from './Sidebar.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Sidebar />
                <div className="sliding-menu__cover"></div>
            </div>
        );
    }
}

export default App;