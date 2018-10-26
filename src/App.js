import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import ContextTest from './components/ContextTest';
import AsyncSetState from './components/AsyncSetState';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>关于React的一些知识点</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/async-set-state">setState执行的异步与否</Link>
                            </li>
                            <li>
                                <Link to="/context-test">React 16.3 context API 测试</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/async-set-state" component={AsyncSetState} />
                        <Route path="/context-test" component={ContextTest} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
