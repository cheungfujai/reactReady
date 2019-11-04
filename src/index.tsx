import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import { Main } from './page/Main';
import { Routingdemo } from './page/Routingdemo';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route exact path="/Routingdemo" component={ Routingdemo } />
                </Switch>
            </Router>
        </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
