import React from 'react';
import {ThemeContext, themes} from '../../context/theme';
import TButton from './theme-button';

const Toolbar = (props) => {
    return (
        <TButton onClick={props.changeTheme}>
            Change Theme
        </TButton>
    );
};

class ContextTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark ?
                themes.light :
                themes.dark
        }));
    };

    render() {
        return (
            <div>
                <h2>React 16.3 新增的 Context API 测试</h2>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>

            </div>
        );
    }
}

export default ContextTest;
