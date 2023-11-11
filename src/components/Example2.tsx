import React, { useState } from "react";

type Example2PropsType = {
    value: any;
};

type valueType = {
    objValue: string;
};

export const Example2 = (props: Example2PropsType) => {
    const [todo, setTodo] = useState("");

    return (
        <div>
            <input
                value={todo}
                onChange={(e) => {
                    e.preventDefault();

                    setTodo(e.target.value);
                }}
                type="text"
            />
            <input
                onClick={(e) => {
                    e.preventDefault();

                    if (todo !== "") {
                        props.value(todo);
                    }

                    setTodo("");
                }}
                type="button"
                value={"Click"}
            />
        </div>
    );
};
