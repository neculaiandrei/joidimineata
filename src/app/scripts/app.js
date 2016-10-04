import React                                            from 'react';
import ReactDOM                                         from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Header                                           from './Header.js';
import Podcasts                                         from './Podcasts.js';
import Podcast                                          from './Podcast.js';
import Writings                                         from './Writings.js';
import Writing                                          from './Writing.js';
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

const RouteHandler = () => (
    <Router history={browserHistory}> 
        <Route path="/" component={App}>
            <IndexRedirect to="/podcast" /> 
            <Route path="/podcast" component={Podcasts} />
            <Route path="/podcast/:id" component={Podcast} />
            <Route path="/ganduri" component={Writings} />
            <Route path="/ganduri/:id" component={Writing} />
        </Route>
    </Router>
);

ReactDOM.render(
    <RouteHandler />,
    document.querySelector('.app')
);

export default App;