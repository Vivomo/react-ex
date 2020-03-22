import React, {useState} from 'react';

let Mouse = (props) => {
    let [coordinate, setCoordinate] = useState({
        x: 0,
        y: 0
    });
    let handleMouseMove = (event) => {
        setCoordinate({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <div style={{ height: '200px', background: '#ccc' }} onMouseMove={handleMouseMove}>
            {props.render(coordinate)}
        </div>
    );
};

let RenderProps = () => {
    return (
        <div style={{ height: '100%' }}>
            <Mouse render={({ x, y }) => <h1>The mouse position is ({x}, {y})</h1>}/>
        </div>
    );
};

export default RenderProps;
