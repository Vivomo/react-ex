import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';

import Menu from './components/menu/Menu';

import routerConfig from './router/config';
import RenderRouter from './router/RenderRouter';


let App = () => {
    console.log(RenderRouter(routerConfig));
    return (
        <div className="App">
            <div className="wrap">
                <Router>
                    <>
                        <Menu data={routerConfig}/>
                        <div className="c-page">
                            <Switch>
                                {
                                    routerConfig.map((route, i) => {
                                        return <RenderRouter key={i} {...route}/>;
                                    })
                                }
                            </Switch>
                            {/*{*/}
                            {/*    renderRouter(routerConfig)*/}
                            {/*}*/}
                        </div>
                    </>
                </Router>
            </div>
        </div>
    );
};

export default App;
