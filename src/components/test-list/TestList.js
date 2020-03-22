import React from 'react';
import RenderRouter from '../../router/RenderRouter';
import Switch from 'react-router/Switch';

const TestList = ({routes}) => {
    return (
        <Switch>
            {routes.map((route, i) => <RenderRouter key={i} {...route} />)}
        </Switch>
    );
};

export default TestList;