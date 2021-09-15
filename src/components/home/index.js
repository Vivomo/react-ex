import React, { Suspense } from 'react';
import { JsonEditor } from '../async-editor';

import importedComponent from 'react-imported-component';

// const JsonEditor = importedComponent(() =>
//         import(/* webpackChunkName:'jsoneditor' */'jsoneditor-react')
//         .then(({ JsonEditor: Editor }) => {
//         return (props) => {
//             return <Editor {...props}/>
//         }
//     })
// );


const Home = () => {
    return (
        <>
            <div>Home</div>
            <p className="red">red?</p>
            <Suspense fallback={(<div>...</div>)}>
                <JsonEditor/>
            </Suspense>
        </>
    );
};

export default Home;
