import React                                            from 'react';
import ReactDOM                                         from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }    from 'react-router';
import Header                                           from './Header.js';
import PodcastsPage                                     from './PodcastsPage.js';
import WritingsPage                                     from './WritingsPage.js';
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
                <div class="sliding-menu__cover"></div>
            </div>
        );
    }
}

const RouteHandler = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PodcastsPage}/>
            <Route path="/podcast" component={PodcastsPage}/>
            <Route path="/ganduri" component={WritingsPage}/>
        </Route>
    </Router>
);

ReactDOM.render(
    <RouteHandler />,
    document.querySelector('.app')
);

export default App;