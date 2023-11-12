import React, { useState } from "react";

type Example2PropsType = {
    value: (param: string) => void;
};

export const Example2 = (props: Example2PropsType) => {
    const [todo, setTodo] = useState<string>("");

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
