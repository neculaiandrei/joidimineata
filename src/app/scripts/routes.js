import React                                            from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App                                              from './App.js';
import Podcasts                                         from './Podcasts.js';
import Podcast                                          from './Podcast.js';
import Writings                                         from './Writings.js';
import Writing                                          from './Writing.js';

const Routes = () => (
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

export default Routes;