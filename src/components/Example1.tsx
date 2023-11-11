import React, { useState } from "react";

export const Example1 = () => {
    const [counter, setCount] = useState(0);
    const [isActive, setActive] = useState(false);

    const onBurgerClick = () => {
        setActive(!isActive);
        console.log(isActive);
    };

    return (
        <div>
            <p>Вы кликнули {counter} раз(а)</p>
            <button onClick={() => setCount(counter + 1)}>Нажми на меня</button>

            <hr />

            {/* Change boolean value on click */}
            <p>Menu</p>
            <p>{isActive.toString()}</p>
            <button onClick={onBurgerClick}> Menu </button>

            <hr />

            
        </div>
    );
};