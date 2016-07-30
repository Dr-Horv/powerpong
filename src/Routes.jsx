import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Start from './pages/start';
import Root from './Root';


const routes = (
    <Route component={Root}>
        <Route path="/" component={Start}/>
    </Route>
);

export default routes;