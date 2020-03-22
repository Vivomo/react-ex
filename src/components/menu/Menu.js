import React from 'react';
import {Link} from 'react-router-dom';

const Menu = ({data}) => {
    return (
        <ol className="c-menu">
            {
                data.map((item, i) => {
                    if (item.routes) {
                        return (
                            <React.Fragment key={i}>
                                <li key={i}>{item.name}</li>
                                <Menu data={item.routes}/>
                            </React.Fragment>
                        );
                    }
                    return <li key={i}><Link to={item.path}>{item.name}</Link></li>;
                })
            }
        </ol>
    );
};

export default Menu;