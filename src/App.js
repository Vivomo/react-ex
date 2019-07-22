import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import About from './components/About';
import ContextTest from './components/ContextTest';
import AsyncSetState from './components/AsyncSetState';
import TestModal from './components/TestModal';
import TestForceUpdate from './components/TestForceUpdate';
import SetState from './components/SetState';
import ReduxTest from './components/ReduxTest';
import HookTest from './components/HookTest';
import TestPure from './components/TestPure';
import RenderProps from './components/RenderProps';
import TestEffect from './components/TestEffect';
import SyncUpdate from './components/SyncUpdate';


class App extends Component {
    state = {
        catalog: [
            {
                path: '/',
                name: 'Home',
                exact: true,
                component: Home
            },
            {
                path: '/async-set-state',
                name: 'setState执行的异步与否',
                component: AsyncSetState
            }, {
                path: '/context-test',
                name: 'React 16.3 context API 测试',
                component: ContextTest
            }, {
                path: '/about',
                name: 'About',
                component: About
            }, {
                path: '/testModal',
                name: 'testModal',
                component: TestModal
            }, {
                path: '/uploadFile',
                name: 'uploadFile',
                component: TestModal
            }, {
                path: '/testForceUpdate',
                name: 'testForceUpdate',
                component: TestForceUpdate
            }, {
                path: '/setState',
                name: 'setState',
                component: SetState
            }, {
                path: '/testPure',
                name: '测试 PureComponent',
                component: TestPure
            }, {
                path: '/reduxTest',
                name: 'reduxTest',
                component: ReduxTest
            }, {
                path: '/hookTest',
                name: 'hookTest',
                component: HookTest
            }, {
                path: '/renderProps',
                name: 'test renderProps',
                component: RenderProps
            }, {
                path: '/testEffect',
                name: 'TestEffect',
                component: TestEffect
            }, {
                path: '/syncUpdate',
                name: '同步更新',
                component: SyncUpdate
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <div className="wrap">
                    <Router>
                        <>
                            <ol className="c-menu">
                                {
                                    this.state.catalog.map(item => <li key={item.path}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>)
                                }
                            </ol>
                            <div className="c-page">
                                {
                                    this.state.catalog.map(item => <Route key={item.path} path={item.path} exact={item.exact} component={item.component}/>)
                                }
                            </div>
                        </>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
