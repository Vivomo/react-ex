import React from 'react';
import {ThemeContext} from '../../context/theme';

const TButton = (props) => {
    return (
        <ThemeContext.Consumer>
            {
                theme => <button
                    {...props}
                    style={{
                        backgroundColor: theme.background,
                        color: theme.foreground
                    }}
                />
            }
        </ThemeContext.Consumer>
    );
};


export default TButton;
