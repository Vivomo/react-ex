import React from 'react';
import importedComponent from 'react-imported-component';

export const JsonEditor = importedComponent(() => import(/* webpackChunkName:'jsoneditor' */'jsoneditor-react')
    .then(({ JsonEditor: Editor }) => {
        return (props) => {
            return <Editor {...props}/>;
        };
    }));

export default JsonEditor;