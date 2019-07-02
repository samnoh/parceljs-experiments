import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
            <button onClick={() => setValue(0)}>0</button>
        </>
    );
};

export default Counter;
