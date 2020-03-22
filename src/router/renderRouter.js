import React from 'react';
import {Route} from 'react-router-dom';

let renderRouter = (routerList) => {
    if (!routerList) {
        return null;
    }
    return routerList.map(item => {
        return <Route key={item.path} path={item.path} exact={item.exact} component={item.component}/>;
    });
};

export default renderRouter;