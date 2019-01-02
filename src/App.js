import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import ContextTest from './components/ContextTest';
import AsyncSetState from './components/AsyncSetState';
import TestModal from './components/TestModal';

class App extends Component {
    state = {
        catalog: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/async-set-state',
                name: 'setState执行的异步与否',
                component: AsyncSetState
            },{
                path: '/context-test',
                name: 'React 16.3 context API 测试',
                component: ContextTest
            },{
                path: '/about',
                name: 'About',
                component: About
            },{
                path: '/testModal',
                name: 'testModal',
                component: TestModal
            },{
                path: '/uploadFile',
                name: 'uploadFile',
                component: TestModal
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>关于React的一些知识点</h1>
                <Router>
                    <div>
                        <ul>
                            {
                                this.state.catalog.map(item => (
                                    <li key={item.path}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <hr/>
                        {
                            this.state.catalog.map(item => (
                                <Route key={item.path} path={item.path} component={item.component}/>
                            ))
                        }
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
