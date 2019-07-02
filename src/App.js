import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('Home'));
const Counter = loadable(() => import('Counter/Counter'));

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/counter" component={Counter} />
            </Switch>
        </>
    );
};

export default App;
