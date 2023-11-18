import React from "react";

type Example3PropsType = {
    title?: string;
    isEnabled?: (title: any) => void;
    activeAttr: boolean;
    name?: string;
};

export const Example3 = (props: Example3PropsType) => {
    return (
        <div className="on-off-buttons">
            <button
                onClick={() => {
                    props.isEnabled?.(props.title);
                    console.log(props.name);
                    
                }}
                className={props.name}
            >
                {props.title}
            </button>
        </div>
    );
};
