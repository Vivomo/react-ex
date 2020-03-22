import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';

import Home from './components/home';
import About from './components/about';
import ContextTest from './components/context-test';
import AsyncSetState from './components/async-set-state';
import TestModal from './components/test-modal';
import TestForceUpdate from './components/test-force-update';
import SetState from './components/set-state';
import ReduxTest from './components/redux-test';
import HookTest from './components/hook-test';
import TestPure from './components/test-pure';
import RenderProps from './components/render-props';
import TestEffect from './components/test-effect';
import SyncUpdate from './components/sync-update';
import TestLifeCircle from './components/test-lifecircle';


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
            }, {
                path: '/testLifeCircle',
                name: '生命周期测试',
                component: TestLifeCircle
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
