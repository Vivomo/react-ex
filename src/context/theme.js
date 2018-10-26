import React from "react";

export const themes = {
    light: {
        foreground: '#000',
        background: '#eee',
    },
    dark: {
        foreground: '#fff',
        background: '#222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);

console.log(ThemeContext);