import React from 'react';
import {ThemeContext} from '../../context/theme';

class TButton extends React.Component {
    render() {
        let props = this.props;
        return (
            <ThemeContext.Consumer>
                {theme => <button
                    {...props}
                    style={{
                        backgroundColor: theme.background,
                        color: theme.foreground
                    }}
                />

                }
            </ThemeContext.Consumer>
        );
    }
}
TButton.contextType = ThemeContext;

export default TButton;
