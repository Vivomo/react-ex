import React from 'react';
import {Link} from 'react-router-dom';

const Menu = ({data}) => {
    return (
        <ol className="c-menu">
            {
                data.map(item => {
                    if (item.subs) {
                        return <Menu data={item.subs}/>;
                    }
                    return <li key={item.path}><Link to={item.path}>{item.name}</Link></li>;
                })
            }
        </ol>
    );
};

export default Menu;