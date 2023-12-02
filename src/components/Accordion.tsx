import React from "react";

type AccordionPropsType = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div className="main-acccordion">
            <div className="acc-title" onClick={() => {
                props.setCollapsed(!props.collapsed);
            }}>Title</div>
            {props.collapsed && <AccordionMenu />}
        </div>
    );
};

const AccordionMenu = () => {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
};
