import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Menu from './components/menu/Menu';

import routerConfig from './router/config';
import renderRouter from './router/renderRouter';


let App = () => {
    return (
        <div className="App">
            <div className="wrap">
                <Router>
                    <>
                        <Menu data={routerConfig}/>
                        <div className="c-page">
                            {
                                renderRouter(routerConfig)
                            }
                        </div>
                    </>
                </Router>
            </div>
        </div>
    );
};

export default App;
